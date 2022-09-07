module.exports = function(app){
    const Usuario = app.models.usuarios
    const HomeController = {
        index: function(requisicao, resposta){
            const nome = "usuario novo"
            const email = "email@impacta.com"
            const usuario = {nome, email}

            var resultado

            Usuario.create(usuario, function(erro, usuario){
                if(erro){
                   resultado = "Ocorreu um erro ao incluir usuario"
                }else{
                    resultado = "Usuario incluído com sucesso"
                }
            })

            resposta.render('home/index', 
                {   
                    titulo: 'Título do Expressss',
                    subtitulo: 'Teste subtitulo',
                    resultado
                })    
        }
    }

    return HomeController;
}