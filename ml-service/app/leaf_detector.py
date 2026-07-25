from ultralytics import YOLO

from app.config import YOLO_CONF_THRESHOLD


class LeafDetector:
    def __init__(self, model_path):
        self.model = YOLO(model_path, task="detect")

    def detect(self, image, conf: float = YOLO_CONF_THRESHOLD):
        results = self.model.predict(source=image, conf=conf, verbose=False)
        boxes = results[0].boxes
        if boxes is None or len(boxes) == 0:
            return None
        best_idx = boxes.conf.argmax().item()
        x1, y1, x2, y2 = boxes.xyxy[best_idx].tolist()
        return (int(x1), int(y1), int(x2), int(y2)), float(boxes.conf[best_idx])