const {
    readFile, //importar o método
    writeFile, //importar o método para manipular arquivos
} = require('fs')

const { promisify } = require('util') 


// outra forma de obter dados do json
// const dadosJson = require('./herois.json')


const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile) // converter para promise para não precisar mais usar o callback


class DataBase {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }

async obterDadosArquivos() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString());

    }

   
async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true

}

async cadastrar(heroi) {
    const dados = await this.obterDadosArquivos()
    const id = heroi.id <= 2 ? heroi.id : Date.now();
    const heroiidComId = {
        id, 
        ...heroi
    };

    const dadosFinal = [
        ...dados,
        heroiidComId
    ]

    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado

    }



async listar(id) {
   const dados = await this.obterDadosArquivos()
   const dadosFiltrados = dados.filter(item => (id ? (item.id === item.id) : true)) 
    return dadosFiltrados
   }

   async remover(id) {
    if(!id) {
        return await this.escreverArquivo([])

    }

    const dados = await this.obterDadosArquivos()
    const indice = dados.findIndex(item => item.id === parseInt(id))
    if(indice === -1)  {
        throw Error('inexistente')

    }
dados.slice(indice, 1)
return await this.escreverArquivo([])

   }

   async atualizar (id, modificacoes) {
    const dados = await this.obterDadosArquivos()
    const indice = dados.findIndex(item => item.id === parseInt(id))
    if(indice === -1) {
        throw Error('O Heroi nao existe')
    }

    const atual = dados[indice]
    const objetoAtualizar = {
        ...atual,
        ...modificacoes
    }

    dados.splice(indice, 1)

    return await this.escreverArquivo([
        ...dados,
        ...objetoAtualizar
    ])
   }


   }


module.exports = new DataBase();




