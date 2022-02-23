import express from 'express';

const server = express();

server.get('/', (req, res) => res.status(200).json('Hello World!'));

server.listen(80, () => console.info('Server is up!'));