const config = require('config')
const JWTSECRET = config.get('jwtSecret')
const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        return next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
        if (!token) {
            return res.status(401).json({message: 'Not authorized'})
        }
        const decoded = jwt.verify(token, JWTSECRET)
        
        req.user = decoded
        next()
    } catch (error){

        return res.status(401).json({message: 'Not authorized'})
    }
}