const { response } = require("express")

module.exports = (app) => {
    const Eventos = app.models.eventos
    const EventoController = {
        home: (request, response) => {
            response.send('Servidor no ar')
        },
        listarEventos: (request, response) => {
            Eventos.find((erro, eventos) => {
                if (erro) {
                    response.json(erro)
                } else {
                    response.json(eventos)
                }
            })
        },
        buscarEventoPorID: (request, response) => {
            const id = request.params.id

            Eventos.findById(id, (erro, evento) => {
                if (erro) {
                    response.json(erro)
                } else {
                    response.json(evento)
                }
            })
        },
        cadastrarEvento: (request, response) => {
            const evento = request.body
            Eventos.create(evento, (erro, evento) => {
                if (erro) {
                    response.json(erro)
                } else {
                    response.json(evento)
                }
            })
        },
        atualizarEvento: (request, response) => {
            const id = request.params.id
            const eventoDto = request.body
            Eventos.findById(id, (erro, evento) => {
                if (erro) {
                    response.json(erro)
                } else {
                    if (eventoDto.descricao) {
                        evento.descricao = eventoDto.descricao
                    }
                    if (eventoDto.data) {
                        evento.data = eventoDto.data
                    }
                    if (eventoDto.valor) {
                        evento.valor = eventoDto.valor
                    }

                    evento.save((erro, evento) => {
                        if (erro) {
                            response.json(erro)
                        } else {
                            response.json(evento)
                        }
                    })
                }
            })
        },
        deletarEvento: (request, response) => {
            const id = request.params.id
            Eventos.remove({ "_id": id }, (erro) => {
                if (erro) {
                    response.json(erro)
                } else {
                    response.json("Evento removido")
                }
            })
        },
    }

    return EventoController;
}