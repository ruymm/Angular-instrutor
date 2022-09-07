module.exports = function (app){
    const mongoose = require('mongoose')

    var usuario = mongoose.Schema({
        nome: {type: String, required: true},
        email: {type: String, required: true}
    })

    return mongoose.model('usuarios', usuario)
}