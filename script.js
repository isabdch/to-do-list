var alunos = {
    nomes: ["Isa", "Ana", "Thiago"],
    notas1: [8.6, 7, 4.5],
    notas2: [7.5, 6.5, 8],
    media: function(n1, n2) {
        return (n1 + n2) / 2;
    }
}

for (var i in alunos.nomes) {
    console.log(alunos.nomes[i] + " - Nota 1: " + alunos.notas1[i] + " - Nota 2: " + alunos.notas2[i] + " - Média: " + alunos.media(alunos.notas1[i], alunos.notas2[i]));
}