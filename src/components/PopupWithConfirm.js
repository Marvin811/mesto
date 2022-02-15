import Popup from "./Popup.js";

class popupWithConfirm extends Popup {
    constructor(selector, { clickHandleCallBack }) {
        super(selector);
        this._clickHandleCallBack = clickHandleCallBack;
        this._buttonDelete = this._popup.querySelector('.popup__remove-button')
    }
    setSumbitAction(action) {
        this._clickHandleCallBack = action;
    }

    _sumbit = () => this._clickHandleCallBack()

    _setEventListeners() {
        super._setEventListeners();
        this._buttonDelete.addEventListener('click', this._sumbit);
    }
    _removeListener() {
        super._removeListener();
        this._buttonDelete.removeEventListener('click', this._sumbit);
    }


}

export default popupWithConfirm