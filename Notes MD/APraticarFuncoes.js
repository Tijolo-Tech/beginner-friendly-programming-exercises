
function Celulas(Ribossomos, Lisossomos, Retículo, Complexo, Centríolos) {
  return Celulas + Lisossomos;

}

Celulas(1, 2, 3, 4, 5, 6);
console.log(Celulas)


//2
function Emicida(levanta, anda, novo, libre) {
  let Emicida = (1, 2, 3, 4);
}

console.log(Emicida);



//3

function TodasAsFuncoes(All) {

}

console.log(Emicida, Celulas, TodasAsFuncoes)

//4
function Argumentos(criar, argumento) {
  return criar + argumento;
}

let = Argumentos("Argumento Criado", "criado correto?");
console.log(Argumentos + 'criado correto?');


//5
function SemRisadinha(mal, bom) {


}
console.log(SemRisadinha)

//6
function vela(acesa, desligada) {
  return acesa + desligada;
}



const [acesa, desligada] = vela("funciona", "não funciona");

console.log("Os argumentos são: ", vela);


//7

function Viver(coracao, respirar, teste) {
  return coracao + respirar + teste;
}


var ArgumentoFuncao = Viver(1, 2, "50"); // 1 + 2 = 3 somando 50 = 350, sendo 50 string
console.log(ArgumentoFuncao)


//8

function Mercado(mercadorias, financeiro) {
  return mercadorias + financeiro;
}

var Argumento2 = Mercado("700 mercadorias em estoque: ", Mercado, "17Mil em:")

console.log(Argumento2)
//9

//getElementById.PlayHTML; ( criar um id no HTML e clique no player do software, depois a função play ao clicar)
function PlayMusic(Play) {
  PlayMusic("Executando")
}
function PauseMusic(Pause) {
  PauseMusic("Parando");
}

console.log(PlayMusic, typeof PauseMusic)

//10
function Sentido(sentidofunc, sentidu) {
  return sentidofunc - sentidu;
}
const FuncionaAi = Sentido(10, 2)
console.log(FuncionaAi);

//11
function JN(entre, vc, eu) {
  return JN + vc;
}
var Retornando = JN("vem vc", "depois eu", "nós");
console.log(Retornando)


//12 - Tentei colocar o parametro, criei a variavel W = first1, sendo que era só criar var = Multi e passar 3 argumentos.
function Multi(first1, firstTwo, firstTry) {
}
//var w = first1(100);
//var j = first2(900);
//var jc = first3(10000);

var AgoraEstaCerto = Multi(10, 50, 20)

console.error(Multi);


//13

function VidaLoka(cazuza, breve, crime) {
  return cazuza, breve;
}


console.log(VidaLoka)

//14

function RetornarTodas() {

}

console.log(RetornarTodas, Multi, PlayMusic, Argumento2)
//15

function GuriaApp(gna, gvt, gta) {
  return gna, gta;
}

console.log(GuriaApp)
//16

//
function PesConectarJogador(jogador1, jogador2) {
  const outrosJogadores = encontrarJogadoresDisponíveis
  for (const outroJogador of outrosJogadores)
    estabelecerConexao(outroJogador);

  for (const outroJogador of outrosJogadores)
    trocarDados(outroJogador);
}
console.log(PesConectarJogador)

//17

function ConectarJogador(Nerof) {


}

//18

function Gol(gol1, gol2, gol3) {

}

var Marcou = Gol(1, 2, 3)
console.log(Gol);

//19
function Wait(segundos, minutos, horas) {

}

var Esperar = Wait(10.5, 20, 20);
Esperar = Wait;
console.log(Wait)

// 20

function NomeUsuario(nome, idade, salvador) {
  return `${nome} ${idade} anos de ${salvador}`;
}


var UsuariosCadastrados = NomeUsuario('Mateus', 17, 'salvador');
console.error(UsuariosCadastrados);


//21
function Somar(ela1, ela2) {
  return ela1, ela2;


}

let total = Somar(50, 80, 10)

console.log(50 + 80, 10); // preciso ter 3 parametros para criar 3 argumentos?

//22
// como criar um canal com 800 canais sem digitar todos?
function Televisao(canais) {
  return canais;

}

var OitocentosCanais = Televisao(800);
console.log('Essa assinatura possui: ', OitocentosCanais, 'Canais!');

//23
function Provar(QuatroPecas) {
    return 4;
  }
let Limite = Provar(4);
console.error("Apenas", Limite,"peças por pessoa");


// 24

function NovaFunc(Nova, Outra) {
const Novinha = NovaFunc(10, 5);
}
console.log(NovaFunc);

//25 
function dividir(Nova,Somar, dividir) {

}

const Divisao = dividir(10,52,50);
console.log(dividir)


// 26
function saldo(pix, cartoes, porquinho) {
  console.log(arguments[0]); // usei arguments para imprimir os argumentos ao invés dos parametros.
  console.log(arguments[2]) // posicao 2 do Array(parametro)
}
saldo(10, 10, 55554); // chamei funcao, sem uma variavel


// operator
console.log((2+2)*20)


//27
function power(receberPoder1, receberPoder2) {
  return 'poderes recebidos', receberPoder1;
}

let valorDosPoderes = power(11,55);
console.log(power);

//28
function RetornoDaFuncao(parameter1, parameter2) {
  return parameter1,'teste', parameter2;
}


const result = RetornoDaFuncao(1,2);
console.log(RetornoDaFuncao);

///29

function Multiplicar(dezCasas, onzeCasas) {
  return [dezCasas, onzeCasas];
}

let mt = Multiplicar(800, 850);
console.log(mt);

//30
function Reprogramar(pratica, mindfullness) {
}
  //if mindfullness = pratica;
  //else {
   // Multiplicar = mindfullness;

//32 

function amar(guarda1, guarda2) {
  return guarda2;
}

let imprimir = amar(200, 'nao é 200');
console.log(imprimir)

//33

function myFunction() {
  const data = 'Esta é uma mensagem';
  fs.writeFile('arquivo.txt', data);
}

console.log(myFunction)

//34

function Compras(essenciais, normais, extras) {
  return essenciais;
}


let appComprinhas = Compras('media, alta, alta, alta, média, baixa')
console.log(appComprinhas);

//35
function AventuraDeMaio(teste) {
  return length.AventuraDeMaio;



}
console.log(AventuraDeMaio)


//36 
function Biblia(capitulos) {

}

 //37

 function Boolean(aqui, outro) {
   if (Boolean >= 'AventuraDeMaio');
 }


var arg = Boolean(10,15);
 console.log(arg)

 // 38
function False() {

}

 //39
function True() {

}


 //40
 function variavel() {

 }

 //41

function parametros(){

}


//42
function argumentos(){

}


//43
function Return() {

}


//44
function CallFunction() {

}

//45
function NameFunction() {

}



