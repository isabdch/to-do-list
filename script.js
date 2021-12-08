var names = ["Isa", "Ana", "Thiago", "Vinicius"];
var g1 = [7.0, 4.5, 6.0, 2.3];
var g2 = [8.0, 9.0, 4.6, 6.0];

function average(n1, n2) {
    return (n1 + n2)/2;
}

function position(avrg) {
    if (avrg >= 6) {
        return "APPROVED";
    } else {
        return "FAILED";
    }
}

for (var i in names) {
    var grade1 = g1[i];
    var grade2 = g2[i];
    var avg = average(g1[i], g2[i]);
    console.log(names[i] + " - " + grade1 + " - " + grade2 + " - " + avg + " - " + position(avg) + ".");
}
