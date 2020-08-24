const db = require('../data/dbConfig')

module.exports = {
  addUser,
  getUserById,
  getUserByEmail
}


function addUser(user){

  const newUser = {
    email: user.email,
    password: user.password,
    name: user.name
  }

  return db('users').insert(newUser, "id")
    .then( ids =>{
      return addRole(ids, user.role)
        .then(id =>{
          return getUserById(ids)
        })
    })
}

function getUserById(id){
  return db('users')
    .join('user_roles', 'user_roles.user_id', 'users.id')
    .join('roles', 'user_roles.role_id', 'roles.id')
    .select('users.id', 'users.email', 'users.password', 'users.name', 'roles.role')
    .where('users.id', id).first()
}

function getUserByEmail(email){
  return db('users')
  .join('user_roles', 'user_roles.user_id', 'users.id')
  .join('roles', 'user_roles.role_id', 'roles.id')
  .select('users.id', 'users.email', 'users.password', 'users.name', 'roles.role')
  .where('users.email', email).first()
}

function addRole(userId, roleId){
  const role = { 
    user_id: userId,
    role_id: roleId
  }
  return db('user_roles').insert(role, 'id')
}