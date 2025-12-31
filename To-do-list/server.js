const express=require('express')

const app=express()

app.set("view engine","ejs")


app.use(express.urlencoded())

let student=[
    {
        id: 1,
        name:"sunaina"
    },
    {
        id:2,
        name:"jiya"
    }
]

app.get("/",(req,res)=>{
  res.render("Form", { student })
})

app.post("/insertData",(req,res)=>{
    const {id,name}=req.body;
    const obj={
        id: Number(id),
        name
    }
    student.push(obj)
    res.redirect("/")
})


app.get("/delete",(req,res)=>{
    const id=Number(req.query.id)
    const ans=student.filter((el,i)=>{
        return el.id!==id
    })

    student=ans
    res.redirect("/")
})

app.get("/edit",(req,res)=>{
    const id=Number(req.query.id)

    const editStudent=student.find((el,i)=>{
        return el.id === id
    })
    res.render("edit", { editStudent });
})

app.post("/updateData", (req, res) => {
    const { id, name } = req.body;
    const noId = Number(id);

    student = student.map((el,i)=> {
        if (el.id === noId) {
            return { id : noId, name};
        }
        return el;
    });

    res.redirect("/");
});

app.listen(8000,()=>{
    console.log("server listen")
})