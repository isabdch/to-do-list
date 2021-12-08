var amigos = {
    nomes: ["Isabelle", "Ana", "Thiago"],
    idades: [19, 19, 21],
    filmes: ["Duna", "Um Amor no Natal", "Velozes e Furiosos"]
}

function idade(a) {
    if (a >= 18) {
        return "Aproveite o filme!";
    } else 
        return "Você não pode prosseguir por ser menor de idade.";
}

for (var i in amigos.nomes) {
    console.log(amigos.nomes[i] + ", você quer assistir " + amigos.filmes[i] + "." + " " + idade(amigos.idades[i]));
}