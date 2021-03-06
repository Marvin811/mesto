import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, handleFormSumbit) {
        super(selector);
        this._handleFormSumbit = handleFormSumbit;
        this._elementForm = this._popup.querySelector('.popup__form');
        this._buttonSub = this._popup.querySelector('.popup__save-button')
    }

    _getInputValues() {
        this._formInputs = this._popup.querySelectorAll('.popup__input');
        this._formValues = {};
        this._formInputs.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        this._elementForm.addEventListener('submit', this._handleSubmit);
        super.setEventListeners();
    }

    removeListener() {
        this._elementForm.removeEventListener('sumbit', this._handleSubmit);
        super.removeListener();
    }

    _handleSubmit = (evt) => {
        evt.preventDefault();
        this._handleFormSumbit(this._getInputValues(), this._buttonSub);
        this._elementForm.reset();
    }

    close() {
        this.removeListener();
        super.close();
    }

}