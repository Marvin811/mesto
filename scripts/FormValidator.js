class FormValidator {
    constructor(config, form) {
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _showError(input) {
        const errorMessage = this._form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = input.validationMessage;
        errorMessage.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError(input) {
        const errorMessage = this._form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = "";
        errorMessage.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _checkIfInputValid(input) {
        if (!input.validity.valid) {
            this._showError(input);
        } else {
            this._hideError(input);
        }
    }

    _hasInvalidInput = (inputs) => {
        return Array.from(inputs).some((el) => !el.validity.valid)
    }

    _toggleButtonError() {
        if (this._hasInvalidInput(this.inputs)) {
            const buttonSave = document.querySelector('.popup__save-button');
            buttonSave.classList.add('popup__save-button_disabled')

            this.disabledButton()
        } else {

            this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
            this._submitButtonSelector.disabled = false;
        }

    }

    _setInputListener() {
        this._inputs = this._form.querySelectorAll(this._inputSelector);
        this._submitButton = this._form.querySelector(this._submitButtonSelector);

        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this._toggleButtonError();
            });
        });
    }

    disabledButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => evt.preventDefault());
        this._setInputListener();
    }
}

export default FormValidator;