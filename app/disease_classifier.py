import numpy as np
from PIL import Image
import tensorflow as tf
Interpreter = tf.lite.Interpreter

from app.config import MAIN_MODEL_CONF_THRESHOLD, MOBILENET_IMG_SIZE, TOP_K
from app.labels import CLASS_NAMES, get_class_info

class DiseaseClassifier:
    def __init__(self, model_path: str):
        self.interpreter = Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()
 
    @staticmethod
    def _preprocess(image: Image.Image) -> np.ndarray:
        image = image.convert("RGB").resize(
            (MOBILENET_IMG_SIZE, MOBILENET_IMG_SIZE), resample=Image.NEAREST
        )
        arr = np.asarray(image).astype(np.float32)
        arr = (arr / 127.5) - 1.0  # mobilenet_v2 preprocess_input
        return np.expand_dims(arr, axis=0)
 
    @staticmethod
    def _build_top_predictions(output: np.ndarray) -> list:
        """Top-K predictions, condition-only (no plant name). Useful for
        logging/debugging what the model considered, even when the top
        prediction itself is below the confidence threshold."""
        top_k_idx = np.argsort(output)[::-1][:TOP_K]
        return [
            {
                "condition": get_class_info(i)["condition"],
                "confidence": float(output[i]),
            }
            for i in top_k_idx
        ]
 
    def predict(self, image: Image.Image) -> dict:
        input_data = self._preprocess(image)
 
        self.interpreter.set_tensor(self.input_details[0]["index"], input_data)
        self.interpreter.invoke()
        output = self.interpreter.get_tensor(self.output_details[0]["index"])[0]
 
        top_idx = int(np.argmax(output))
        confidence = float(output[top_idx])
        top_predictions = self._build_top_predictions(output)
 
        if confidence < MAIN_MODEL_CONF_THRESHOLD:
            return {
                "class_id": top_idx,
                "confidence": confidence,
                "status": "low_confidence",
                "condition": None,
                "is_healthy": None,
                "cause": None,
                "prevention": None,
                "message": (
                    "Could not confidently identify a known condition in this image. "
                    "This can happen with unsupported plants or unclear photos."
                ),
                "top_predictions": top_predictions,
            }
 
        info = get_class_info(top_idx) 
 
        return {
            "class_id": top_idx,
            "confidence": confidence,
            "status": "ok",
            "condition": info["condition"],
            "is_healthy": info["is_healthy"],
            "cause": info["cause"],
            "prevention": info["prevention"],
            "top_predictions": top_predictions,
        }
 