const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name:{type: String, required: true},
    // type:{type: String},
    category:{type: Number},
    calories:{type: Number, required: true},
    fat:{type: Number},
    fat_st:{type: Number},
    fat_mst:{type: Number},
    fat_pst:{type: Number},
    cholesterol:{type: Number},
    carbs:{type: Number},
    fiber:{type: Number},
    sugar:{type: Number},
    proteins:{type: Number},
    salt:{type: Number},
    sodium:{type: Number},
    vitamin_A:{type: Number},
    vitamin_B1:{type: Number},
    vitamin_B2:{type: Number},
    vitamin_B3:{type: Number},
    pantothenic_acid:{type: Number},
    vitamin_B6:{type: Number},
    vitamin_B7:{type: Number},
    folate:{type: Number},
    folic_acid:{type: Number},
    vitamin_B12:{type: Number},
    vitamin_C:{type: Number},
    vitamin_D:{type: Number},
    vitamin_E:{type: Number},
    vitamin_K:{type: Number},
    calcium:{type: Number},
    iodine:{type: Number},
    iron:{type: Number},
    beta_carotene:{type: Number},
    chromium:{type: Number},
    cobalt:{type: Number},
    copper:{type: Number},
    magnesium:{type: Number},
    manganese:{type: Number},
    molybdenum:{type: Number},
    phosphorus:{type: Number},
    potassium:{type: Number},
    selenium:{type: Number},
    sodium:{type: Number},
    zinc:{type: Number},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Product', schema)