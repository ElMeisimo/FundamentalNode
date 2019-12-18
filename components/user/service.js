const UserModel = require('./model')

class UserService{
  static async createUser( user_name, password ){
    const userModel = new UserModel()
    const buffer = Buffer.from(password)
    const newUser = await userModel.createUser(user_name, buffer.toString('base64'))
    
    return newUser._id
  }
  static async getUserList(){
    const userModel = new UserModel()
    const userList  = await userModel.getUserList()
    
    return userList.map( user =>{
      return { id: user._id, user: user.user_name }
    })
  }
}

module.exports = UserService