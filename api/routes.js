const message = require('../components/message/routes')
const user = require('../components/user/routes')
const chat = require('../components/chat/routes')

const router = app => {
    app.use('/message', message)
    app.use('/user', user)
    app.use('/chat', chat)
}

module.exports = router