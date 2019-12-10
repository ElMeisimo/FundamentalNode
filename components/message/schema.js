const mongoose = require('mongoose')
const Schema = mongoose.Schema
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


module.exports =  mongoose.model("Messages", mySchema)
// mongodb+srv://meisimo_db:IcFXHIvz6vLKZhrX@cluster0-uotnc.mongodb.net/test?retryWrites=true&w=majority
