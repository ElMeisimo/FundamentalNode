const UserCOLLECTION = require('../user/schema').COLLECTION
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const COLECTION = "Messages3"
const mySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: UserCOLLECTION,
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
