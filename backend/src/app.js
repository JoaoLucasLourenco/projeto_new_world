import express, { json } from "express";
import fs from 'fs';
var en, br, jp
try {
    
    fs.readFile('./langs/en.json','utf-8',(err,dt)=>{
        en = JSON.parse(dt)
        console.log("Dados em inglês acessados com sucesso")
    })
    fs.readFile('./langs/br.json','utf-8',(err,dt)=>{
        br = JSON.parse(dt)
        console.log("Dados em potuguês acessados com sucesso")
    })
    fs.readFile('./langs/jp.json','utf-8',(err,dt)=>{
        jp = JSON.parse(dt)
        console.log("Dados em japonês acessados com sucesso")
    })
} catch (error) {
    console.log("Erro na requisição dos dados de linguagens "+error)
}

const app = express()
app.use(express.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})



app.get('/',(req,res)=>{
    res.status(200).send(br)
    console.clear()
    console.log("Dados em português requisitados com sucesso!")
})

app.get('/en',(req,res)=>{
    res.status(200).send(en)
    console.clear()
    console.log("Dados em inglês requisitados com sucesso!")
})

app.get('/jp',(req,res)=>{
    res.status(200).send(jp)
    console.clear()
    console.log("Dados em japonês requisitados com sucesso!")
})



export default app