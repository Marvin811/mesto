export default class Card {
    constructor ({ cardData, userId, handleCardClick, handleDeleteCard, addLikeCard, deleteLikeCard}, cardSelector) {
        this._image = cardData.link;
        this._title = cardData.name;
        this._id = cardData._id
        this._ownerId = cardData.owner._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._userId = userId;
        this._handleDeleteCard = handleDeleteCard;
        //this._addLikeCard = addLikeCard;
        //this._deleteLikeCard = deleteLikeCard;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__list-items')
            .cloneNode(true)


        return cardElement;
    }
    _checkingCards() {
        if(this._ownerId !== this._userId){
            this._delButton.classList.add('elements__delete-button_none')
        }
    }

    generate() {
        this._element = this._getTemplate();
        const cardImage = this._element.querySelector('.elements__image');
        const cardTitle = this._element.querySelector('.elements__heading');
        cardImage.src = this._image;
        cardImage.alt = this._title;
        cardTitle.textContent = this._title;
        this._setEventListeners();
        this._checkingCards();

        return this._element;
    }

    deleteCardClass = () => {
        this._element.remove();
    }

    _handleLike = () => {
        const likeButton = this._element.querySelector('.elements__like-button');
        likeButton.classList.toggle('elements__like-button_active');
    }

    _setEventListeners() {
        this._delButton = this._element.querySelector('.elements__delete-button');
        this._delButton.addEventListener('click', () => this._handleDeleteCard(this));
        const likeButton = this._element.querySelector('.elements__like-button');
        likeButton.addEventListener('click', this._handleLike);
        const cardImage = this._element.querySelector('.elements__image');
        cardImage.addEventListener('click', this._handleCardClick);
    }
}