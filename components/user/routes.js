const router = require('express').Router()
const UserController = require('./controller')

router.get('/', UserController.getUserList )
router.post('/', UserController.createUser )
router.delete('/:id', (req, res) => res.send('delete'))
router.patch('/:id', (req, res) => res.send('patch'))

module.exports = router