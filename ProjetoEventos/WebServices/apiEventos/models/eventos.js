module.exports =  (app) => {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var evento = Schema({
        descricao: { type: String, required: true, unique: true },
        data: { type: Date },
        preco: { type: Number }
    });
    return mongoose.model('eventos', evento);
};