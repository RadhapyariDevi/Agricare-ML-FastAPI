import express from "express";
import { testupload } from "../controllers/diagnosis.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/test-upload", protect, upload.single("image"), testupload);

export default router;