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