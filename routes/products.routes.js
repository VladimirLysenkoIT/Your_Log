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

// const rewriteApiDetailsResponse = ()=>{
//     {
//         "Attributes for natural endpoint": [
//             {
//                 "attr_id": "301",
//                 "name": "calcium",
//                 "unit": "mg",
//             },
//             {
//                 "attr_id": "205",
//                 "2018 NFP": "1",
//                 "usda_tag": "CHOCDF",
//                 "name": "carbs",
//                 "unit": "g",
//                 "bulk_csv_field": "nf_total_carbohydrate",
//                 "cxh_attribute_name": "CHO-"
//             },
//             {
//                 "attr_id": "601",
//                 "2018 NFP": "1",
//                 "usda_tag": "CHOLE",
//                 "name": "cholesterol",
//                 "unit": "mg",
//                 "bulk_csv_field": "nf_cholesterol",
//                 "cxh_attribute_name": "CHOL-"
//             },
//             {
//                 "attr_id": "208",
//                 "2018 NFP": "1",
//                 "usda_tag": "ENERC_KCAL",
//                 "name": "calories",
//                 "unit": "kcal",
//                 "bulk_csv_field": "nf_calories",
//                 "cxh_attribute_name": "ENER-"
//             },
//             {
//                 "attr_id": "606",
//                 "2018 NFP": "1",
//                 "usda_tag": "FASAT",
//                 "name": "fat_st",
//                 "unit": "g",
//                 "bulk_csv_field": "nf_saturated_fat",
//                 "cxh_attribute_name": "FASAT"
//             },
//             {
//                 "attr_id": "204",
//                 "2018 NFP": "1",
//                 "usda_tag": "FAT",
//                 "name": "fat",
//                 "unit": "g",
//                 "bulk_csv_field": "nf_total_fat",
//                 "cxh_attribute_name": "FAT"
//             },
//             {
//                 "605":"fat_trans"
//             },
//             {
//                 "attr_id": "303",
//                 "2018 NFP": "1",
//                 "usda_tag": "FE",
//                 "name": "iron",
//                 "unit": "mg"
//             },
//             {
//                 "321":"beta_carotene"
//             },
//             {
//                 "attr_id": "291",
//                 "2018 NFP": "1",
//                 "usda_tag": "FIBTG",
//                 "name": "fiber",
//                 "unit": "g",
//                 "bulk_csv_field": "nf_dietary_fiber",
//                 "cxh_attribute_name": "FIBTSW"
//             },
//             {
//                 "attr_id": "306",
//                 "2018 NFP": "1",
//                 "usda_tag": "K",
//                 "name": "potassium",
//                 "unit": "mg",
//                 "bulk_csv_field": "nf_potassium"
//             },
//             {
//                 "attr_id": "307",
//                 "2018 NFP": "1",
//                 "usda_tag": "NA",
//                 "name": "sodium",
//                 "unit": "mg",
//                 "bulk_csv_field": "nf_sodium",
//                 "cxh_attribute_name": "NA"
//             },
//             {
//                 "attr_id": "203",
//                 "2018 NFP": "1",
//                 "usda_tag": "PROCNT",
//                 "name": "proteins",
//                 "unit": "g",
//                 "bulk_csv_field": "nf_protein",
//                 "cxh_attribute_name": "PRO-"
//             },
//             {
//                 "attr_id": "269",
//                 "2018 NFP": "1",
//                 "usda_tag": "SUGAR",
//                 "name": "sugar",
//                 "unit": "g",
//                 "bulk_csv_field": "nf_sugars",
//                 "cxh_attribute_name": "SUGAR-"
//             },
//             {
//                 "539":"sugar_add",
//             },
//             {
//                 "attr_id": "324",
//                 "2018 NFP": "1",
//                 "usda_tag": "VITD",
//                 "name": "vitamin_D",
//                 "unit": "IU",
//                 "bulk_csv_field": "nf_vitamin_d_mcg",
//                 "undefined": "must transform MCG to IU"
//             },
            
//             {
//                 "262":"caffeine",
//             },
//             {
//                 "326":"vitamin_D3"
//             },
//             {
//                 "attr_id": "312",
//                 "2018 NFP": "0",
//                 "usda_tag": "CU",
//                 "name": "copper",
//                 "unit": "mg"
//             },
//             {
//                 "325":"vitamin_D2"
//             },
//             {
//                 "851":"omega-3"
//             },
//             {
//                 "attr_id": "645",
//                 "2018 NFP": "0",
//                 "usda_tag": "FAMS",
//                 "name": "fat_mst",
//                 "unit": "g"
//             },
//             {
//                 "attr_id": "646",
//                 "2018 NFP": "0",
//                 "usda_tag": "FAPU",
//                 "name": "fat_pst",
//                 "unit": "g"
//             },
           
//             {
//                 "attr_id": "417",
//                 "2018 NFP": "0",
//                 "usda_tag": "FOL",
//                 "name": "folate",
//                 "unit": "Âµg"
//             },
//             {
//                 "attr_id": "431",
//                 "2018 NFP": "0",
//                 "usda_tag": "FOLAC",
//                 "name": "folic_acid",
//                 "unit": "Âµg"
//             },
            
            
//             {
//                 "attr_id": "304",
//                 "2018 NFP": "0",
//                 "usda_tag": "MG",
//                 "name": "magnesium",
//                 "unit": "mg"
//             },
//            {
//                "315": 'manganese'
//            },
            
//             {
//                 "attr_id": "573",
//                 "2018 NFP": "0",
//                 "usda_tag": "NULL",
//                 "name": "vitamin_E",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "578",
//                 "2018 NFP": "0",
//                 "usda_tag": "NULL",
//                 "name": "vitamin_B12, added",
//                 "unit": "Âµg"
//             },
//             {
//                 "404":"vitamin_B1"
//             },
//             {
//                 "attr_id": "305",
//                 "2018 NFP": "0",
//                 "usda_tag": "P",
//                 "name": "phosphorus",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "410",
//                 "2018 NFP": "0",
//                 "usda_tag": "PANTAC",
//                 "name": "pantothenic_acid",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "317",
//                 "2018 NFP": "0",
//                 "usda_tag": "SE",
//                 "name": "selenium",
//                 "unit": "Âµg"
//             },
//             {
//                 "attr_id": "323",
//                 "2018 NFP": "0",
//                 "usda_tag": "TOCPHA",
//                 "name": "vitamin_E",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "318",
//                 "2018 NFP": "0",
//                 "usda_tag": "VITA_IU",
//                 "name": "vitamin_A",
//                 "unit": "IU"
//             },
//             {
//                 "attr_id": "418",
//                 "2018 NFP": "0",
//                 "usda_tag": "VITB12",
//                 "name": "vitamin_B12",
//                 "unit": "Âµg"
//             },
//             {
//                 "attr_id": "415",
//                 "2018 NFP": "0",
//                 "usda_tag": "VITB6A",
//                 "name": "vitamin_B6",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "401",
//                 "2018 NFP": "0",
//                 "usda_tag": "VITC",
//                 "name": "vitamin_C",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "430",
//                 "2018 NFP": "0",
//                 "usda_tag": "VITK1",
//                 "name": "vitamin_K",
//                 "unit": "Âµg"
//             },
//             {
//                 "attr_id": "309",
//                 "2018 NFP": "0",
//                 "usda_tag": "ZN",
//                 "name": "zinc",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "346",
//                 "usda_tag": "TOCTRG",
//                 "name": "Tocotrienol, gamma",
//                 "unit": "mg"
//             },
//             {
//                 "attr_id": "347",
//                 "usda_tag": "TOCTRD",
//                 "name": "Tocotrienol,delta",
//                 "unit": "mg"
//             }

//         ]
//     }
// }

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

router.post(
    '/getDetailedInfoAboutProductFromApi',
    auth,
    async (req, res) =>{        
        try {
            // console.log(req.body)
            // try to find a product in db
            const userId = mongoose.Types.ObjectId(req.user.userId)
            const needle = req.body.needle.trim()
            const productType = req.body.prodType.trim()
            let apiResponse = null;
            let result = {
                response:{}
            }

            console.log('needle', req.body.needle);
            console.log('productType', productType);
            // const apiResponse = await nutrixRequest(needle, 'GET', 'getList')
            if(productType == 'common'){
                apiResponse = await nutrixRequest(needle, 'POST', 'getProductProperties')
            }else{
                apiResponse = await nutrixRequest(needle, 'GET', 'getBrandedProductProperties')
            }

            console.log('apiResponse.foods[0]', apiResponse.foods[0]);

            result['response'] = apiResponse.foods[0]
            return res.json(result)
        } catch (error) {
            console.log(error)
            
            res.status(500).json({message: 'Something is went wrong, try again'})
        }
    }
)

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