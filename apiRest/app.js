const express = require('express')
const load = require('express-load')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/contatos')

load('models')
  .then('controllers')
  .then('routes')
  .into(app)

app.listen(3000, () => {
  console.log("Servidor no ar")
})
