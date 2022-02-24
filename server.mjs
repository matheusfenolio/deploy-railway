import express from 'express';
import PrismaClient from '@prisma/client'

const server = express();
const prisma = new PrismaClient.PrismaClient()

server.get('/', async (req, res) => 
    prisma.person
    .findMany()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error)) 
);

server.listen(process.env.PORT, () => console.info(`Server is up and listening at ${process.env.PORT}`));