const jwt= require("jsonwebtoken")
require ("dotenv").config()

const authenticate= (req,res,next)=>{
const token= req.headers.authorization
if(token){
    const decoded= jwt.verify(token,process.env.key)
    const uderID= decoded.userID

    req.body.userID= userID
    if(decoded){
        next()
    }
    else{
        res.send("login first")
    }
}
else {
    res.send("login first")
}
}
module.exports= {authenticate}