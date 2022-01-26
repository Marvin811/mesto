import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._photo = this._popup.querySelector('.popup__image');
        this._place = this._popup.querySelector('.popup__heading');
    }

    open(obj) {
        this._photo.src = obj.link;
        this._place.textContent = obj.name;
        this._place.alt = obj.name;
        super.open();
    }
}