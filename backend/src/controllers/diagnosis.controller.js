import { predict } from "../services/ml.service.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../services/cloudinary.service.js";
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





export const getDiagnosisHistory = catchAsync(async(req,res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const userId = req.user._id;

    const [diagnosisHistory, totalCount] = await Promise.all([
        Diagnosis.find({ user: userId })
           .select("imageUrl condition confidence isHealthy status createdAt")
           .sort({createdAt: -1})
           .skip((page-1)*limit)
           .limit(limit),
        Diagnosis.countDocuments({ user: userId }),
    ]);

    res.status(200).json({
        message: "Diagnosis history retrieved successfully",
        data: diagnosisHistory,
        pagination: {
            currentPage: page,
            totalPages: Math.ceil(totalCount / limit),
            totalCount: totalCount,
            hasNextPage: page * limit < totalCount,
            hasPrevPage: page > 1
        },
    });
});





export const getDiagnosisById = catchAsync(async(req,res)=>{
    const diagnosisId = req.params.id;
    const userId = req.user._id;
    const diagnosis = await Diagnosis.findOne({ _id: diagnosisId, user: userId });

    if (!diagnosis) {
        return res.status(404).json({ message: "Diagnosis not found" });
    }

    res.status(200).json({
        message: "Diagnosis retrieved successfully",
        data: diagnosis
    });
});





export const deleteDiagnosisById = catchAsync(async(req,res)=>{
    const diagnosisId = req.params.id;
    const userId = req.user._id;

    const diagnosis = await Diagnosis.findOneAndDelete({ _id: diagnosisId, user: userId });

    if (!diagnosis) {
        return res.status(404).json({ message: "Diagnosis not found" });
    }

    await deleteFromCloudinary(diagnosis.imagePublicId);

    res.status(200).json({
        message: "Diagnosis deleted successfully",
        data: diagnosis
    });
});