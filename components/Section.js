export default class Section{  
  
  constructor({items, renderer}, containerSelector, todoCounter){
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
        this._todoCounter = todoCounter;
    }

    //render initial array

    renderItems(){
        this._items.forEach((item)=>{
            this._renderer(item);
        })
    }

    //add new element to arry and render
    addItem(element){
        this._items = [...this._items, element];
        this._todoCounter.updateTotal(true);
        this._renderer(element);
    }


}