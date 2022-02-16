export default class Card {
    constructor({cardData, userId, handleCardClick, handleDeleteCard, addLikeCard, deleteLikeCard}, cardSelector) {
        this._image = cardData.link;
        this._title = cardData.name;
        this._id = cardData._id
        this._ownerId = cardData.owner._id;
        this._cardData = cardData;
        this._likes = cardData.likes;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._userId = userId;
        this._handleDeleteCard = handleDeleteCard;
        this._addLikeCard = addLikeCard;
        this._deleteLikeCard = deleteLikeCard;
        this._cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__list-items')
            .cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.elements__image');
        this._cardTitle = this._cardElement.querySelector('.elements__heading');
        this._delButton = this._cardElement.querySelector('.elements__delete-button');
        this._amountLike = this._cardElement.querySelector('.elements__like-amount');
        this._like = this._cardElement.querySelector('.elements__like-button');
        this._cardImage = this._cardElement.querySelector('.elements__image');
        this._handleLike();
    }

    deleteCardClass = () => {
        this._cardElement.remove();
    }

    _handleLike() {
        if (this._cardData.likes.some(element => element._id === this._userId)) {
            this._like.classList.add('elements__like-button_active');
        }
    }

    _likeSwitch() {
        if(!this._like.classList.contains('elements__like-button_active')) {
            this._addLikeCard(this._id)
                .then(res => {
                    this._cardData = res;
                    this._amountLike.textContent = res.likes.length;
                    this._like.classList.add('elements__like-button_active');
                })
                .catch(err => console.log(`Ошибка в index.js при лайку карточки ${err}`))
        } else {
            this._deleteLikeCard(this._id)
                .then(res => {
                    this._cardData= res;
                    this._amountLike.textContent = res.likes.length;
                    this._like.classList.remove('elements__like-button_active');
                })
                .catch(err => console.log(`Ошибка в index.js при удалении лайка карточки ${err}`))
        }
    }

    _checkingCards() {
        if (this._ownerId !== this._userId) {
            this._delButton.classList.add('elements__delete-button_none')
        }
    }

    _setEventListeners() {

        this._delButton.addEventListener('click', () => this._handleDeleteCard(this));
        this._like.addEventListener('click', () => this._likeSwitch());
        this._cardImage.addEventListener('click', this._handleCardClick);
    }

    generate() {
        this._cardImage.src = this._image;
        this._cardImage.alt = this._title;
        this._cardTitle.textContent = this._title;
        this._amountLike.textContent = this._likes.length;
        this._setEventListeners();
        this._checkingCards();
        this._handleLike();

        return this._cardElement;
    }

}