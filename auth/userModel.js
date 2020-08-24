const db = require('../data/dbConfig')

module.exports = {
  addUser,
  getUserById,
  getUserByEmail
}


function addUser(user){
  return db('users').insert(user)
    .then( ids =>{
      return getUserById(ids)
    })
}

function getUserById(id){
  return db('users').where({id}).first()
}

function getUserByEmail(email){
  return db('users').where({email}).first()
}