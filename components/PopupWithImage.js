import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._popup.querySelector('.elements__image');
        this._title = this._popup.querySelector('.elements__heading');
    }

    open(obj) {
        this._image.src = obj.link;
        this._title.textContent = obj.title;
        this._image.alt = obj.title;
        super.open();
    }
}