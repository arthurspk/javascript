## Boolean e Condicionais

```js
| Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;
``` 

## Condicionais if & else

```js
| Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}

// retorna Possui Graduação e não executa o else
// verifica se o valor possuiGraduacao é true caso o valor não seja irá retornar no
// else 'Não possui graduação'
```

## Condicionais else if

```js
 | Se o if não for verdadeiro, ele testará o else if 

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado
// verifica se (if) o primeiro valor é true caso não ele utilizara se não ele coloca a condicional se não (else if) para verificar se a próxima variavel tem o valor true, caso não tenha ele utilizará o else para indicar que o valor é false e imprimir no console.log a seguinte frase 'Não possui graduação'
```

## Switch

```js
| Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

// Definições de inglês para PT-BR
| switch = trocar
| break = quebrar // Quebrar o código ou parar
| case = caso

var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// Definimos a váriavel como azul, nesse caso o console irá indicar a seguinte mensagem caso a cor escolhida for azul, olhe para o céu, caso a cor escolhida não for azul e o usuário escolher a cor Vermelho o console irá indicar 'Olhe para as rosas' e assim por diante até que algum ponto uma cor não foi predefinida.
```

## Truthy e False (Verdadadeiro ou Falso) / (Verdade / Falso)

```js
| Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
``` 

## Operador Lógico de negação

```js
| O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

| Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy
``` 

## Operadores de comparação 

```js
| Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

| O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
```

## Operadores Lógicos &&

```js
| && Compara se uma expressão e a outra é verdadeira
// Caso haja algum valor definido como falso a expressão sempre será considerada falsa.

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

| Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
```

## Operadores Lógicos ||

```js
|| Compara se uma expressão ou outra é verdadeira

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

| Retorna o primeiro valor true que encontrar


