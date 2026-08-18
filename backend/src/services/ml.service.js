import axios from "axios";
import FormData from "form-data";


export const predict = async(fileBuffer, originalName, mimeType) => {
    const ML_SERVICE_URL = process.env.ML_SERVICE_URL; 
    const formData = new FormData();
    formData.append("file", fileBuffer, {
        filename: originalName,
        contentType: mimeType,
    });

    try{
        const response = await axios.post(`${ML_SERVICE_URL}/predict`, formData, {
            headers: formData.getHeaders(),
            timeout: 30000,
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
        });
        return response.data;
    } catch (err) {
        console.error("RAW ML SERVICE ERROR:", err.code, err.message);
        if(err.response){
            throw new Error(err.response.data?.detail || "ML service rejected the image");
        }
        if(err.code ==="ECONNABORTED"){
            throw new Error("ML service timed out");
        }
        throw new Error("ML service is unavailable");
    }
}