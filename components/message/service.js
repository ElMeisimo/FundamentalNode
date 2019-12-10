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

    return `Message created, id: ${id}`
  }

  static async getMessages() {
    const message = new MessageModel()
    const messagesList = message.getMessagesList()

    return messagesList
  }
}

module.exports = MessageService