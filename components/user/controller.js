const Success = require('../../api/response/SuccesResponse')
const CliError = require('../../api/response/ClientError')
const SerError = require('../../api/response/ServerError')
const UserService = require('./service')

class UserController {
  static async createUser( req, res){
    try {
      const response = new Success(res)
      const { user_name, password } = req.body
      const id = await UserService.createUser(user_name, password)

      response.ok({id})
    } catch (error) {
      const response = new SerError(res)

      response
        .printErrorLog(error)
        .internalError()
    }
  }

  static async getUserList( req, res ){
    try{
      const response = new Success(res)
      const userList = await UserService.getUserList()
      response.ok(userList)
    } catch (error) {
      const response = new SerError(res)

      response
        .printErrorLog(error)
        .internalError()
    }
  }
}

module.exports = UserController