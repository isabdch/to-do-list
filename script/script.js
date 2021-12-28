let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];
let li = document.getElementsByTagName("li");
let list = [];

button.addEventListener("click", addLi);

function addLi() {
  list.push(input.value);
}

console.log(list);
