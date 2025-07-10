import { WebSocketServer } from 'ws';
import { Message } from '../models/message.model.js';

export const webSocket=()=>{
    var wsServer=new WebSocketServer({port:8000});
    wsServer.on('connection',(ws)=>{
        console.log('new user connected');

        ws.on('message',async (data)=>{
            const {sender,receiver,message} =await JSON.parse(data.toString());
            await Message.create({
                sender,
                receiver,
                message
            })
        })
        
    })
}