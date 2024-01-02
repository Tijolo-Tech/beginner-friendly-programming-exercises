const assert = require('assert');
const { obterPessoas } = require('./servicee');

// instalamos o pacote nock, simular requisicoes

describe('Star Wars Tests', function () {
    this.beforeAll(() => {
        const response = {

        }

    })
    it('deve buscar o R2-D2 com o formato correto', async () => {
        const expected = [{
            nome: 'R2-D2',
            peso: '96'
        }];

        const nomeBase = 'R2-D2';

        try {
            const resultado = await obterPessoas(nomeBase);

            // Convertendo para string se o tipo for número
            if (typeof resultado[0].peso === 'number') {
                resultado[0].peso = resultado[0].peso.toString();
            }

            assert.deepEqual(resultado, expected);
        } catch (error) {
            // Trate o erro aqui (por exemplo, console.log(error))
            throw error; // Para garantir que o teste falhe se houver um erro
        }
    });
});
