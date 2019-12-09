
class Response {
  header
  status
  res
  body
  error
  logsHead
  internalLog

  constructor(res, status, header) {
    this.res = res
    this.status = status
    this.header = (header || [])
  }

  send() {
    this
      .res
      .status(this.status)
      .header(this.header)
      .send({
        error: this.error,
        body: this.body
      })
  }

  printlog( type ){
    switch( type ){
      case "error":
          console.error(`[${this.logsHead}]\t${this.internalLog}`)
        break;
      default:
          console.log(`[${this.logsHead}]\t${this.internalLog}`)
    }
  }
}

module.exports = Response