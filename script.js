// function criarAlunos(nome, n1, n2) {
//   return {
//     nome: nome,
//     nota1: n1,
//     nota2: n2,
//     media: function () {
//       return (this.nota1 + this.nota2) / 2;
//     },
//   };
// }

// var alunos = [
//   criarAlunos("Isa", 8, 7.5),
//   criarAlunos("Ana", 8.5, 6),
//   criarAlunos("Thiago", 5, 7.8),
// ];

// var turma = alunos[0];

// for (var turma of alunos) {
//   console.log(turma.nome + " - " + turma.media());
// } //primeira forma de contruir objetos.

// function aluno(nome, n1, n2) {
//   this.nome = nome;
//   this.nota1 = n1;
//   this.nota2 = n2;
//   this.media = function () {
//     return (this.nota1 + this.nota2) / 2;
//   };
// }

// var estudante = [
//   new aluno("Isa", 6.5, 8),
//   new aluno("Ana", 8.7, 9.5),
//   new aluno("Thiago", 6, 4.5),
// ];

// for (var i = 0; i < estudante.length; i++) {
//   console.log(estudante[i]);
// } //segunda forma de contruir objetos.

// function guardaRoupa(tipo, cor, marca) {
//   this.t = tipo;
//   this.c = cor;
//   this.m = marca;
// }

// var roupas = [
//   new guardaRoupa("Camiseta", "branca", "Gucci"),
//   new guardaRoupa("Calça de alfaiataria", "verde-musgo", "Louis-Vuitton"),
//   new guardaRoupa("Jaqueta jeans", "azul", "Zara"),
//   new guardaRoupa("Sapato social", "preto", "Louis-Vuitton"),
// ];

// for (var i = 0; i < roupas.length; i++) {
//   console.log(roupas[i].t + " " + roupas[i].c + " da " + roupas[i].m + ".");
// }

// let band = {
//   name : 'Bring Me the Horizon',
//   nationality : 'British',
//   genre: 'Metalcore',
//   members: 5,
//   formed: 2004,
//   split: false,
//   albums: [{name: 'Suicide Season', released: 2008,},
//            {name: 'There Is A Hell Believe Me Ive Seen It.', released: 2010,},
//            {name: 'Sempiternal', released: 2013,},
//            {name: 'Thats The Spirit', released: 2015,},
//            {name: 'amo', released: 2019,},
//            {name: 'Music to listen to', released: 2020,},
//            {name: 'POST HUMAN - SURVIVAL HORROR', released: 2020,},]
// }

// console.log(band.name + " - " + band.nationality + " - " + band.genre + " - " + band.members + " members - " + band.formed);

function imc(nome, peso, altura) {
  this.nome = nome;
  this.peso = peso;
  this.altura = altura;
  this.imcc = function () {
    return this.peso / this.altura ** 2;
  };
  if (this.imcc() >= 18.5 && this.imcc() <= 24.9) {
    return (this.saudavel = "Peso ideal.");
  } else if (this.imcc() < 18.5) {
    return (this.saudavel = "Magreza.");
  } else if (this.imcc() > 24.9 && this.imcc() <= 29.9) {
    return (this.saudavel = "Sobrepeso.");
  } else if (this.imcc() > 29.9 && this.imcc() <= 39.9) {
    return (this.saudavel = "Obesidade.");
  } else if (this.imcc() > 39.9) {
    return (this.saudavel = "Obesidade mórbida.");
  }
}

var pessoa = [new imc("Pedro", 45, 1.59), new imc("Ana", 64, 1.73)];

for (var i = 0; i < pessoa.length; i++) {
  console.log(
    "Nome: " +
      pessoa[i].nome +
      "\nPeso: " +
      pessoa[i].peso +
      "Kg\nAltura: " +
      pessoa[i].altura +
      "cm\nImc: " +
      pessoa[i].imcc().toFixed(2) +
      "\nAvaliação: " +
      pessoa[i].saudavel
  );
}
