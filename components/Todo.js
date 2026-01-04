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

  _handleCheck = () => {
    this._completed = !this._completed;
    this._todoCheckbox.checked = this._completed;
  };

  _handleDelete = () => {
    this._todoElement.remove();
  };

  _setEventListeners() {
    // Handle delete button
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete();
    });
    // Handle checkbox changes
    this._todoCheckbox.addEventListener("click", () => {
      this._handleCheck();
    });
  }

  _generateNameEl() {
    this._todoName = this._todoElement.querySelector(".todo__name");
    this._todoCheckbox = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoName.textContent = this._name;
  }

  _generateDateEl() {
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _generateCheckboxEl() {
    this._todoCheckbox.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  getView() {
    this._todoElement = this._getTemplate();
    this._generateNameEl();
    this._generateDateEl();
    this._generateCheckboxEl();
    this._setEventListeners();
    return this._todoElement;
  }

}
