const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

const authRouter = require('../auth/authRouter')
const volunteersRouter = require('../volunteers/volunteersRouter')
const tasksRouter = require('../tasks/tasksRouter')
const protected = require('../utils/protected')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter)
server.use('/api/volunteers', volunteersRouter)
server.use('/api/tasks', tasksRouter)


server.get('/',  (req, res) => {
  res.status(200).json({api: 'up'})
})

module.exports = server