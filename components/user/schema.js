const mongoose = require('mongoose')
const Schema = mongoose.Schema
const COLLECTION = "User2"
const userSchema = new Schema({
  user_name: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
})
const Model = mongoose.model(COLLECTION, userSchema)

module.exports = {
  Model,
  COLLECTION
}