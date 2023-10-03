// Definindo um objeto chamado 'pessoa' com informações sobre uma pessoa
const pessoa = {
  nome: "Arthur", // Nome da pessoa
  idade: 20, // Idade da pessoa
  comidaFavorita: "Pizza", // Comida favorita da pessoa
};

// Definindo um objeto chamado 'obj' com nomes de times de futebol
const obj = {
  timePrimario: "Flamengo", // Time de futebol primário
  timeSecundario: "Vasco", // Time de futebol secundário
  timeTerciario: "Fluminense", // Time de futebol terciário
  timeQuartenario: "Botafogo", // Time de futebol quartário
};

// Unindo os nomes dos times em uma única string separada por vírgula
const timesOdiados = [
  obj.timePrimario,
  obj.timeSecundario,
  obj.timeTerciario,
  obj.timeQuartenario,
].join(", ");

// Definindo uma função chamada 'resultado'
const resultado = () => {
  // Exibindo informações sobre a pessoa e os times que ela odeia no console
  return console.log(
    `\nNome: ${pessoa.nome}\nIdade: ${pessoa.idade}\n\nTimes que ${pessoa.nome} ODEIA: ${timesOdiados}.`
  );
};

// Chamando a função 'resultado' para mostrar os resultados no console
resultado();
