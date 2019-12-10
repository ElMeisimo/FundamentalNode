const Express = require('express')
const bodyParser =  require('body-parser')
const router = require('./api/routes')
const app = Express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

router(app)

app.listen(3001)
console.log("App Listening in http://localhost:3001")