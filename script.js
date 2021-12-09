//Calcular o valor total de um aluguel de carros.

function total() {
  if (this.idade >= 18) {
    return (
      " Você dirigiu por " +
      this.dias +
      " dias e andou " +
      this.kms +
      "Km/h. O total que você deve pagar é: R$" +
      (parseFloat(this.dias * 10) + parseFloat(this.kms * 0.5) + parseFloat(90)) //Preço fixo de R$90 + R$10 por dia + R$0.50 por km andado.
    ); 
  } else if (this.idade < 18) {
    return "Você ainda não tem permissão para dirigir. Volte quando for maior de idade.";
  }
}

var pessoa1 = {
  nome: "João",
  idade: 18,
  dias: 15,
  kms: 150,
  totalS: total,
};

var pessoa2 = {
  nome: "Ana",
  idade: 16,
  dias: 7,
  kms: 34,
  totalS: total,
};

console.log(pessoa1.totalS());
console.log(pessoa2.totalS());
