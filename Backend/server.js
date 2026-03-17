import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/user.route.js";
import taskRouter from "./routes/task.route.js";
dotenv.config();
const app=express();
connectDB();
app.use(cors({
  origin:["http://localhost:5173","task-management-app-five-weld.vercel.app"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);
app.use("/api/tasks",taskRouter);
const PORT=process.env.PORT||7000;
app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
});