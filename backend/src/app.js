import express from "express";
import authRouter from "./routes/auth.router.js";

const app = express();

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "API is alive" });
});

app.use("/auth", authRouter);

export default app;