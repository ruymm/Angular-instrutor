angular.module('eventos')
    .controller('Principal', [
        '$http',
        function ($http) {
            var self = this

            $http.get('http://localhost:3200/eventos')
                .then(function (response) {
                    self.eventos = response.data
                }, function (error) {
                    console.log(`Erro: ${error}`)
                })
            
        }
    ])