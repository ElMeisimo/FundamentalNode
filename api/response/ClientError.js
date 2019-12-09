const Response = require('./Response')

class ClientError extends Response {
    constructor(res){
        super(res, 200)
        this.body = 0
    }

    printErrorLog( error_detail ){
        this.internalLog = error_detail + error_detail.stack
        this.logsHead = "client error"
        super.printlog( "error" )
        return this
    }

    badRequest( error4Client ) {
        this.status = 401
        this.error = `Invalid Request. ${error4Client}`
        super.send()
    }
}

module.exports = ClientError