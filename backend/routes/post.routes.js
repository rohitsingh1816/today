const express= require("express")
const {postModel} = require("../model/post.model.js")

const postRouter= express.Router()

postRouter.get("/",async(req,res)=>{
try{
    const posts = await postModel.find()
    res.send(posts)

}
catch(err){
    res.send({"err in posting":err})
}

})

postRouter.patch("/update/:id",async(req,res)=>{
    const ID= req.params.id
    const payload= req.body
    const post= await postModel.findObe({"_id":ID})
    const userID_in_post= note.userID_in_post

    const user_making_req= req.body.userID_in_post

    try{
        if(userID_in_post== user_making_req){
            res.send({"msg": "not authorized"})
        }
        else {
            await postModel.findByIdAndUpdate({_id:ID},payload)

            res.send({"msg": "posted"})
        }
    } catch (err) {
        res.send({"err in posting":err})
    }
})

postRouter.delete("/delete/:id",async(req,res)=>{
    const ID= req.params.id
    const post= await
    postModel.findOne({"-id":ID})
    const userID_in_post = post.userID;

    const user_making_req= req.body.userID

    try{
        if(userID_in_post== user_making_req){
            res.send({"msg": "not authorized"})
        }
        else {
            await userModel.findByIdAndDelete({_id:ID})
            res.send({"msg":"deleted post"})
        }
    }
    catch(err){
        res.send({"err in deleting the post":err})
    }
})

module.exports= {postRouter}