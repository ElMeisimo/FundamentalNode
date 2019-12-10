const db = require('mongoose')
const Message = require('./schema')
class MessageModel {

  constructor() {
    db.Promise = global.Promise
    db.connect(
      "mongodb+srv://meisimo_db:IcFXHIvz6vLKZhrX@cluster0-uotnc.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    console.log('[db] Connected!')
  }
  
  async createMessage( newMessageData ){
    const newMessage = new Message( newMessageData )
    const messageId = await newMessage.save()

    return messageId._id
  }

  async getMessagesList() {
    const messages = await Message.find()

    return messages
  }
}

module.exports = MessageModel