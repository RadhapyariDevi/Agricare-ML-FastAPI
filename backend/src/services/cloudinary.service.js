import streamifier from 'streamifier';
import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = async(buffer, folder = "leaf-diagnosis")=>{
    return new Promise((resolve, reject) =>{
        const uploadStream = cloudinary.uploader.upload_stream(
            {folder, resource_type: "image"},
            (error, result) =>{
                if(error) return reject(error);
                resolve(result);
            }
        );
        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};