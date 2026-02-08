import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
},{timestamps:true});

const newUser = mongoose.model("newUser",UserSchema);

export default newUser;