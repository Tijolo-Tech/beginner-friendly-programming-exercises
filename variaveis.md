# Variaveis no JS = Armazenamento

Em JavaScript, as palavras-chave para declarar variáveis são let, var e const. let e var

As variavéis precisam ser declaradas antes de tudo e serve para guardar dados e informações.

Alguns tipos de variaveis
### let Mutável = 400;
Uma variavel volatil e mais utilziada, pois você pode atribuir valores e reatribuir. No entanto, contará apenas o valor reatribuído ''substituindo o antigo''
Exemplo: let Novo = 10;
Novo = 5;


### Var Flexível = 100
cada declaração em var não tem escopo em bloco {} isso, pode levar problemas no código, bom utilizar com cautela. No entanto é possível colocar diversos tipos de dados devido a flexibilidade. 

Exemplo: 
var teste = 10;
var outroteste = 55;
var testeultimo = 66;


## o que seria escopo em bloco? 
Escopo em bloco é como uma porta, sempre que você precisa ir na rua será necessário fechá-la para que ninguém entre em sua casa. Se deixar o escopo aberto, não funcionará ou poderá ocorrer erros.

O escopo em bloco é feito por > {} <  par de chaves e é isto que fecha a declaração. Em var, você consegue imprimir a variavel fora do bloco e em qualquer lugar do arquivo.

 {let Exemplo = 10; **escopo fechado**
 console.log(Exemplo2);**console log imprime a variável**
}


{const Exemplo2 = 50; **escopo fechado**
console.log(Exemplo2);
}


{var Exemplo3 = ["50","55","65"]; **escopo aberto e global**
}

console.log(Exemplo3);**conseguimos imprimir VAR até mesmo fora do bloco {}, o que não acontece em let e const, pois é necessários estar dentro do bloco**


### Const Imutável; Países = 193;
O valor não muda, após declarar, não será possível reatribuir outro valor.

### conclusão