export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    this._popupSelector.classList.add("popup_visible");
    this.setEventListeners();
  }

  close() {
    this._popupSelector.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  setEventListeners() {
    const closebtn = this._popupSelector.querySelector(".popup__close");
    closebtn.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
