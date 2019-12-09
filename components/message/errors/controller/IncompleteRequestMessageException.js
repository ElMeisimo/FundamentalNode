const MessageException = require('../MessageExceptions')

class IncompleteRequestMessageException extends MessageException {
    constructor() {
        super("Incomplete information.")
        super.clientMsg = 'The request wasn\'t complete.'
    }
}

module.exports = IncompleteRequestMessageException