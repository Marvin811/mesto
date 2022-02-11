import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._image = this._popup.querySelector('.popup__image');
        this._title = this._popup.querySelector('.popup__heading');
    }

    open(name, link) {
        super.open();

        this._image.src = link;
        this._title.textContent = name;
        this._image.alt = name;
    }
}