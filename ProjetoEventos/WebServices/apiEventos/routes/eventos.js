module.exports = (app) => {
    const Eventos = app.controllers.eventos;

    app.get('/', Eventos.home)
    app.get('/eventos', Eventos.listarEventos)
    app.get('/eventos/:id', Eventos.buscarEventoPorID)
    app.post('/eventos', Eventos.cadastrarEvento)
    app.put('/eventos/:id', Eventos.atualizarEvento)
    app.delete('/eventos/:id', Eventos.deletarEvento)
}