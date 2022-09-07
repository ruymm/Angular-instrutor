module.exports = (app) => {
    const contato = app.controllers.contato

    app.get('/', contato.home)
    app.get('/contatos', contato.listarContatos)
    app.get('/contatos/:id', contato.buscarContatoPorID)
    app.post('/contatos', contato.cadastrarContato)
    app.put('/contatos/:id', contato.atualizarContato)
    app.delete('/contatos/:id', contato.deletarContato)
}