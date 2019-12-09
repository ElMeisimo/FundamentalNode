const express = require('express')
const router = express.Router()
const messageController = require('./controller')
const Success = require('../../api/response/SuccesResponse')
const ClientError = require('../../api/response/ClientError')
const MessageException = require('./errors/MessageExceptions')

router.get('/', async (req, res) => {
  try {
    const response = new Success(res)
    const messagesList = await messageController.getMessages()

    response.ok(messagesList)
  } catch ( error ) {
    const response = new ClientError(res)

    if (error instanceof MessageException) {
      response
        .printErrorLog(error)
        .badRequest(error.message4Client())
    } else {
      response
        .printErrorLog(error)
        .badRequest("Unexpected error.")
    }
  }
})

router.post('/', async (req, res) => {
  const { user, message } = req.body

  try {
    const response = new Success(res)
    const result = await messageController.addMessage(user, message)

    response.created({ text: result })
  } catch (error) {
    const response = new ClientError(res)
    if (error instanceof MessageException) {
      response
        .printErrorLog(error)
        .badRequest(error.message4Client())
    } else {
      response
        .printErrorLog(error)
        .badRequest("Unexpected error.")
    }
  }
})

module.exports = router