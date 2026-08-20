import express from "express";
import authRouter from "./routes/auth.router.js";
import diagnosisRouter from "./routes/diagnosis.router.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

const app = express();

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API is alive" });
});

app.use("/auth", authRouter);
app.use("/diagnosis", diagnosisRouter);

app.use(errorHandler);

export default app;