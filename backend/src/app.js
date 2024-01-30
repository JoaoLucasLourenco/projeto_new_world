import express, { json } from "express";
import fs from 'fs';

var lang
fs.readFile('./config/lang.json','utf-8',(err,dt)=>{
    lang = JSON.parse(dt)
    console.log(lang[0])
})

const app = express()
app.use(express.json())


app.get('/',(req, res)=>{
    res.status(200).send(lang[0])
})



export default app