const express =require("express")
const cors = require("cors")
require("dotenv").config()
const {connection}= require("./config/db.js")
const {postRouter}= require("./routes/post.routes.js")
const {authenticate} = require("./middlewares/authentication.middleware.js")
const app= express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Start Posting")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/posts",postRouter)

app.listen(process.env.port, async()=>{
    try{
        await connection 
        console.log("connected to DB")
    }
    catch(err){
        console.log("Error in connection:",err)
    }
    console.log(`server running in ${process.env.port}`)
})