 /** VALOR DOLAR - AULA 
 * function soma(valor1, valor2) {
    return valor1 + valor2;
}

function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 8.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);


function alertaHello() {
    alert("o valor em real é R$: "+valorReal+"  o valor em dólar é u$ é: " +total)
    document.body.style.backgroundColor = "yellow";

}
*/ 
 /**GRAU CELSIUS 
function paraCelsius(valorFahrenheit) {
    return (5 / 9) * (valorFahrenheit - 32);
}


var x = paraCelsius(77);

//alert( "A Temperatura é de " + x + " graus celsius" );

*/
/** CAMPO FOCADO
 *  function minhaFuncao() {
    var x = 2;
}

 function viraVermelho() {
    document.body.style.backgroundColor = "red";


 }

 function limpaTexto() {
    document.getElementById("campoFocado").value = "";
 }

 const lista = ["arroz", "feijao" , "manteiga" , "leite"]
 //alert(lista);

 const ola = ["refr", "suco" , "cha"];

 //alert(Array.isArray(ola));*/
/** SUPER LISTA 
 * const superLista = lista.concat(ola);

document.getElementById("teste").innerHTML = lista;


const jogadores = ["biro", "Ribamar" , "pelé"];


jogadores.sort();
jogadores.reverse();


const numeros = [40, 100, 1, 5,];

numeros.sort(function (a,b) { return a - b});

document.getElementById("teste").innerHTML = MaiorNumero(numeros);

function MaiorNumero(array) {
    return Math.max.apply(null, array);
}


var interruptor = "off"
if (interruptor == "on") {
    alert('Ligada');
} else {
    alert('desligada');
}

*/
/** VERIFICA COR 
function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();


switch (cor) {

case "preto":
    document.body.style.backgroundColor = "black";
    break;

case "vermelho":
    document.body.style.backgroundColor = "red";
        break;

 case "verde":
    document.body.style.backgroundColor = "green";
            break;

           // default:
}
document.getElementById("teste").innerHTML = "nenhumacor" + cor;
}

*/
/** CONTADOR ANO
 * 
 * 
 * var ano = new Date().getFullYear();
for (let i = ano; i > 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>"
}


// 
const carros = ["gol", "fusca", "brasilia", "Del Rey"]
var tamanho = carros.length;

for(let i=0; i<tamanho; i++) {
    document.getElementById("teste").innerHTML +=carros[i] +  " - ";


        document.getElementById('tempo').innerHTML = "Começou a contar!";

    setTimeout(function () {
        document.body.style.backgroundColor = "red";
      
      },  100);  
}

 */
 //Contador DE TEMPO 
function ativarContagem() {
tempo = setInterval(function() {
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) +1;
    document.getElementById('tempo').innerHTML = soma;
}, 10);
}

function Stop() {
    clearInterval(tempo);
}

/** CONSTRUTOR CLASSES
 * class Carro{
    constructor(uno, bele, ana, oculu) {
        this.marca = uno;
    }
   
}

var Todas = ["uno", "motoclube"];
const uno = new Carro("Fiat", "uno", 2001);

const motoclube = new Carro("Kansas", "uno", 2015);

const impetus = new Carro("Dafra", "uno", 2001);
 

class clube {
    constructor(nome, cargo, clube, etc) {
        this.nome = 
    }
}

 */