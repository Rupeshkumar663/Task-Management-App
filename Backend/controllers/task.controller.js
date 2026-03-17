import Task from "../models/task.model.js"
export const createTask=async(req,res)=>{
  try {
    const task=await Task.create({...req.body,userId:req.userId})
    res.status(201).json(task)
  } catch(error){
    res.status(500).json({message:error.message})
  }
}
// Get All Tasks---------------------------
export const getTasks=async(req,res)=>{
  try{
    const {page=1,limit=5,status,search}=req.query
    const query={userId:req.userId}
    if(status){
      query.status=status
    }
    if(search){
      query.title={$regex:search,$options:"i"}
    }
    const tasks=await Task.find(query)
      .skip((Number(page)- 1)*Number(limit))
      .limit(Number(limit))
      .sort({createdAt:-1})
    res.json(tasks)
  } catch(error){
    res.status(500).json({message:error.message })
  }
}
// Update Task---------------------------
export const updateTask=async(req,res)=>{
  try{
    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(task)
  } catch(error){
    res.status(500).json({message:error.message})
  }
 }

// Delete Task---------------------------
export const deleteTask=async(req,res)=>{
  try{
    await Task.findByIdAndDelete(req.params.id)
    res.json({message:"Task deleted successfully"})
  } catch(error){
    res.status(500).json({message:error.message})
   }
 }