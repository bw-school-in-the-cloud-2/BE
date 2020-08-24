const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Users = require('./userModel')
const generateToken = require('./generateToken')

// ======= api/auth ======


router.post('/register', (req, res) =>{

  const hash = bcrypt.hashSync(req.body.password, 8);

  const newUser = {
    ...req.body,
    password: hash
  }

  Users.addUser(newUser)
    .then(user =>{
      const token = generateToken(user)
      res.status(201).json({user, token})
    })
    .catch(err =>{
      console.log(err);
      if(err.message.includes('UNIQUE constraint failed: users.email')){
        res.status(500).json({error: 'this email is already taken'})
      } else {
        res.status(500).json(err.message)
      }
    })
})

router.post('/login', (req, res) => {

  Users.getUserByEmail(req.body.email)
    .then(user =>{
      if(user && bcrypt.compareSync(req.body.password, user.password)){
        const token = generateToken(user)
        res.status(200).json({user, token})
      } else {
        res.status(400).json({error: 'Invalid User Credentials'})
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err.message)
    })
})


module.exports = router