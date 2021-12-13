let titulo = document.getElementById("titulo");
titulo.innerHTML =
  titulo.innerHTML +
  "<h5 id='subtitulo'>Este é um sub-título inserido no JavaScript.</h5>";

let paragrafos = document.getElementsByClassName("paragrafo");

for (let i = 0; i < paragrafos.length; i++) {
  paragrafos[i].style.color = "Red";
}

subtitulo.style.color = "Green";

let p3 = document.getElementById("p3");
p3.setAttribute("newAtt", "sex");

let p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  console.log(p[i]);
}

console.log(p[1].textContent);
