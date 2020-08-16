const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    birthDay: {type: Date, required: true},
    sex: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    activityCoefficient: {type: Number, default: 0},
    height: {type: Number, default: 0},
    weight: {type: Number, default: 0},
    nutrientsRatio: {type: Types.ObjectId, ref: 'NutrientsRatio'}
})

module.exports = model('User', schema)