export const popupElement = document.querySelector(".popup_type_edit");
export const formEditElement = popupElement.querySelector('.popup__edit-profile');
export const popupOpenButtonElement = document.querySelector(".profile__edit-button");// кнопка открытия edit профиль
export const nameInput = popupElement.querySelector('.popup__input_user_name');//ввода имени user
export const jobInput = popupElement.querySelector('.popup__input_user_job');//ввода занятие user
export const popupAddButtonElement = document.querySelector(".profile__add-button");
export const popupAddCard = document.querySelector(".popup__add-image");
export const popupEditAvatar = document.querySelector(".popup__avatar-image");
export const popupEditAvatarButton = document.querySelector(".profile__overlay");
export const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

