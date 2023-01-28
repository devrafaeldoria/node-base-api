import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoutes from './routes/api';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404);
    res.json({ error: 'endopoint não encontrado' });
});

server.listen(process.env.PORT, ()=>{
    console.log('Servidor criado');
});