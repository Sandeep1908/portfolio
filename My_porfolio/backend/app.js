import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/web.js';
import connectdb from './db/connect.js';
import './models/porjectModel.js'
import './models/toolsModel.js'
import cors from 'cors'

const app=express();
const port=process.env.PORT||3000;
const db_url=process.env.db_url

connectdb(db_url);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use('/',router);

app.listen(port,()=>{
    console.log(`server is listning at http://localhost:${port}`)
})