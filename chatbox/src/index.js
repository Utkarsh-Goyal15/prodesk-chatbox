import 'dotenv/config';
import connectDB from '../db/db.js';
import { app } from './app.js';
import { webSocket } from '../db/websocket.js';

const port=process.env.port || 3000;

connectDB();
webSocket();

app.listen(port,()=>{
    console.log(port);
})