import { predict } from "../services/ml.service.js";
import { uploadToCloudinary } from "../services/cloudinary.service.js";
import Diagnosis from "../models/diagnosis.model.js";
import catchAsync from "../utils/catchAsync.js";

export const analyze = catchAsync(async (req, res) => {
    if(!req.file){
        return res.status(400).json({message:"No file received"});
    }
    const prediction = await predict(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype
    );
    if(!prediction || !prediction.leaf_detected){
      return res.status(400).json({message:"No leaf detected in the image"});
    }
    const cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    const newDiagnosis = await Diagnosis.create({
        user: req.user._id,
        imageUrl: cloudinaryResult.secure_url,
        imagePublicId: cloudinaryResult.public_id,
        leafDetected: prediction.leaf_detected,
        bbox: prediction.bbox,
        detectionConfidence:prediction.detection_confidence,
        classId:prediction.class_id,
        condition:prediction.condition,
        confidence:prediction.confidence,
        isHealthy:prediction.is_healthy,
        cause:prediction.cause,
        prevention:prediction.prevention,
        topPredictions: prediction.top_predictions,
        status: prediction.status
    });
    
    res.status(201).json({message:"Diagnosis saved successfully", diagnosis:newDiagnosis});
});

