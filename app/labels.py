
CLASS_NAMES = [
    "Apple___Apple_scab",  # 0
    "Apple___Black_rot",  # 1
    "Apple___Cedar_apple_rust",  # 2
    "Apple___healthy",  # 3
    "Blueberry___healthy", # 4
    "Cherry_(including_sour)___Powdery_mildew", # 5
    "Cherry_(including_sour)___healthy",  # 6
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",  # 7
    "Corn_(maize)___Common_rust_",  # 8
    "Corn_(maize)___Northern_Leaf_Blight",  # 9
    "Corn_(maize)___healthy",  # 10
    "Grape___Black_rot",   # 11
    "Grape___Esca_(Black_Measles)",   # 12
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",  # 13
    "Grape___healthy",  # 14
    "Orange___Haunglongbing_(Citrus_greening)",  # 15
    "Peach___Bacterial_spot", # 16
    "Peach___healthy",  # 17
    "Pepper,_bell___Bacterial_spot",  # 18
    "Pepper,_bell___healthy", # 19
    "Potato___Early_blight",  # 20
    "Potato___Late_blight",   # 21
    "Potato___healthy",   # 22
    "Raspberry___healthy", # 23
    "Soybean___healthy",   # 24
    "Squash___Powdery_mildew", # 25
    "Strawberry___Leaf_scorch",# 26
    "Strawberry___healthy", # 27
    "Tomato___Bacterial_spot", # 28
    "Tomato___Early_blight", # 29
    "Tomato___Late_blight",  # 30
    "Tomato___Leaf_Mold",    # 31
    "Tomato___Septoria_leaf_spot",  # 32
    "Tomato___Spider_mites Two-spotted_spider_mite",  # 33
    "Tomato___Target_Spot",  # 34
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus", # 35
    "Tomato___Tomato_mosaic_virus",  # 36
    "Tomato___healthy", # 37
]




CLASS_INFO = {
    "Apple___Apple_scab": { #0
        "condition": "Scab",
        "cause": "Spreads in cool, damp weather with poor air movement around the plant",
        "prevention": [
            "Remove and destroy fallen leaves",
            "Prune branches to improve air circulation",
            "Avoid watering the leaves directly",
        ],
    },
    "Apple___Black_rot": { #1
        "condition": "Black Rot",
        "cause": "Spreads through old wounds and leftover dead wood on the plant",
        "prevention": [
            "Remove and destroy infected branches or fruit",
            "Prune out dead wood each season",
            "Keep the area around the plant clear of debris",
        ],
    },
    "Apple___Cedar_apple_rust": { #2
        "condition": "Cedar Rust",
        "cause": "Spreads from nearby cedar or juniper trees",
        "prevention": [
            "Keep distance from cedar or juniper trees if possible",
            "Choose rust-resistant varieties when planting",
            "Improve air circulation around the plant",
        ],
    },
    "Apple___healthy": { #3
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Keep up regular watering and consistent sunlight",
            "Prune occasionally to maintain good airflow",
            "Check leaves regularly for early signs of stress",
        ],
    },
    "Blueberry___healthy": { #4
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Maintain regular pruning",
            "Ensure good air circulation",
            "Keep soil consistently moist but not waterlogged",
        ],
    },
    "Cherry_(including_sour)___Powdery_mildew": { #5
        "condition": "Powdery Mildew",
        "cause": "Thrives in humid conditions with poor airflow and too much shade",
        "prevention": [
            "Space plants out for better airflow",
            "Avoid watering the leaves directly",
            "Remove affected leaves early",
        ],
    },
    "Cherry_(including_sour)___healthy": { #6
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Prune regularly for airflow",
            "Avoid excess moisture around roots",
            "Monitor leaves for early signs of stress",
        ],
    },
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": { #7
        "condition": "Cercospora Leaf Spot (Gray Leaf Spot)",
        "cause": "Spreads in warm, humid weather, especially in tightly packed plants",
        "prevention": [
            "Rotate crops each season",
            "Avoid overly dense planting",
            "Clear old leaf debris after harvest",
        ],
    },
    "Corn_(maize)___Common_rust_": { #8
        "condition": "Common Rust",
        "cause": "Spreads through the air in humid weather",
        "prevention": [
            "Plant early in the season",
            "Choose resistant varieties when possible",
            "Ensure good spacing between plants",
        ],
    },
    "Corn_(maize)___Northern_Leaf_Blight": { #9
        "condition": "Northern Leaf Blight",
        "cause": "Favored by cool, wet weather and leftover crop debris",
        "prevention": [
            "Rotate crops yearly",
            "Clear old plant debris after harvest",
            "Avoid dense planting",
        ],
    },
    "Corn_(maize)___healthy": { #10
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Monitor for pests regularly",
            "Ensure proper soil drainage",
            "Rotate crops each season",
        ],
    },
    "Grape___Black_rot": { #11
        "condition": "Black Rot",
        "cause": "Spreads through old wounds and leftover dead wood on the plant",
        "prevention": [
            "Remove and destroy infected leaves and fruit",
            "Prune out dead wood each season",
            "Keep the area around the plant clear of debris",
        ],
    },
    "Grape___Esca_(Black_Measles)": { #12
        "condition": "Esca (Black Measles)",
        "cause": "Linked to old wounds and stress in the plant",
        "prevention": [
            "Avoid wounding the plant while pruning",
            "Prune during dry weather",
            "Remove severely affected wood promptly",
        ],
    },
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": { #13
        "condition": "Leaf Blight (Isariopsis Leaf Spot)",
        "cause": "Spreads in humid conditions with poor airflow",
        "prevention": [
            "Remove fallen leaves regularly",
            "Improve air circulation by pruning",
            "Avoid watering the leaves directly",
        ],
    },
    "Grape___healthy": { #14
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Inspect the plant regularly",
            "Prune for better airflow",
            "Keep the base area clear of fallen leaves",
        ],
    },
    "Orange___Haunglongbing_(Citrus_greening)": { #15
        "condition": "Citrus Greening (Huanglongbing)",
        "cause": "Spread by a small insect (psyllid) moving between trees",
        "prevention": [
            "Inspect new plants before introducing them nearby",
            "Encourage natural predators of the insect",
            "Remove severely affected branches promptly",
        ],
    },
    "Peach___Bacterial_spot": { #16
        "condition": "Bacterial Spot",
        "cause": "Spreads through splashing water in warm, humid weather",
        "prevention": [
            "Avoid watering the leaves directly",
            "Space plants out for good airflow",
            "Remove infected leaves promptly",
        ],
    },
    "Peach___healthy": { #17
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Monitor for pests regularly",
            "Prune for good sunlight penetration",
            "Water consistently at the base",
        ],
    },
    "Pepper,_bell___Bacterial_spot": { #18
        "condition": "Bacterial Spot",
        "cause": "Spreads through splashing water in warm, humid weather",
        "prevention": [
            "Avoid watering the leaves directly",
            "Space plants out for good airflow",
            "Remove infected leaves promptly",
        ],
    },
    "Pepper,_bell___healthy": { #19
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Ensure adequate spacing for airflow",
            "Avoid overwatering",
            "Monitor leaves for early stress signs",
        ],
    },
    "Potato___Early_blight": { #20
        "condition": "Early Blight",
        "cause": "Favored by warm, humid weather and stress from inconsistent watering",
        "prevention": [
            "Water at the base of the plant, not the leaves",
            "Rotate crops each season",
            "Remove lower infected leaves",
        ],
    },
    "Potato___Late_blight": { #21
        "condition": "Late Blight",
        "cause": "Thrives in cool, wet, and humid weather",
        "prevention": [
            "Avoid watering the leaves directly",
            "Ensure good spacing for airflow",
            "Remove infected plants promptly",
        ],
    },
    "Potato___healthy": { #22
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Rotate crops annually",
            "Ensure well-drained soil",
            "Monitor regularly for early signs of stress",
        ],
    },
    "Raspberry___healthy": { #23
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Provide proper support structures",
            "Prune old canes regularly",
            "Monitor for pests",
        ],
    },
    "Soybean___healthy": { #24
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Rotate crops each season",
            "Ensure proper irrigation",
            "Monitor for early signs of stress",
        ],
    },
    "Squash___Powdery_mildew": { #25
        "condition": "Powdery Mildew",
        "cause": "Thrives in humid conditions with poor airflow and too much shade",
        "prevention": [
            "Space plants out for better airflow",
            "Avoid watering the leaves directly",
            "Remove affected leaves early",
        ],
    },
    "Strawberry___Leaf_scorch": { #26
        "condition": "Leaf Scorch",
        "cause": "Often linked to drought stress, poor soil, or lack of nutrients",
        "prevention": [
            "Water deeply and consistently",
            "Improve soil drainage and nutrient content",
            "Mulch around the base to help retain moisture",
        ],
    },
    "Strawberry___healthy": { #27
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Use mulch to protect roots",
            "Water in the morning to avoid excess moisture buildup",
            "Monitor for early signs of stress",
        ],
    },
    "Tomato___Bacterial_spot": { #28
        "condition": "Bacterial Spot",
        "cause": "Spreads through splashing water in warm, humid weather",
        "prevention": [
            "Avoid watering the leaves directly",
            "Space plants out for good airflow",
            "Remove infected leaves promptly",
        ],
    },
    "Tomato___Early_blight": { #29
        "condition": "Early Blight",
        "cause": "Favored by warm, humid weather and stress from inconsistent watering",
        "prevention": [
            "Water at the base of the plant, not the leaves",
            "Rotate crops each season",
            "Remove lower infected leaves",
        ],
    },
    "Tomato___Late_blight": { #30
        "condition": "Late Blight",
        "cause": "Thrives in cool, wet, and humid weather",
        "prevention": [
            "Avoid watering the leaves directly",
            "Ensure good spacing for airflow",
            "Remove infected plants promptly",
        ],
    },
    "Tomato___Leaf_Mold": { #31
        "condition": "Leaf Mold",
        "cause": "Thrives in humid, poorly ventilated conditions",
        "prevention": [
            "Improve airflow around the plant",
            "Avoid watering the leaves directly",
            "Remove affected leaves",
        ],
    },
    "Tomato___Septoria_leaf_spot": { #32
        "condition": "Septoria Leaf Spot",
        "cause": "Spreads in wet, humid conditions, especially with crowded plants",
        "prevention": [
            "Water at the base of the plant",
            "Space plants out for airflow",
            "Remove infected lower leaves",
        ],
    },
    "Tomato___Spider_mites Two-spotted_spider_mite": { #33
        "condition": "Spider Mites",
        "cause": "Thrive in hot, dry conditions with low humidity",
        "prevention": [
            "Increase humidity around the plant",
            "Rinse leaves with water regularly",
            "Introduce natural predators like ladybugs",
        ],
    },
    "Tomato___Target_Spot": { #34
        "condition": "Target Spot",
        "cause": "Favored by warm, humid weather and dense foliage",
        "prevention": [
            "Prune lower and older leaves for airflow",
            "Avoid watering the leaves directly",
            "Space plants out adequately",
        ],
    },
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": { #35
        "condition": "Yellow Leaf Curl Virus",
        "cause": "Spread by whiteflies moving between plants",
        "prevention": [
            "Control whitefly populations around the plant",
            "Remove and discard infected plants",
            "Use reflective mulch to help deter whiteflies",
        ],
    },
    "Tomato___Tomato_mosaic_virus": { #36
        "condition": "Mosaic Virus",
        "cause": "Spread by aphids or by handling infected plants",
        "prevention": [
            "Wash hands and tools between handling different plants",
            "Control aphid populations",
            "Remove and discard infected plants",
        ],
    },
    "Tomato___healthy": { #37
        "condition": "Healthy",
        "cause": "No disease detected",
        "prevention": [
            "Provide proper plant support",
            "Ensure soil fertility",
            "Monitor for pest infestations",
        ],
    },
}



def get_class_info(index: int) -> dict:
    
    raw = CLASS_NAMES[index]
    info = CLASS_INFO[raw]

    plant_raw = raw.split("___", 1)[0] if "___" in raw else raw
    plant = plant_raw.replace("_", " ").strip()

    return {
        "class_name": raw,
        "plant": plant, 
        "condition": info["condition"],
        "is_healthy": info["condition"] == "Healthy",
        "cause": info["cause"],
        "prevention": info["prevention"],
    }