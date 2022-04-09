## Número e operadores

```js

| Números

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

| Precisão para até 15 digitos

```

## Operadores Aritméticos

```js
var soma = 100 + 50; // 150  //  " + " Realiza a soma dos valores.
var subtracao = 100 - 50; // 50 // " - " Realiza a subtração do valores. 
var multiplicacao = 100 * 2; // 200 // " * " Realiza a multiplicação do valores.
var divisao = 100 / 2; // 50 // " / " Realiza a divisão dos valores
var expoente = 2 ** 4; // 16 // " ** " Realiza a expoente entre o valor.
var modulo = 14 % 5; // 4 // " % " Realiza o 	Módulo (resto da divisão) do valor
var incremento = 1++ // 3 // " ++ " Realiza o incremento do valor 1++ = 3
var decremento = 3-- // 1 // " -- " Realiza o Decremento do valor 3-- = 1
```

## Operadores Aritméticos com strings

```js
var soma = '100' + 50; // 10050 // Faz a junção dos 2 valores
var subtracao = '100' - 50; // 50 // Realiza a subtração dos valores
var multiplicacao = '100' * '2'; // 200 // Realiza a multiplicação do valores
var divisao = 'Comprei 10' / 2; // NaN (Not a Number) // Retorna NaN pois Comprei 10 não é um number, logo assim a sintaxe não consegue reconhecer "Comprei" como número.
```

## Operadores Aritméticos Unários

```js

// Ao colocar o incremento após a váriavel ou número, ele somente irá ler no próximo console.log 
var incremento = 5;
console.log(incremento++); // 5 
console.log(incremento); // 6

// Ao colocar o incremento no inicio da váriavel o incremento será lido após a declaração do primeiro console.log
var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

| A mesma coisa serve para decremento --x
```

## Guia completo de operadores

| https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

