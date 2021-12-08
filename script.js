var posicao = 56;

function position(a) {
    if (a > 100) {
        return 100;
    } else if (a < 0) {
        return 0;
    } else if (a => 0 && a <= 100) {
        return posicao;
    }
}

console.log(position(posicao));