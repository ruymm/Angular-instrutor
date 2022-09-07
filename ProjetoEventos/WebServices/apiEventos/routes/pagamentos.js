module.exports = (app) => {
    const Pagamentos = app.controllers.pagamentos;

    app.get('/pagamentos', Pagamentos.listarPagamentos)
    app.post('/pagamentos', Pagamentos.cadastrarPagamento)
}