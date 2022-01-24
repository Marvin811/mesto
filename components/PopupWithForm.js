import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(selector, handleFormSumbit) {
        super(selector);
        this._handleFormSumbit = handleFormSumbit;
        this._elementForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._elementForm.querySelector('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    close() {
        this._elementForm.reset();
        super.close();

    }

    _setEventListeners() {
        this._elementForm.addEventListener('submit', this._handleSubmit);
        super._setEventListeners();
    }

    _removeListener() {
        this._elementForm.removeEventListener('sumbit', this._handleSubmit);
        super._removeListener();
    }

    _handleSubmit = (evt) => {
        evt.preventDefault()
        this._handleFormSumbit(this._getInputValues());
        this._elementForm.reset();
        this.close();
    }


}