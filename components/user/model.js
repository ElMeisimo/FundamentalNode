const connect = require('../../database/conection')
const User = require('./schema').Model

class UserModel{
  constructor(){
    connect()
  }
  async createUser(user_name, password){
    const user = new User({user_name, password})
    const newUser = await user.save()

    return newUser
  }
  async getUserList(){
    const users = User.find( {} , ['_id', 'user_name'])
    return users
  }
}

module.exports = UserModel