class Card {
    constructor({name, link, handleCardClick}, selector) {
        this._selector = selector;
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
        this._cardElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.elements__list-items')
            .cloneNode(true);
        this._like = this._cardElement.querySelector('.elements__like-button');
        this._delete = this._cardElement.querySelector('.elements__delete-button');
        this._title = this._cardElement.querySelector('.elements__image');
        this._image = this._cardElement.querySelector('.elements__heading');
    }

    generateCard() {
        this._image.src = this._link;
        this._image.alt = this._name;
        this._title.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => this._like.classList.toggle('elements__like-button_active'));
        this._delete.addEventListener('click', () => this._cardElement.remove());
        this._image.addEventListener('click', () => this._handleCardClick);
    }
}

export default Card;