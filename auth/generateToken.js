const jwt = require('jsonwebtoken')
const secrets = require('../utils/secrets')


module.exports = function generateToken(user){
	
	const payload = {
		subject: user.id,
		email: user.email,
		role: user.role
	}

const secret = secrets.secret_JWT

const options = {
	expiresIn: '1d',
	}

	return jwt.sign(payload, secret, options)
}