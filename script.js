var nome = prompt("Informe o nome do(a) aluno(a):");
var nota1 = parseFloat(prompt("Informe a 1ª nota:"));
var nota2 = parseFloat(prompt("Informe a 2ª nota:"));
var media = (nota1 + nota2)/2
if (media >= 7) {
    alert("A média de " + nome + " é " + media + " e está acima de 7, portanto sua posição é de APROVADA.");
} else if (media >= 3) {
    alert("A média de " + nome + " é " + media + " e está entre 3 e 6.9, portanto sua posição é de RECUPERAÇÃO.");
} else {
    alert("A média de " + nome + " é " + media + " e está entre 0 e 2.9, portanto sua posição é REPROVADA.")
}


