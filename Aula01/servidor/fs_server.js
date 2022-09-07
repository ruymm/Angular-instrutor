const http = require('http')
const fs = require('fs')

var server = http.createServer(function (request, response){
    fs.readFile(__dirname + "/index.html", function (erro, html){
        if(html){
            response.writeHeader(200, {"Content-Type" : "text/html"})
            response.write(html)
            response.end()
        }else{
            console.log(erro)
        }
    })
})

server.listen(3000, function(){
    console.log('Executando site pessoal')
})