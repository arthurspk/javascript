// Exercício de Boolean e Condicionais

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 20;
var idadeParente = 43;

if (minhaIdade > idadeParente) {
  console.log('É maior')
} else if (minhaIdade === idadeParente) {
  console.log('É igual')
} else (minhaIdade < idadeParente) 
  console.log('É menor')


// Qual valor é retornado na seguinte expressão?
// 3 - Pois ambas expressões são true e o primeiro resultado da expressão é igual a 3
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

brasil > china;
brasil < china;
brasil <= china;
brasil >= china;


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

Undefined