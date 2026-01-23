import { validationConfig } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import Popup from "./Popup.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";


export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._addTodoValidator = new FormValidator(
      this._form,
      validationConfig
    );
    this._addTodoValidator.enableValidation();
  }

  _getInputValues(evtTarget) {
    const name = evtTarget.name.value;
    const dateInput = evtTarget.date.value;

    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    return { name, date };
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const id = uuidv4();
      const completed = false;

      const inputs = this._getInputValues(evt.target);

      const values = { ...inputs, id, completed };

      this._formSubmit(values);

      this._addTodoValidator.resetValidation();
      super.close();
    });
  }
}
