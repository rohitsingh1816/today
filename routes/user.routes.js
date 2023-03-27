const express= require ("express")
const= {userModel} = require("../model/user.model.js")
const bcrypt= require("bcrypt")

const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter= express.Router()

userRouter.post("/register",async(req,res)=>{
    const{name,email,gender,password,age,city,is_married}= req.body;

    try{
        let check=await
        userModel.find({email})
        if(check.length==0){
            bcrypt.hash(password,6,async(err,hash)=>{
                if(err){
                    console.log(err)
                }
                else{
                    const user= new userModel({name,email,gender,password:hash,age,city,is_married})
                    await user.save()
                    res.send("registered")
                }
            })
        }
        else{
            res.send("Please login")
        }
    }
    catch(err){
        res.send({"err in register":err})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body

    try{
        const user await userModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token jwt.sign({userID: user[0]._id},process.env.key)
                    res.send({"msg":"login sucess","token":token})

                }
                else{
                    res.send("wrong credential")
                }
            })
        }
        else{ 
            res.send("wrong credential")
        }
    }
    catch(err){
        res.send({"err in login":err})
    }
})

module.exports= {userRouter}