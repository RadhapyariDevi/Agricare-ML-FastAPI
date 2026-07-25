import os
import warnings

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "3"      
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"     

warnings.filterwarnings(
    "ignore",
    message=".*tf.lite.Interpreter is deprecated.*"
)

import io

from fastapi import FastAPI, File, HTTPException, UploadFile
from PIL import Image, UnidentifiedImageError

from app.config import MOBILENET_MODEL_PATH, YOLO_MODEL_PATH, FALLBACK_TO_FULL_IMAGE
from app.disease_classifier import DiseaseClassifier
from app.leaf_detector import LeafDetector

app = FastAPI()

classifier = DiseaseClassifier(model_path=MOBILENET_MODEL_PATH)
detector = LeafDetector(model_path=YOLO_MODEL_PATH)


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.content_type or not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Uploaded file must be an image.")

    contents = await file.read()
    try:
        image = Image.open(io.BytesIO(contents)).convert("RGB")
    except UnidentifiedImageError:
        raise HTTPException(status_code=400, detail="Could not read the uploaded file as an image.")

    detection = detector.detect(image)

    if detection:
        bbox, det_conf = detection
        crop = image.crop(bbox)
        leaf_detected = True
    elif FALLBACK_TO_FULL_IMAGE:
        bbox, det_conf = None, None
        crop = image
        leaf_detected = False
    else:
        return {
            "leaf_detected": False,
            "bbox": None,
            "detection_confidence": None,
            "message": "No leaf detected in the image.",
        }

    result = classifier.predict(crop) 

    return {
        "leaf_detected": leaf_detected,
        "bbox": bbox,
        "detection_confidence": det_conf,
        **result,
    }