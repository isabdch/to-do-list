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
  todoList.appendChild(todoDiv);

  let todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoDiv.appendChild(todoLi);

  todoLi.innerText = input.value;

  let removeLiButton = document.createElement("button");
  removeLiButton.classList.add("remove-li");
  removeLiButton.innerHTML = "<i class='fas fa-times'></i>";
  todoDiv.appendChild(removeLiButton);

  let completedButton = document.createElement("button");
  completedButton.classList.add("completed-button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  todoDiv.appendChild(completedButton);
}

function clearToDo(event) {
  event.preventDefault();
}
