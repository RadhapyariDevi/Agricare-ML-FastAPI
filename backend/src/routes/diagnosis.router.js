import express from "express";
import { analyze, getDiagnosisHistory, getDiagnosisById, deleteDiagnosisById } from "../controllers/diagnosis.controller.js";
import upload from "../middleware/upload.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/analyze", protect, upload.single("image"), analyze);
router.get("/history", protect, getDiagnosisHistory);
router.get("/:id", protect, getDiagnosisById);
router.delete("/:id", protect, deleteDiagnosisById);


export default router;