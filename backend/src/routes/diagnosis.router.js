import express from "express";
import { analyze } from "../controllers/diagnosis.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protect } from "../middleware/auth.middleware.js";
import { getDiagnosisHistory } from "../controllers/diagnosisHistory.controller.js";

const router = express.Router();

router.post("/analyze", protect, upload.single("image"), analyze);
router.get("/history", protect, getDiagnosisHistory);

export default router;