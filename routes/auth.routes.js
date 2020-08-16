const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router = Router()
const User = require('../models/User.js')
const JWTSECRET = config.get('jwtSecret')

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Type valid mail').normalizeEmail().isEmail(),
        check('password', 'Type the password').isLength({min:6})
    ],
    async (req, res) =>{        
        try {
            const errors = validationResult(req)
            
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'invalid registration data'
                })
            }
            console.log(req.body);
            
            const {firstName,lastName,birthDay,sex,email,password} = req.body
            
            const candidate = await User.findOne({email})

            if(candidate){
                return res.status(400).json({message: 'User with this email already exists'})
            }
            
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({firstName,lastName,birthDay,sex,email,password: hashedPassword})

            await user.save()

            res.status(201).json({message:'user has been created '})

        } catch (error) {
            console.log(error);
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    })

// api/auth/login
router.post('/login',
[
    check('email', 'Type valid mail').normalizeEmail().isEmail(),
    check('password', 'Type the password').exists()
],
async (req, res) =>{
    console.log(req.body);
    
    try {
        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'invalid credentials'
            })
        }
        
        const {email,password} = req.body

        const user = await User.findOne({email})
        
        if (!user) {
            return res.status(400).json({message: 'User not found'})
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Wrong password, try again'})
        }

        const token = jwt.sign(
            {userId: user.id},
            JWTSECRET,
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (error) {
        console.log(error);
        
        res.status(500).json({message: 'Something is went wrong, try again'})
    }
})

module.exports = router