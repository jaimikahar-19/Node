const express=require("express")

const app=express()
app.set("view engine","ejs")


app.use("/",express.static("public"))

const middleware=(req,res,next)=>{
     if(req.query.age>=18)
     {
        next()
     }
}
app.get("/",(req,res)=>{
    return res.render("index")
})

app.get("/contact",middleware,(req,res)=>{
    return res.render("contact")
})

app.use(middleware)
app.listen(8900,()=>{
    console.log("server listen")
})