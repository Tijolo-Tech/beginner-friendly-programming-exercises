## ParseInt

ParseInt conta apenas números inteiros e exclui decimais, além disso, se possui letras, caracteres dará erro no console como NaN(não é um número).

*Exemplo:* Neste exemplo, o usúario não teria acesso ao saldo completo da sua conta bancária, o que seria um problema. Utilizando números inteiros, os reais e centavos sumiriam.

let saldoBancárioInteiro = "555.488.84";
let valorInteiro = parseInt(saldoBancárioInteiro);

console.log(valorInteiro);


## ParseFloat

Utilizado para números decimais e fracionados. 

Exemplo: Aqui, o saldo imprimiria 555.488.84, totalizando o saldo completo do usúario.

let saldoDecimal = "555.488.84";
let saldoFracionado = parseFloat(saldoDecimal)
console.log(saldoDecimal)