import {
  initialTodos,
  addTodoPopup,
  addTodoButton,
  form,
  validationConfig,
} from "../utils/constants.js";
import { Todo } from "../components/Todo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import TodoCounter from "../components/TodoCounter.js";
import { FormValidator } from "../components/FormValidator.js";

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoValidator = new FormValidator(form, validationConfig);

addTodoValidator.enableValidation();

const todoList = new Section(
  {
    items: initialTodos,
    renderer: (data) => {
      const todo = new Todo(
        { data, onCheck: onCheck, onDelete: onDelete },
        "#todo-template",
      );
      return todo;
    },
  },
  ".todos__list",
);

const onCheck = (checked) => {
  todoCounter.updateCompleted(checked);
};

const onDelete = () => {
  todoCounter.updateTotal(false);
};

const addTodoForm = new PopupWithForm(addTodoPopup, (element) => {
  console.log(element);
  todoList.addItem(element);
  todoCounter.updateTotal(true);
  addTodoValidator.resetValidation();
});

addTodoButton.addEventListener("click", () => {
  addTodoForm.open();
});

todoList.renderItems();
