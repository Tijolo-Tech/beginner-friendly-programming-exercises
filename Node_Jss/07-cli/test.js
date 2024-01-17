const { deepEqual, ok } = require('assert');

//const {listar} = require('./database')
const Database = require('./database') // requisição para conectar com o arquivo database.js para trazer informações de lá
// este ID está sendo listado 
const DEFAULT_ITEM_CADASTRAR = {  nome: 'Flash', poder: 'Speed', id: 1 }


const DEFAULT_ITEM_ATUALIZAR = {
    nome: 'Lanterna Verde',
    poder: 'Anel de poder',
    id: 2,

}
// describe é um callback e funciona apenas pelo mocha CLI
describe('Suite de Manipulação de Herois', () => {  //=> arrow function substitui ''function''
 before(async () => {
    await Database.remover();
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await Database.cadastrar(DEFAULT_ITEM_ATUALIZAR);
   });
   
   it('deve cadastrar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR // DEFAULTITEM foi reatribuido para expected
    await Database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [realResult] = await Database.listar(expected.id);
        deepEqual(realResult, expected);

})

    it('deve listar um heroi, usando arquivos', async () => {

        const expected = DEFAULT_ITEM_CADASTRAR // DEFAULTITEM foi reatribuido para expected
        const [resultado] = await database.listar(expected.id) // listando usuario pelo ID
        //const posicaoUm = resultado[0] //  const [resultado, posicao2, posicao3]
        
    })


    it('deve remover um heroi por id', async () => {
    
        const expect = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expect)
    })

    it('deve atualizar um heroi pelo id', async () => {
        const expect = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: 'Batman',
            poder: 'Dinheiro'
        }

        const novoDado = {
            nome: 'Batman',
            poder: 'Dinheiro'
        }

        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)

        const [realResult] = await Database.listar(expected.id)
        deepEqual(realResult, expected)
    })
    


})