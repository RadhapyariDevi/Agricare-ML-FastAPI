import mongoose, {Schema} from "mongoose";

const diagnosisSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        imagePublicId: {
            type: String,
            required: true,
        },
        leafDetected: {
            type: Boolean, 
            default: false,
        },
        bbox: {
            type: [Number],
            default: [],
        },
        detectionConfidence:{
            type: Number
        },
        classId:{
            type: Number
        },
        condition:{
            type: String,
            index: true
        },
        confidence:{
            type:Number
        },
        isHealthy:{
            type: Boolean,
            default: false,
            index: true
        },
        cause:{
            type:String
        },
        prevention:{
            type: [String],
            default:[]
        },
        topPredictions:[
            {
                condition: String,
                confidence: Number,
                _id: false,
            },
        ],
        status: { 
            type: String, 
            default: "ok" 
        },
    },
    {timestamps: true}
);

diagnosisSchema.index({user:1, createdAt:-1});
const Diagnosis = mongoose.model("Diagnosis", diagnosisSchema);

export default Diagnosis;