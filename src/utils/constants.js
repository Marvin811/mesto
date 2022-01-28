export const popupElement = document.querySelector(".popup_type_edit");
export const formEditElement = popupElement.querySelector('.popup__edit-profile');
export const popupOpenButtonElement = document.querySelector(".profile__edit-button");// кнопка открытия edit профиль
export const nameInput = popupElement.querySelector('.popup__input_user_name');//ввода имени user
export const jobInput = popupElement.querySelector('.popup__input_user_job');//ввода занятие user
export const popupAddButtonElement = document.querySelector(".profile__add-button");
export const popupAddCard = document.querySelector(".popup__add-image");


//Добавление карточек из массива
export const initialCards = [
    {
        name: 'Star Wars in COVID19',
        link: 'https://images.unsplash.com/photo-1585669060258-2dc6a3976d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
        name: 'Stormtrooper on planter',
        link: 'https://images.unsplash.com/photo-1627742604452-2444a3952e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'S T O R M T R O O P E R',
        link: 'https://images.unsplash.com/photo-1587416544790-e1e27237c6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'D A V I D S O N L U N A',
        link: 'https://images.unsplash.com/photo-1598899450636-3c62c5332a35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
        name: 'brothers',
        link: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    },
    {
        name: 'Baby Yoda',
        link: 'https://images.unsplash.com/photo-1603621760091-d7b12c66549a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80'
    }
];

export const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

