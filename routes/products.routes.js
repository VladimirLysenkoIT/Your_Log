const { Router } = require('express')
const Product = require('../models/Product')
const auth = require('../middleware/auth.middleware')
const nutrixRequest = require('../nutrixApiRequest/nutrixRequest')
const router = Router()

/**
 * /api/products/getDataForAutocomplete
 * 
 * This function get items from DB and/or API nutrix for autocomplete
 * We need 10 items to show its in auticomplete
 * If we have 10 relevant items in DB - return it
 * If we have nothing relevant in DB - get 10 items (5 normal and 5 brandings) items from API and return it
 * If we have n relevant items in DB - get 10 - n items from API, merge it with items from DB and return the result 
 * 
 */
router.post(
    '/getDataForAutocomplete',
    auth,
    async (req, res) =>{        
        try {
            console.log(req.body);
            // try to find a product in db
            const products = await Product.find({owner: req.user.userId})
            const productLength = products.length

            if(productLength >= 10){
                return res.json(products)
            }else if(productLength === 0){
                const apiResponse = await nutrixRequest('orange', 'GET', 'getList')
                const itemsNumber = apiResponse.common.length 
                // let result = {response:{}}
                let result = {}
                result['response'] = {}

                for (let i = 0; i < itemsNumber; i++) {
                    // let product = {}
                    // product.name = apiResponse.common[i].food_name
                    // product.id = apiResponse.common[i].tag_id
                    result['response'][apiResponse.common[i].food_name] = null
                    // result.response.push(product)
                }
                console.log(apiResponse)
                // console.log(result);
                return res.json(result)
            }else{

            }
            // if respons.length == 0 call nutrix api and send 5 normal products and 5 branded products
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