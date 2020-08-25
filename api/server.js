const express = require('express');
const server = express();

const authRouter = require('../auth/authRouter')
const volunteersRouter = require('../volunteers/volunteersRouter')
const protected = require('../utils/protected')

server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/volunteers', volunteersRouter)


server.get('/',  (req, res) => {
  res.status(200).json({api: 'up'})
})

module.exports = server