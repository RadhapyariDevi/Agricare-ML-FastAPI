import mongoose from "mongoose";
import app from "./app.js";

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.error(`Error connecting to MongoDB: ${err.message}`);
        process.exit(1);
    }
}



const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();
    const server = app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
    });
    server.on("error", (err) => {
        console.error("Server failed to start:", err.message);
        process.exit(1);
    });
};



startServer();