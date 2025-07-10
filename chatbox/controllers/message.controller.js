import asyncHandler from 'express-async-handler';
import {Message} from '../models/message.model.js';
import {User} from '../models/user.model.js';


export const message=asyncHandler(async (req,res)=>{
    const {sender,receiver}=req.params;
    const messages=await Message.find(
        {
            $or:[
                {sender:sender,receiver:receiver},
                {sender:receiver,receiver:sender}
            ]
        }
    ).select("-_id -__v").sort({createdAt:1});
    res.json(messages);


})

export const deleteMessage=asyncHandler(async (req,res)=>{

})