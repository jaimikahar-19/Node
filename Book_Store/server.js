const express = require("express")
const db = require("./config/db")
const userModel = require("./model/userModel")
const app = express()

app.use(express.json())

app.post("/insert",async (req,res)=>{
    const data = await userModel.create(req.body)
    return res.send(data)
})

app.get("/",async (req,res)=>{
    const data = await userModel.find({})
    return res.send(data) 
})

app.put("/:id",async (req,res)=>{
    const id=req.params.id
    const data = await userModel.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
})

app.delete("/:id",async (req,res)=>{
    const id=req.params.id
    const data=await userModel.findByIdAndDelete(id)
    return res.send("success")
})

app.listen(4000,()=>{
    console.log("server listen")
})