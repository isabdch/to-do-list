function load() {
  let input1 = document.getElementsByTagName("input")[0];
  let button = document.getElementsByTagName("button")[1];
  let input2 = document.getElementsByTagName("input")[1];
  let t1 = document.getElementsByTagName("h2")[0];
  let t2 = document.getElementsByTagName("h2")[1];
  input1.addEventListener("input", onInput);
  button.addEventListener("click", hide_show);
  input2.addEventListener("change", changeColor);
  t1.addEventListener("click", maiusculas);
  t2.addEventListener("click", minusculas);
}

function onInput() {
  let title = document.getElementsByTagName("h1")[0];
  title.innerText = this.value;
}

function changeColor() {
  let title = document.getElementsByTagName("h1")[0];
  title.style.color = this.value;
}

function hide_show() {
  let title = document.getElementsByTagName("h1")[0];
  if (title.style.display == "none") {
    title.style.display = "inline-block";
  } else {
    title.style.display = "none";
  }
}

function maiusculas() {
  this.textContent = this.textContent.toUpperCase();
}

function minusculas() {
  this.textContent = this.textContent.toLowerCase();
}
