import express from "express";
import { testupload, testMlService, testCloudinary } from "../controllers/diagnosis.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/test-upload", protect, upload.single("image"), testupload);
router.post("/test-ml", protect, upload.single("image"), testMlService);
router.post("/test-cloudinary", protect, upload.single("image"), testCloudinary);

export default router;