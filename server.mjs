import express from 'express';

const server = express();

server.get('/', (req, res) => res.status(200).json('Hello World!'));

server.listen(3000, () => console.info('Server is up!'));