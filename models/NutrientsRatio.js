const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    carbs: {type: Number, default: 40, required: true},
    fat: {type: Number, default: 25, required: true},
    protein: {type: Number, default: 35, required: true},
    goalCoefficient: {type: Number, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('NutrientsRatio', schema)