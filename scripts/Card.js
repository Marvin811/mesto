class Card {
    constructor(selector, title, image) {
        this._selector = selector;
        this._title = title;
        this._image = image;
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
        const targerEl = evt.target;
        const listItem = targerEl.closest(".elements__list-items");
        listItem.remove();
    }

    //Функция лайк
    _handleLike(evt) {
        evt.target.classList.toggle('elements__like-button_active');
    }

    //Функция открытия попапа карточки
    _openImage(evt) {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.currentTarget.alt;
        popupHeading.textContent = evt.currentTarget.alt;
        openPopup(popupImageElement)
    }


    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__heading').textContent = this._title;
        this._element.querySelector('.elements__image').src = this._image;

        this._element.querySelector('.elements__like-button').addEventListener('click', this._handleLike);
        this._element.querySelector('.elements__delete-button').addEventListener('click', this._handleDelete);
        this._element.querySelector('.elements__image').addEventListener('click', this._openImage);
        return this._element;
    }
}

export default Card;