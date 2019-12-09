const message = require('../components/message/routes')

const router = app => {
    app.use('/message', message)
}

module.exports = router