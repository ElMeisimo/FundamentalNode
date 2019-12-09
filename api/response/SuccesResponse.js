const Response = require('./Response')

class Success extends Response {
    constructor(res){
        super(res, 200)
        this.error = 0
        this.internalError = 0
    }

    ok(body) {
        this.status = 200
        this.body = body
        super.send()
    }

    created(body) {
        this.status = 201
        this.body = body
        super.send()
    }
}

module.exports = Success