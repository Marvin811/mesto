export default class Card {
    constructor(selector) {
        this._selector = selector;
    }
    _getTemplate() {
        return document.querySelector(this._selector)
            .content
            .querySelector('.template-card')
            .cloneNode(true)
    }
    _getView() {
        return this._getTemplate();
    }
}


