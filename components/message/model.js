const connect = require('../../database/conection')
const Message = require('./schema').Model
const IncompleteInfoError = require('./errors/controller/IncompleteRequestMessageException')

class MessageModel {

  constructor() {
    connect()
  }

  async createMessage(user, text, date) {
    if (!user || !text || !date) throw new IncompleteInfoError()

    const newMessage = new Message({ user, text, date })
    const messageId = await newMessage.save()

    return messageId._id
  }

  async getMessagesList(_id, user, text, date) {
    const filters = { _id, user, text, date }

    Object
      .keys( filters )
      .forEach( key =>  filters[key] === undefined && delete filters[key])

    const messages = await Message.find( filters, "user text date" )

    return messages
  }

  async addText(_id, text) {
    if (!_id || !text) throw new IncompleteInfoError()

    const messages = await Message.findOne({ _id })

    messages.text += text
    messages.save()

    return true
  }

  async replaceText(_id, text, date) {
    if (!_id || !text || !date) throw new IncompleteInfoError()

    const message = await Message.findOne({ _id })

    message.text = text
    message.save()

    return true
  }

  async removeMessage(_id) {
    if (!_id) throw new IncompleteInfoError()
    const result = await Message.deleteOne({ _id })
    return result.deletedCount
  }
}

module.exports = MessageModel