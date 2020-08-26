const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name:{type: String, required: true},
    type:{type: String},
    category:{type: Number},
    calories:{type: Number, required: true},
    fat:{type: Number},
    fat_st:{type: Number},
    fat_mst:{type: Number},
    fat_pst:{type: Number},
    cholesterol:{type: Number},
    sodium:{type: Number},
    potassium:{type: Number},
    carbs:{type: Number},
    fiber:{type: Number},
    sugar:{type: Number},
    proteins:{type: Number},
    vitamin_A:{type: Number},
    calcium:{type: Number},
    vitamin_C:{type: Number},
    iron:{type: Number},
    vitamin_B6:{type: Number},
    magnesium:{type: Number},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('NutrientsRatio', schema)