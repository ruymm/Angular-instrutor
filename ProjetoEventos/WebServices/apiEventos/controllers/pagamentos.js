const { response } = require("express")

module.exports = (app) => {
    const Pagamentos = app.models.pagamentos
    const PagamentoController = {
        listarPagamentos: (request, response) => {
            Pagamentos.find((erro, pagamentos) => {
                if (erro) {
                    response.json(erro)
                } else {
                    response.json(pagamentos)
                }
            })
        },
        cadastrarPagamento: (request, response) => {
            const pagamento = request.body
            Pagamentos.create(pagamento, (erro, pagamento) => {
                if (erro) {
                    response.json(erro)
                } else {
                    response.json(pagamento)
                }
            })
        }
    }

    return PagamentoController;
}