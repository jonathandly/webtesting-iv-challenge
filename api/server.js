const express = require('express');
const teamsRoute = require('./router');

const server = express();

server.use(express.json());
server.use('/teams', teamsRoute);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server works' });
});

module.exports = server;
