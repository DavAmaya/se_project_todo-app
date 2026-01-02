/*Todo input data Structure
{
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "Read the sprint's theory",
    completed: true,
    date: new Date(),
  }
*/

export class Todo {
  constructor(data, selector) {
    (this._id = data.id),
      (this._name = data.name),
      (this._completed = data.completed),
      (this._date = data.date);
    this._selector = selector;
  }

  _getTemplate() {
    const todoElement = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);

    return todoElement;
  }

  generateTodo() {
    const todoElement = this._getTemplate();

    this._todoName = todoElement.querySelector(".todo__name");
    this._todoCheckbox = todoElement.querySelector(".todo__completed");
    this._todoLabel = todoElement.querySelector(".todo__label");
    this._todoDate = todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

    this._todoName.textContent = this._name;
    this._todoCheckbox.checked = this._completed;

    // Apply id and for attributes.
    // The id will initially be undefined for new todos.
    this._todoCheckbox.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);

    // If a due date has been set, parsing this it with `new Date` will return a
    // number. If so, we display a string version of the due date in the todo.
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._todoDeleteBtn.addEventListener("click", () => {
      todoElement.remove();
    });

    return todoElement;
  }
}
