class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') this.close();
    }
    _handleClose = (evt) => {
        if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__close-button')) {
            this.close();
        }
    }
    close() {
        this._popup.classList.remove('popup_is-opened');
        this._removeListener()
    }
    _setEventListeners() {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleClose);
    }
    open() {
        this._popup.classList.add("popup_is-opened")
        this._setEventListeners();
    }
    _removeListener() {
        document.removeEventListener('keydown', this._handleClose);
        this._popup.removeEventListener('click', this._handleClose);
    }
}
export default Popup;