import os
from dotenv import load_dotenv
load_dotenv()

YOLO_MODEL_PATH = os.getenv("YOLO_MODEL_PATH")
MOBILENET_MODEL_PATH = os.getenv("MOBILENET_MODEL_PATH")

YOLO_CONF_THRESHOLD = float(os.getenv("YOLO_CONF_THRESHOLD"))
MAIN_MODEL_CONF_THRESHOLD = float(os.getenv("MAIN_MODEL_CONF_THRESHOLD"))
FALLBACK_TO_FULL_IMAGE = os.getenv("FALLBACK_TO_FULL_IMAGE", "true").lower() == "true"

MOBILENET_IMG_SIZE = 224
TOP_K = int(os.getenv("TOP_K", "5"))