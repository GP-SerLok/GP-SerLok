require('dotenv').config()
const express = require('express')
const User = require('./controller/user')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/login/google', User.googleLogin)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})