const Express = require('express')

const router = Express.Router();
const app = Express()

app.use(router)

router.get('/mensaje', (req, res) => {
    res.send("Este es el mensaje.")
})
router.post('/mensaje', (req, res) =>{
    res.send("Mensaje creado :) !")
})
router.put('/mensaje', (req, res) => {
    res.send("Mensaje cambiado :D !")
})



app.listen(3000)
console.log("App Listening in http://localhost:3000")