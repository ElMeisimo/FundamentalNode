const mongoose = require('mongoose')
const Schema = mongoose.Schema
const COLECTION = "Messages"
const mySchema = new Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date:{
    type: Date, 
    required: true
  }
})
const Model = mongoose.model(COLECTION, mySchema)

module.exports =  {
  Model, 
  COLECTION
}
