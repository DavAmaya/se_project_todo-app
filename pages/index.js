import { initialTodos, addTodoPopup, addTodoButton } from "../utils/constants.js";
import { Todo } from "../components/Todo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section  from "../components/Section.js"
import TodoCounter from "../components/TodoCounter.js";

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const todoList = new Section({
  items: initialTodos,
  renderer: (data) => {
    const todosList = document.querySelector(".todos__list");
    const todo = new Todo(data, "#todo-template", todoCounter);
    todosList.append(todo.getView());
  }
}, ".todos__list", todoCounter);


const addTodoForm = new PopupWithForm(addTodoPopup, (element) => todoList.addItem(element));

addTodoButton.addEventListener("click", () => {
  addTodoForm.open();
});

todoList.renderItems();
