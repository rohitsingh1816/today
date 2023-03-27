const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
name: { type: string, required=true},
email: { type: string, required=true},
gender: { type: string, required=true},
pass: { type: string, required=true},
age: { type: number, required=true},
city: { type: string, required=true},
is_married: { type: Boolean, required=true},
{versionKey:false})

const userModel= mongoose.model("user",userSchema)

module.exports = {userModel}





// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean