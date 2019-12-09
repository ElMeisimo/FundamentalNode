const list = []

class MessageModel {

  constructor() {}
  
  createMessage( newMessage ){
    list.push( newMessage )
  }

  getMessagesList() {
    return [...list];
  }
}

module.exports = MessageModel