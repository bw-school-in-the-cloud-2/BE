const express = require('express');
const server = express();

const authRouter = require('../auth/authRouter')
const protected = require('../utils/protected')

server.use(express.json());

server.use('/api/auth', authRouter)


server.get('/',  (req, res) => {
  res.status(200).json({api: 'up'})
})

module.exports = server