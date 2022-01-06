class Card {
    constructor(selector, title, image, onPopup) {
        this._selector = selector;
        this._title = title;
        this._image = image;
        this._onPopup = onPopup;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._selector)
            .content
            .querySelector('.elements__list-items')
            .cloneNode(true);

        return cardElement;
    }

    //Функция удаления карточки
    _handleDelete(evt) {
        evt.target.closest('.elements__list-items').remove();
    }

    //Функция лайк
    _handleLike(evt) {
        evt.target.classList.toggle('elements__like-button_active');
    }

    //Функция открытия попапа карточки
    _openImage = () => {
        //Открытие и закрытие попапа карточек
        const popupImageElement = document.querySelector('.popup_type_image');
        const popupImage = document.querySelector(".popup__image");
        const popupHeading = document.querySelector(".popup__heading");

        popupImage.src = this._image;
        popupImage.alt = this._title;
        popupHeading.textContent = this._title;

        this._onPopup(popupImageElement)
    }


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.elements__heading').textContent = this._title;
        this._element.querySelector('.elements__image').src = this._image
        this._element.querySelector('.elements__image').alt = this._title;

        return this._element;
    }

    _setEventListeners() {
        const deleteButton = this._element.querySelector('.elements__delete-button');
        deleteButton.addEventListener('click', this._handleDelete);

        const likeButton = this._element.querySelector('.elements__like-button');
        likeButton.addEventListener('click', this._handleLike);

        const openImage = this._element.querySelector('.elements__image');
        openImage.addEventListener('click', this._openImage);
    }

}

export default Card;