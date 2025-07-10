import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        index:true
    },
    name:{
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique:[true,"this email Id is already Registered"],
        lowercase:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:'default.png'
    },
    referenceToken:{
        type:String,
    }
},{timestamps:true})

userSchema.methods.isPasswordCorrect=async (password)=>{
    return await bcrypt.compare(password,this.password);
}

export const User=mongoose.model('User',userSchema);