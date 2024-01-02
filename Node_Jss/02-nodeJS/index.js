//Corrigindo a função obterUsuario para retornar uma Promise
// // function obterUsuario() {
// //     return new Promise(function(resolve, reject) {
// //         // Removendo o código abaixo, pois não é necessário nesta versão usando Promise
// //         // setTimeout(function () {
// //         //     return resolve( {
// //         //         id:1,
// //         //         nome: 'ana',
// //         //         dataNascimento: new Date()
// //         //     })
// //         // }, 1000)

// //         // Simulando um usuário para a demonstração
// //         const usuario = {
// //             id: 1,
// //             nome: 'ana',
// //             dataNascimento: new Date()
// //         };

// //         // Resolvendo a Promise com o usuário
// //         resolve(usuario);
// //     });
// // }

// Importando um módulo interno do Node.js
const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterTelefone(idUsuario) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // Resolvendo a Promise com os dados do telefone
            resolve({
                telefone: '1188787',
                ddd: 11
            });
        }, 2000);
    });
}

//1passo: adicionar a palavra async -> automaticamente ela retornará uma Promise

main()

async function main () {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        //const telefone = await obterTelefone(usuario.id)
        //const endereco = await obterEnderecoAsync(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)


        ])
        const endereco = resultado[1]
        const telefone = resultado[0]


        console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd}) ${telefone.telefone},
        Endereco: ${endereco.rua}, ${endereco.numero}
        
        `)

        console.timeEnd('medida-promise')

    } catch (error) {
        console.error('Deu ruim', error)
    }
}



























// // Corrigindo a função obterEndereco (adicionando abertura de chaves)
// function obterEndereco(idUsuario, callback) {
//     setTimeout(() => {
//         // Corrigindo a chamada do callback e removendo o 'return'
//         callback(null, {
//             rua: 'dos bobos',
//             numero: 0
//         });
//     }, 2000);
// }

// // Corrigindo o encadeamento das Promises
// const usuarioPromise = obterUsuario();
// usuarioPromise
//     .then(function(usuario) {
//         // Corrigindo o acesso à propriedade do objeto (usuario.name -> usuario.nome)
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         nome: usuario.nome, // Corrigindo o acesso à propriedade do objeto (usuario.name -> usuario.nome)
//                         id: usuario.id
//                     },
//                     telefone: result
//                 };
//             });
//     })
//     .then(function(resultado) {
//         const endereco = obterEnderecoAsync(resultado.usuario.id);
//         return endereco.then(function resolverEndereco(result) {
//             return {
//                 usuario: resultado.usuario, // Corrigindo o acesso à propriedade do objeto (result -> resultado)
//                 telefone: resultado.telefone, // Corrigindo o acesso à propriedade do objeto (result -> resultado)
//                 endereco: result
//             };
//         });
//     })
//     .then(function(resultado) {
//         // Corrigindo a chamada da função obterTelefone (removendo 'resultado')
//         console.log(`
//         Nome: ${resultado.usuario.nome}
//         Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//         Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function(error) {
//         console.error('DEU RUIM', error);
//     });


    // callback , promises 

    // melhor forma PROMISES ASYNC A WAIT 