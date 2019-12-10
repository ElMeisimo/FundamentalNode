const messageService = require('./service')
const Success = require('../../api/response/SuccesResponse')
const ClientError = require('../../api/response/ClientError')
const ServerError = require('../../api/response/ServerError')
const MessageException = require('./errors/MessageExceptions')

class MessageController {

  static async getMessages(req, res) {
    try {
      const response = new Success(res)
      const messagesList = await messageService.getMessages()

      response.ok(messagesList)
    } catch (error) {
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
  }

  static async createMessage(req, res) {
    try {
      const { user, message } = req.body
      const response = new Success(res)
      const id = await messageService.addMessage(user, message)

      response.created({ text: "Message created.", id })
    } catch (error) {
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
  }

  static async updateMessage(req, res) {
    const response = new Success(res)
    const { id } = req.params
    const { text } = req.body
    const result = await messageService.messageUpdate(id, text)

    response.ok(' updateMessage ')
  }

  static async changeMessage(req, res) {
    const response = new Success(res)
    response.ok(' changeMessage ')
  }

  static async deleteMessage(req, res) {
    const response = new Success(res)
    response.ok(' deleteMessage ')
  }

}

module.exports = MessageController