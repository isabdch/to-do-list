// get HTML elements.
const input = document.querySelector("input"); // input.
const addLi = document.querySelector(".addLi"); // add button.
const clearLi = document.querySelector(".clearLi"); // clear button.
const todoList = document.querySelector(".todo-list"); // ul list.
const header = document.querySelector("header");

// add events to the elements.
addLi.addEventListener("click", addToDo);
clearLi.addEventListener("click", clearToDo);
todoList.addEventListener("click", removeAndCheck);

// events functions.
function addToDo(event) {
  event.preventDefault(); // to prevent that form buttons make their default behavior.

  header.style.marginTop = "50px";

  // creates new elements, then creates their classes names and connects them to other elements.
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");

  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoDiv.appendChild(todoLi);

  todoLi.innerText = input.value;
  input.value = "";

  const removeLiButton = document.createElement("button");
  removeLiButton.innerHTML = "<i class='fas fa-times'></i>";
  removeLiButton.classList.add("remove-li");
  todoLi.appendChild(removeLiButton);

  const checkedButton = document.createElement("button");
  checkedButton.innerHTML = "<i class='fas fa-check'></i>";
  checkedButton.classList.add("checked-button");
  todoLi.appendChild(checkedButton);

  todoList.appendChild(todoDiv);
}

function clearToDo(event) {
  event.preventDefault();
  todoList.innerHTML = "";
}

function removeAndCheck(event) {
  const item = event.target;
  if (item.classList[0] === "remove-li") {
    const toDo = item.parentElement;
    toDo.remove();
  }

  if (item.classList[1] === "fa-times") {
    const toDo = item.parentElement;
    const toDo1 = toDo.parentElement;
    toDo1.remove();
  }

  if (item.classList[0] === "checked-button") {
    const toDo = item.parentElement;
    toDo.classList.toggle("checked");
  }

  if (item.classList[1] === "fa-check") {
    const toDo = item.parentElement;
    const toDo1 = toDo.parentElement;
    toDo1.classList.toggle("checked");
  }
}