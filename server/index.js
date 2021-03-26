require('dotenv').config()
const express = require('express')
const session = require('express-session')

const {serverPort, sessionSecret} = process.env

const app = express()

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    secret: sessionSecret
  })
)

app.listen(serverPort, () => console.log(`Connected to port ${serverPort}`))