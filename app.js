//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);

//Functions

function addTodo(event) {
  //prvent form from submitting by default:

  event.preventDefault();
  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create a list element:
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Create a Checkmark btn:
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.classList.add("completeBtn");
  todoDiv.appendChild(completeBtn);

  //Create a Trash btn:
  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trashBtn");
  todoDiv.appendChild(trashBtn);

  //Adding everything to the parent ul div:
  todoList.appendChild(todoDiv);

  //clering value in input:
  todoInput.value = "";
}

function deleteItem(event) {
  const item = event.target;
  if (item.classList[0] === "trashBtn") {
    const temp = item.parentElement;
    temp.classList.add("fall");
    temp.addEventListener("transitionend", function () {
      temp.remove();
    });
  }
  //For CheckMark
  else if (item.classList[0] === "completeBtn") {
    const temp = item.parentElement;
    temp.classList.toggle("completed");
  }
}
