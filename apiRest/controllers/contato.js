const { response } = require("express")

module.exports = (app) =>{
    const Contato = app.models.contato
    const ContatoController = {
        home: (request, response) => {
            response.send('Servidor no ar')
        },
        listarContatos: (request, response) =>{
            Contato.find((erro, contatos) => {
                if(erro){
                    response.json(erro)
                }else{
                    response.json(contatos)
                }
            })
        },
        buscarContatoPorID: (request, response) => {
            const id = request.params.id
            Contato.findById(id, (erro, contato) => {
                if(erro){
                    response.json(erro)
                }else{
                    response.json(contato)
                }
            })
        },
        cadastrarContato: (request, response) => {
            const contato = request.body
            Contato.create(contato, (erro, contato) => {
                if(erro){
                    response.json(erro)
                }else{
                    response.json(contato)
                }
            })
        },
        atualizarContato: (request, response) => {
            const id = request.params.id
            const contatoDto = request.body
            Contato.findById(id, (erro, contato) => {
                if(erro){
                    response.json(erro)
                }else{
                    if(contatoDto.cpf){
                        contato.cpf = contato.cpf
                    }
                    if(contatoDto.nome){
                        contato.nome = contatoDto.nome
                    }
                    if(contatoDto.telefone){
                        contato.telefone = contatoDto.telefone
                    }

                    contato.save((erro, contato) => {
                        if(erro){
                            response.json(erro)
                        }else{
                            response.json(contato)
                        }
                    })

                    response.json(contato)
                }
            })
        },
        deletarContato: (request, response) => {
            const id = request.params.id
            Contato.delete(id, (erro) => {
                if(erro){
                    response.json(erro)
                }else{
                    response.json("Contato removido")
                }
            })
        }
    }

    return ContatoController;
}