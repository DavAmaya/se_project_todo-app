export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  //render initial array

  renderItems() {
    this._items.forEach((item) => {
      this._addToDOM(item);
    });
  }

  //appends to the dom
  _addToDOM(element) {
    const todo = this._renderer(element);
    this._container.append(todo.getView());
  }

  //add new element to arry and render
  addItem(element) {
    this._items = [...this._items, element];
    console.log(this._items);
    this._addToDOM(element);
  }
}
