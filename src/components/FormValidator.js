class FormValidator {
    constructor (validationConfig, form) {
        this._form = form;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButton = this._form.querySelector
        (validationConfig.submitButtonSelector);
        this._inputList = Array.from(this._form.querySelectorAll
        (this._inputSelector));
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
    }

    _hasInvalidInput() {
        return this._inputList.some((inputItem) => {
            return !inputItem.validity.valid
        })
    }

    _toggleInactiveState() {
        if (this._hasInvalidInput(this._inputList)) {
            this.setInactiveButton();
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }

    setInactiveButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    _showInputError(inputItem, errorMessageText) {
        inputItem.classList.add(this._inputErrorClass);
        const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(this._errorClass);
    }

    _hideInputError(inputItem) {
        inputItem.classList.remove(this._inputErrorClass);
        const errorMessage = this._form.querySelector(`#${inputItem.id}-error`);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass);
    }

    removeInputError() {
        this._inputList.forEach((inputItem) => {
            this._hideInputError(inputItem);
        });
    }

    _checkInputIsValid(inputItem) {
        if (!inputItem.validity.valid) {
            this._showInputError(inputItem, inputItem.validationMessage);
        } else {
            this._hideInputError(inputItem);
        }
    }

    _setEventListeners() {
        this._toggleInactiveState(this._inputList);

        this._inputList.forEach( (inputItem) => {
            inputItem.addEventListener('input', () => {
                this._checkInputIsValid(inputItem);

                this._toggleInactiveState(this._inputList);
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) =>
            evt.preventDefault());
        this._setEventListeners();
    }
}

export default FormValidator;