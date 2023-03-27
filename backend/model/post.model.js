const mongoose= require("mongoose")

const postSchema= mongoose.Schema({
    title:{type:string, require:true},
    body:{type:string, require:true},
    device:{type:string, require:true},
    no_of_comments:{type:Number, require:true},
    userID= string
},{versionKey:false})

const postModel= mongoose.model("post",postSchema)

module.exports= {userModel}


// title ==> String
// body ==> String
// device ==> String
// no_of_comments ==> Number