import mongoose from "mongoose";

const messageSchema =new mongoose.Schema(
    {
        sender:{
            type:String,
        },
        receiver:{
            type:String,
        },
        message:{
            type:String
        },
        createdAt:{
            type:Date,
            default:Date()
        }
    }
)

export const Message=mongoose.model('Message',messageSchema);