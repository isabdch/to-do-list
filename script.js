var nome = prompt("Qual é o nome do(a) aluno(a)?");
var n1 = parseFloat(prompt("Qual é a 1ª nota de " + nome + "?"));
var n2 = parseFloat(prompt("Qual é a 2ª nota de " + nome + "?"));
var media = (n1 + n2)/2
var posicao = ""
if (media >= 8) {
    posicao = "Ótimo";
} else if (media >= 6.5) {
    posicao = "Bom";
} else if (media >= 1) {
    posicao = "Regular";
}
switch (posicao) {
    case "Ótimo":
        alert("A média é " + media + ".\nParabéns! " + nome + " é um(a) ótimo(a) aluno(a)!");
        break
    case "Bom":
        alert("A média é " + media + ".\n" + nome + " é um(a) bom(a) aluno(a).");
        break
    case "Regular":
        alert("A média é " + media + ".\n" + nome + " é um aluno(a) regular, precisa estudar mais!");     
        break
    default:
        alert("Houve um erro. Por favor recarregue a página.");
        break
}