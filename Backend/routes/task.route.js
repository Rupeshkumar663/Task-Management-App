import express from "express"
import isAuth from "../middleware/isAuth.js"
import  {createTask,getTasks,updateTask,deleteTask} from "../controllers/task.controller.js"
const taskRouter=express.Router();
taskRouter.post("/",isAuth,createTask);
taskRouter.get("/",isAuth,getTasks);
taskRouter.put("/:id",isAuth,updateTask);
taskRouter.delete("/:id",isAuth,deleteTask);

export default taskRouter
