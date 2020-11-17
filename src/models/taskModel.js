const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title:{type: String, required: true},
    description:{type: String},
    status:{type: String, default: 'Pending'},

},{
    timestamps: true
})

module.exports = mongoose.model('Tasks', taskSchema)