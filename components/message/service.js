const IncompleteInfoError = require('./errors/controller/IncompleteRequestMessageException')
const MessageModel = require('./model')

class MessageService {

  static async addMessage(user, text) {
    if (!user || !text) { throw new IncompleteInfoError() }

    const newMessage = {
      user,
      text,
      date: new Date()
    }
    const message = new MessageModel()
    const id = await message.createMessage(newMessage)

    return id
  }

  static async getMessages() {
    const message = new MessageModel()
    const messagesList = await message.getMessagesList()

    return messagesList
  }

  static async messageUpdate(id, text){
    if( !id || !text ){ throw new IncompleteInfoError() }
    const message = new MessageModel({ id })
    const result = await message.addText( text )
    
    return result
  }
}

module.exports = MessageService