class MessageExepetion extends Error {

  constructor(errorMsg) {
    super(errorMsg)
  }

  message4Client() {
    return this.clientMsg
  }
}

module.exports = MessageExepetion