const http = require("http"); //cria servidor pelo node 

http
    .createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});

    if(request.url === "/produto") {
         response.end(JSON.stringify({
            message: "rota de produto"

        }))
    }

        if(request.url === "/usuario") {
            responde.end(JSON.stringif({
                message: "Rota do usuário"
            }))
        }
response.end(
    JSON.stringify({
        message: "qualquer outra rota"
    })
)
    })
 
    .listen(4001, () => console.log("Servidor está rodando na porta 4001"));



    // response.end(
    //     JSON.stringify({
    //         message: "Minha Primeira aplicação em NODEJS",
