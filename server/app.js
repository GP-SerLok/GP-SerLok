require('dotenv').config()
const express = require('express')
const userController = require('./controller/userController')
const app = express()
const port = 3000
var cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/login')
app.post('/login/google', userController.googleLogin)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})