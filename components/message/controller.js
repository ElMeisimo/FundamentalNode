const IncompleteInfoError = require('./errors/controller/IncompleteRequestMessageException')
const MessageModel = require('./model')

class MessageController {

  static addMessage(user, messageTxt) {
    return new Promise((resolve, reject) => {
      if (!user || !messageTxt) {
        reject(new IncompleteInfoError())
      }
      const newMessage = {
        user,
        message: messageTxt,
        createdAt: new Date()
      }
      const message = new MessageModel()

      message.createMessage(newMessage)
      resolve("Message created.")
    })
  }

  static getMessages(){
    return new Promise( (resolve, reject) => {
      const message = new MessageModel()
      const messagesList = message.getMessagesList()
      
      resolve(messagesList)
    })
  }

}




module.exports = MessageController