class FormValidator {
    constructor (config, form) {
        this._form = form;
        this._inputSelector = config.inputSelector;
        this._submitButton = this._form.querySelector
        (config.submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll
        (this._inputSelector));
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
    }

    _hasInvalidInput() {
        return this._inputList.some((inputItem) => {
            return !inputItem.validity.valid
        })
    }

    _toggleButtonError() {
        if (this._hasInvalidInput(this._inputList)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }

    setInactiveButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    _showError(inputItem, errorMessageText) {
        inputItem.classList.add(this._inputErrorClass);
        const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(this._errorClass);
    }

    _hideError(inputItem) {
        inputItem.classList.remove(this._inputErrorClass);
        const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass);
    }

    _removeError() {
        this._inputList.forEach((inputItem) => {
            this._hideError(inputItem);
        });
    }

    _checkInputIsValid(inputItem) {
        if (!inputItem.validity.valid) {
            this._showError(inputItem, inputItem.validationMessage);
        } else {
            this._hideError(inputItem);
        }
    }

    _setInputListener() {
        this._toggleButtonError(this._inputList);

        this._inputList.forEach( (inputItem) => {
            inputItem.addEventListener('input', () => {
                this._checkInputIsValid(inputItem);

                this._toggleButtonError(this._inputList);
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) =>
            evt.preventDefault());
        this._setInputListener();
    }
}

export default FormValidator;