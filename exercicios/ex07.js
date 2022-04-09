 var dados = {
  nome: 'Arthur',
  sobrenome: 'Coutinho',
  idade: 20, 
  cidade: 'Maceió'
}

dados.nomeCompleto = function() {
 return `${this.nome} ${this.sobrenome}`;
}

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10',
  latir(pessoa) {
    if(pessoa === 'homem'){
      return 'Latir';
    } else {
    return 'Nada';
   }
  }
}

