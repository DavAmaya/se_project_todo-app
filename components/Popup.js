export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    this.removeEventListeners();
  }

  setEventListeners() {
    this._closeButton = this._popupElement.querySelector(".popup__close");
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", this._handleEscapeClose);

    this._popupElement.addEventListener("click", (event) => {
      if (event.target == this._popupElement) {
        this.close();
      }
    });
  }

  removeEventListeners() {
    this._closeButton.removeEventListener("click", () => {
      this.close();
    });

    document.removeEventListener("keydown", this._handleEscapeClose);

    this._popupElement.removeEventListener("click", (event) => {
      if (event.target == this._popupElement) {
        this.close();
      }
    });
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
