angular.module('appModule', [])
    .controller('Principal', [
        '$location',
        '$window',
        function ($location, $window) {
            var self = this
            self.alunos = [
                {
                    nome: "Ademar Torres",
                    curso: "Angular",
                    done: false
                },
                {
                    nome: "Celilia Maria",
                    curso: "MongoDB",
                    done: false
                },
                {
                    nome: "Adorian Barbosa",
                    curso: "Node JS",
                    done: false
                }
            ]

            self.mostrarLogs = () => {
                console.log($window)
                const url = $location.url()
                const absUrl = $location.absUrl()
                const protocol = $location.protocol()

                const mensagem = `URL: ${url}\n URL Absoluto: ${absUrl}\n Protocolo: ${protocol}`
                console.log(mensagem)
            }

            self.mensagem = 'Vindo do controller'
            
            self.submit = () => {
                self.alunos.push({nome: self.aluno.nome, curso: self.aluno.curso, done: false})
                self.aluno.nome = ""
                self.aluno.curso = ""
            }

            self.limpar = () => {
                var alunosOld = self.alunos
                self.alunos = []

                alunosOld.forEach(aluno => {
                    if(!aluno.done){
                        self.alunos.push(aluno)
                    }
                })
            }

            self.alterarMensagem = () => {
                self.mensagem = "Mensagem alterada"
            }
        }
    ])