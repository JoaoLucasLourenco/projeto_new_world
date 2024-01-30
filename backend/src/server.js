import http from 'http'
import app from './app.js'
import { json } from 'express';

const PORT = 5000

app.listen(PORT,()=>{console.log("Server rodando!");})


