// Exercicios sobre objetos

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var meuNome = {
  nome: 'Arthur',
  sobrenome: 'Coutinho',
}

meuNome.nome = 'Arthur',
meuNome.sobrenome = 'Coutinho'

// Resolução Origamid

//  var meuNome = {
//   nome: 'Arthur',
//   sobrenome: 'Coutinho',
// }



// Crie um método no objeto anterior, que mostre o seu nome completo

var meuNome = {
  nome: 'Arthur', // Propriedade & Valor
  sobrenome: 'Coutinho',
  nomeCompleto: function() {
    const teste = () => `${this.nome} ${this.sobrenome}`
    return teste()
  }
}

// Resolução Origamid
// meuNome.nome.Completo = function() {
//  return `${this.nome} ${this.sobrenome}`
// }

function oi (){
  console.log ('oi')
} 

const ola = () => console.log ('oi') 

meuNome.nome = 'Arthur'
meuNome.sobrenome = 'Coutinho'
const nomeCompleto = meuNome.nomeCompleto()
console.log(nomeCompleto)

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  color: 'preto',
  idade: 10,
  latir(){
    console.log('Au au au')
  },
  ver(coisa){
    if (coisa === 'homem'){
      this.latir() 
    } else {
      console.log('Cachorro tá mec')
    }
  }
}

cachorro.ver('homem')

// Ctrl + Alt + N - executar o code runner
// Ctrl + Shift + p - Start on current file para executar o Quokka