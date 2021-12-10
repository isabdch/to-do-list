var d = new Date(3957395780380);
var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
var meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

console.log(d);
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.setMonth(1));
console.log(meses[d.getMonth()]);
console.log(d.getDay());
console.log(dias[d.getDay()]);