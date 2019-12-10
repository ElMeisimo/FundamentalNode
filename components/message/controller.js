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
      const result = await messageService.addMessage(user, message)

      response.created({ text: result })

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
}

module.exports = MessageController