## VARIÁVEIS

```js
| Responsáveis por guardar dados na memória.
| Inicia com a palavra com: 

 var
 let 
 const

var nome = 'Arthur';
let idade = 20;
const possuiFaculdade = true;

```

```js
| Evitam repetições (DRY)

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

```

```js
| Sintaxe de uma váriavel
| Palavra chave var seguida do nome, sinal de igual e o valor.

var nome = 'Arthur';
var idade = 28;
var possuiFaculdade = true;

```

```js 
| Utilização da virgula em váriaveis
| Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.

var nome = 'Arthur',
    idade = 28,
    possuiFaculdade = true;

```

```js
| Variável sem valor

var precoAplicativo;
// retorna undefined

```

## Sintaxe de nome de váriaveis

1° - Os nomes podem iniciar com $, _, ou letras.

2° - Podem conter números mas não iniciar com eles

3° Case sensitive - O que é? Uma letra faz diferença em sua escrita
Exemplo: nome é diferente de Nome

4° - Não utilizar palavras reservadas
Lista de palavras reservadas: https://www.w3schools.com/js/js_reserved.asp

5° - Camel case
É comum nomearmos assim: abrirModal

```js 

// Inválido
var §nome;
var function;
var 1possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

```

## Declaração e Hoisting 

```js
1° - Declaração
| Erro ao tentar utilizar uma variável que não foi declarada.

console.log(nome);
// retorna nome is not defined

2° - Hoisting
| São movidas para cima do código, porém o valor atribuído não é movido.

console.log(nome);
var nome = 'André';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer
```

## Alteração de valores com váriáveis

| É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

| Exemplo:

```js
var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro
```