import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(express.urlencoded({extended: true}));

server.use((req: Request, res: Response)=>{
    res.json({ error: 'endopoint não encontrado' });
});

server.listen(process.env.PORT, ()=>{
    console.log('Servidor criado');
});