const messageService = require('./service')
const Success = require('../../api/response/SuccesResponse')
const ClientError = require('../../api/response/ClientError')
const ServerError = require('../../api/response/ServerError')
const MessageException = require('./errors/MessageExceptions')

class MessageController {
  static _defaultErrorHandler(error, res) {
    if (error instanceof MessageException) {
      const response = new ClientError(res)

      response
        .printErrorLog(error)
        .badRequest(error.message4Client())
    } else {
      const response = new ServerError(res)

      response
        .printErrorLog(error)
        .internalError()
    }
  }

  static async getMessages(req, res) {
    const { id, user, text, date } = req.query
    try {
      const response = new Success(res)
      const messagesList = await messageService.getMessages(id, user, text, date)
      response.ok(messagesList)
    } catch (error) {
      MessageController._defaultErrorHandler(error, res)
    }
  }

  static async createMessage(req, res) {
    try {
      const { user, message } = req.body
      const response = new Success(res)
      const id = await messageService.addMessage(user, message)

      response.created({ text: "Message created.", id })
    } catch (error) {
      MessageController._defaultErrorHandler(error, res)
    }
  }

  static async updateMessage(req, res) {
    const { id } = req.params
    const { text } = req.body

    try {
      const response = new Success(res)

      await messageService.messageUpdate(id, text)
      response.ok({ text: `Message id: ${id} updated` })

    } catch (error) {
      MessageController._defaultErrorHandler(error, res)
    }
  }

  static async changeMessage(req, res) {
    const { id } = req.params
    const { new_text } = req.body
    try {
      const response = new Success(res)
      await messageService.messageChange(id, new_text)
      response.ok({ text: `Message id: ${id} updated.` })
    } catch (error) {
      MessageController._defaultErrorHandler(error, res)
    }
  }

  static async deleteMessage(req, res) {
    const { id } = req.params

    try {
      const response = new Success(res)
      await messageService.deleteMessage(id)
      response.ok({ text: `Message id: ${id} deleted.` })
    } catch (error) {
      MessageController._defaultErrorHandler(error, res)
    }
  }

}

module.exports = MessageController