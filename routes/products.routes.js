const { Router } = require('express')
const NutrientsRatio = require('../models/NutrientsRatio')
const auth = require('../middleware/auth.middleware')
const router = Router()

// /api/products/getDataForAutocomplete
router.get(
    '/get',
    auth,
    async (req, res) =>{        
        try {
            // try to find a product in db

            // respons.length

            // if length >= 10 return

            // if respons.length == 0 call nutrix api and send 5 normal products and 5 branded products

            const nutrientsRatio = await NutrientsRatio.findOne({owner: req.user.userId})
            res.json(nutrientsRatio)
        } catch (error) {
            console.log(error)
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    })

// /api/products/getProduct

// /api/products/addProduct

// /api/products/addToFavorite

// /api/products/addConsumed



// /api/nutrientsRatio/update
router.post(
    '/update',
    auth,
    async (req, res) =>{
        console.log(req.body)
        try {
            const filter = { owner:  req.user.userId }
            console.log('req.body.goalCoefficient:', req.body.goalCoefficient);
            const update = {
                carbs: req.body.carbs,
                fat: req.body.fat,
                protein: req.body.protein,
                goalCoefficient: req.body.goalCoefficient
            }

            let nutrientsRatio = await NutrientsRatio.findOneAndUpdate(filter, update, {upsert: true, returnNewDocument: true})
            console.log('nutrientsRatio:', nutrientsRatio)
            res.status(201).json({message:'Data was modified'})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
})

module.exports = router