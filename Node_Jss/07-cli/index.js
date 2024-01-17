const commander = require('commander')
const DataBase = require('./database')
const Heroi = require('./heroi')

async function main() {
    commander
    .version('v1')   
     .option('-n, --nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder do Heroi")
    .option('-l --listar [value]', "")

    
    .option('-c, --cadastrar', "Cadastrar um heroi")
    .parse(process.argv)

    const heroi = new Heroi(commander)
    
try { 
    if (commander.cadastrar) {


    
    const resultado = await DataBase.cadastrar(heroi)

    console.log(heroi)
if(!resultado) {
    console.error('Heroi não foi cadastrado')

    return;
}
    }
console.log('Heroi cadastrado com sucesso')

} catch (error) {
    console.log('deu ruim mesmo', error);
}

}
