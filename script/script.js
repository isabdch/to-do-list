// get HTML elements.
let input = document.querySelector("input"); // input.
let addLi = document.querySelector(".addLi"); // add button.
let clearLi = document.querySelector(".clearLi"); // clear button.
let todoList = document.querySelector(".todo-list"); // ul list.

// add events to the elements.
addLi.addEventListener("click", addToDo);
clearLi.addEventListener("click", clearToDo);

// events functions.
function addToDo(event) {  
  event.preventDefault();
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  let todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoLi.innerText = input.value;
  todoList.appendChild(todoDiv);
  todoDiv.appendChild(todoLi);
}

function clearToDo(event) {  
  event.preventDefault();
}