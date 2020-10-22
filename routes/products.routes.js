const { Router } = require('express')
const {check, validationResult} = require('express-validator')
const Product = require('../models/Product')
const auth = require('../middleware/auth.middleware')
const nutrixRequest = require('../nutrixApiRequest/nutrixRequest')
const mongoose = require('mongoose')
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

const findProductsLike = async (userId, needle = '') => {
    const products = await Product.aggregate([
        { 
            $match: {
                owner: userId,
                name: {$regex: needle + '.*', $options: 'i'}
            }
        },
        { $lookup: {
            from: "productTypes",
            let: { category: "$category"},
            pipeline: [
                { $match:
                    { $expr:
                        { $eq: ["$type", "$$category" ]}
                    }
                },
                {
                    $project: { 
                        _id: 0,
                        name: 1
                    }
                }
            ],
            as: "categoryName"
          }
        },
        {
            $addFields: {
                categoryName: {
                        $let:{
                            vars: {
                                categoryName: {$arrayElemAt: ['$categoryName',0]}
                             },
                             in: "$$categoryName.name"
                        }   
                }
            }
        }
    ])

    return products
}

router.post(
    '/getDataForAutocomplete',
    auth,
    async (req, res) =>{        
        try {
            console.log(req.body)
            // try to find a product in db
            const needle = req.body.item.trim()
            console.log('needle', needle);
            const userId = mongoose.Types.ObjectId(req.user.userId)
            const products = await findProductsLike(userId, needle)
            const productLength = products.length
            const MAX_IN_AUTOCOMPLETE = 10
            console.log('productLength',productLength)
            console.log('products',products)
            if(productLength >= 10){
                console.log('here');
                productLength = productLength > MAX_IN_AUTOCOMPLETE ? MAX_IN_AUTOCOMPLETE : productLength
                let result = {
                    response:{}
                }

                for (let i = 0; i < productLength; i++) {
                    result['response'][products[i].name] = null
                }

                return res.json(result)
            }else if(productLength === 0){
                console.log('here 2');
                const apiResponse = await nutrixRequest(needle, 'GET', 'getList')
                const takeFromCommon = apiResponse.common.length > MAX_IN_AUTOCOMPLETE ? MAX_IN_AUTOCOMPLETE : apiResponse.common.length
                const takeFromBranded = (MAX_IN_AUTOCOMPLETE - takeFromCommon) > apiResponse.branded.length ? apiResponse.branded.length : MAX_IN_AUTOCOMPLETE - takeFromCommon
                let result = {
                    response:{}
                }

                // console.log('apiResponse',apiResponse)
                console.log('takeFromCommon', takeFromCommon)
                // console.log('apiResponse.common', apiResponse.common)
                
                console.log('takeFromBranded', takeFromBranded)
                // console.log('apiResponse.branded', apiResponse.branded)


                for (let i=0; i < takeFromCommon; i++) {
                    result['response'][apiResponse.common[i].food_name] = apiResponse.common[i].photo.thumb
                }

                if(takeFromBranded>0){
                    for (let i=0; i < takeFromBranded; i++) {
                        result['response'][apiResponse.branded[i].food_name] = apiResponse.branded[i].photo.thumb
                    }
                }
                console.log(result['response']);

                return res.json(result)
            }else if(productLength > 0 && productLength < MAX_IN_AUTOCOMPLETE){
                console.log('i m here');
                const apiResponse = await nutrixRequest(needle, 'GET', 'getList')
                const itemsInCommon = apiResponse.common.length
                const takeFromCommon = MAX_IN_AUTOCOMPLETE - productLength
                let takeFromBranded = 0
                let result = {
                    response:{}
                }

                if(takeFromCommon > itemsInCommon){
                    takeFromBranded = (takeFromCommon - itemsInCommon) > apiResponse.branded.length ? apiResponse.branded.length : takeFromCommon - itemsInCommon
                }

                for (let i=0; i < productLength; i++) {
                    result['response'][products[i].name] = null
                }

                for (let i = 0; i < takeFromCommon; i++) {
                    result['response'][apiResponse.common[i].food_name] = apiResponse.common[i].photo.thumb
                }

                if(takeFromBranded>0){
                    for (let j=0; j < takeFromBranded; j++) {
                        result['response'][apiResponse.branded[j].food_name] = apiResponse.branded[j].photo.thumb
                    }
                }

                return res.json(result)
            }
        } catch (error) {
            console.log(error)
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    })

// Return all results from API and DB. Call when user submits the form
router.post(
    '/getAllResultsFromSearch',
    auth,
    async (req, res) =>{        
        try {
            const needle = req.body.item.trim()
            console.log('needle', needle);
            const userId = mongoose.Types.ObjectId(req.user.userId)
            const products = await findProductsLike(userId, needle)
            const apiResponse = await nutrixRequest(needle, 'GET', 'getList')
            console.log(apiResponse);
            const result = {
                response:{
                    customProducts: products,
                    productsFromWeb: apiResponse
                }
            }

            return res.json(result)
        } catch (error) {
            console.log(error)
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    }
)

// /api/products/createProduct
router.post(
    '/addNewProduct',
    [
        check('name', 'Type a name of product').isLength({min:2}),
        check('calories', 'Type the number of calories of product').isFloat({min:0}),
        check('category', 'Choose a category').isInt({min:0, max:5}),
        check('nutrients.*', 'Value of a nutrient must be a number greater than zero') .isFloat({min:0})
    ],
    auth,
    async (req, res) =>{        
        try {
            const errors = validationResult(req)
            
            if (!errors.isEmpty()) {
                console.log(errors)
                return res.status(400).json({
                    errors: errors.array(),
                    message: errors.array()[0].msg
                })
            }
            console.log(req.body);
            console.log('id:', req.user.userId);

            const filter = {
                name: req.body.name,
                owner:  req.user.userId
            }
            
            const isProductExists = await Product.findOne(filter)
            console.log('isProductExists',isProductExists);

            if(isProductExists){
                return res.status(400).json({message: 'Product with this name already exists'})
            }
            
            let newProduct = req.body.nutrients
            newProduct['name'] = req.body.name
            newProduct['calories'] = req.body.calories
            newProduct['category'] = req.body.category
            newProduct['owner'] = req.user.userId

            const product = new Product(newProduct)
            await product.save()

            res.status(201).json({message:'Product has been created '})
        } catch (error) {
            console.log(error);
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    }
)

// /api/products/getCustomProducts
router.get(
    '/getCustomProducts',
    auth,
    async (req, res) =>{        
        try {
            const userId = mongoose.Types.ObjectId(req.user.userId)
            const products = await findProductsLike(userId)

            res.status(200).json({products:products})
        } catch (error) {
            console.log(error);
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    }
)


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