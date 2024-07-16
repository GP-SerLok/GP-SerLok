var jwt = require('jsonwebtoken');

const signToken = (data) => {
    return jwt.sign(data, 'shhhhh');
}

const verifyToken = (token) => {
    return jwt.verify(token, 'shhhhh');
}

module.exports = {
    signToken,
    verifyToken
}