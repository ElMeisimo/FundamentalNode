const db_conection = require('mongoose')

function connect(){
  db_conection.Promise = global.Promise
  db_conection.connect(
    "mongodb+srv://meisimo_db:IcFXHIvz6vLKZhrX@cluster0-uotnc.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
}

module.exports = connect