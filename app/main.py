from fastapi import FastAPI, File, UploadFile
import io
from PIL import Image
from disease_classifier import DiseaseClassifier

app = FastAPI()
classifier = DiseaseClassifier(model_path="../ml-models/tflite_mobileNet_model.tflite")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")
    class_id, confidence = classifier.predict(image)
    return {
        "class_id": class_id,
        "confidence": confidence
    }