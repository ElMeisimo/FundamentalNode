const Response = require('./Response')

class ServerError extends Response {
    constructor(res){
        super(res)
        this.body = 0
    }

    printErrorLog( error_detail ){
        this.internalLog = error_detail.stack
        this.logsHead = "server error"
        super.printlog( "error" )
        return this
    }

    internalError( error4Client = "") {
        this.status = 500
        this.error = `Internal error. ${error4Client}`
        super.send()
    }
}

module.exports = ServerError