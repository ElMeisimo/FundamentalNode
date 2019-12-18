const MessageModel = require('./model')

class MessageService {

  static async addMessage(user, text) {
    const message = new MessageModel()
    const id = await message.createMessage(user, text, new Date())

    return id
  }

  static async getMessages(id, user, text, date) {
    const message = new MessageModel()
    const messages = await message.getMessagesList(id, user, text, date)
    const messagesList = Array(messages.length)

    messages.forEach( (msg, i_msg) => 
      messagesList[i_msg] = {
        id: msg._id,
        text: msg.text,
        user: msg.user.user_name,
        date: msg.date
      }
    )

    return messagesList
  }

  static async messageUpdate(id, text){
    const message = new MessageModel()
    await message.addText(id , text )
    
    return true
  }

  static async messageChange(id, text){
    const message = new MessageModel()
    await message.replaceText(id, text, new Date())

    return true
  }

  static async deleteMessage(id){
    const message = new MessageModel()
    await message.removeMessage(id)

    return true
  }
}

module.exports = MessageService