// get HTML elements.
const input = document.querySelector("input"); // input.
const addLi = document.querySelector(".addLi"); // add button.
const clearLi = document.querySelector(".clearLi"); // clear button.
const todoList = document.querySelector(".todo-list"); // ul list.
const header = document.querySelector("header");

// add events to the elements.
document.addEventListener("DOMContentLoaded", getToDo);
addLi.addEventListener("click", addToDo);
clearLi.addEventListener("click", clearToDo);
todoList.addEventListener("click", removeAndCheck);

// events functions.
function addToDo(event) {
  event.preventDefault(); // to prevent that form buttons make their default behavior.

  // creates new elements, then creates their classes names and connects them to other elements.
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");

  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoDiv.appendChild(todoLi);

  todoLi.innerText = input.value;
  saveLocalToDo(input.value);
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
  localStorage.clear();
}

function removeAndCheck(event) {
  const item = event.target;
  const toDo = item.parentElement;

  if (item.classList[0] === "remove-li") {
    toDo.classList.add("fall");
    removeLocalStorage(toDo);
    toDo.addEventListener("transitionend", () => {
      toDo.remove();
    });
  }

  if (item.classList[0] === "checked-button") {
    toDo.classList.toggle("checked");
  }
}

function saveLocalToDo(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getToDo() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // creates new elements, then creates their classes names and connects them to other elements.
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-li");
    todoDiv.appendChild(todoLi);

    todoLi.innerText = todo;
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
  });
}

function removeLocalStorage(todo) {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.splice(todos.indexOf(todo.innerText), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
