function f(e) {
  console.log("Teste");
  console.log(this);
  console.log(e);
}

function f1(e) {
  console.log("Outro teste");
  console.log(this);
  console.log(e);
  console.log(e.target);
}

window.onload = function () {
  let titulo = document.getElementsByTagName("h1")[0];
  titulo.addEventListener("click", f1);
};
