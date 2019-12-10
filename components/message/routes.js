const express = require('express')
const router = express.Router()
const messageController = require('./controller.js')

router.get('/', messageController.getMessages)
router.post('/', messageController.createMessage)
router.patch('/:id', messageController.updateMessage)
router.put('/:id', messageController.changeMessage)
router.delete('/:id', messageController.deleteMessage)

module.exports = router