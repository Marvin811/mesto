export default class Card {
    constructor ({ cardData, handleCardClick }, cardSelector) {
        this._image = cardData.link;
        this._title = cardData.name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__list-items')
            .cloneNode(true)
        return cardElement;
    }

    generate() {
        this._element = this._getTemplate();
        const cardImage = this._element.querySelector('.elements__image');
        const cardTitle = this._element.querySelector('.elements__heading');
        cardImage.src = this._image;
        cardImage.alt = this._title;
        cardTitle.textContent = this._title;
        this._setEventListeners();

        return this._element;
    }

    _handleDelete = () => {
        this._element.remove();
    }

    _handleLike = () => {
        const likeButton = this._element.querySelector('.elements__like-button');
        likeButton.classList.toggle('elements__like-button_active');
    }

    _setEventListeners() {
        const delButton = this._element.querySelector('.elements__delete-button');
        delButton.addEventListener('click', this._handleDelete);
        const likeButton = this._element.querySelector('.elements__like-button');
        likeButton.addEventListener('click', this._handleLike);
        const cardImage = this._element.querySelector('.elements__image');
        cardImage.addEventListener('click', this._handleCardClick);
    }
}