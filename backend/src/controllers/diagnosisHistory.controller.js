import catchAsync from "../utils/catchAsync.js";
import Diagnosis from "../models/diagnosis.model.js";

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