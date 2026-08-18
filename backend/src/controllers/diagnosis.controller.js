import { predict } from "../services/ml.service.js";
import { uploadToCloudinary } from "../services/cloudinary.service.js";

export const testupload = (req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"No file recieve"});
    }
    res.json({
        message:"file uploaded succesfully",
        originalName: req.file.originalname,
        mimetype: req.file.mimetype,
        sizeInBytes: req.file.size,
        bufferLength: req.file.buffer.length,
    });
};

export const testMlService = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file received" });
  }

  const prediction = await predict(
    req.file.buffer,
    req.file.originalname,
    req.file.mimetype
  );

  res.json(prediction);
};

export const testCloudinary = async(req,res)=>{
  if(!req.file){
    return res.status(400).json({message:"No file received"});
  }
  const result = await uploadToCloudinary(req.file.buffer);
  res.json({url:result.secure_url, publicId:result.public_id});
};