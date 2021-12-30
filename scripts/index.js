import Card from "./Card.js";

const popups = document.querySelectorAll('.popup');
//Находим форму в DOM - редак профиля
const popupElement = document.querySelector(".popup_type_edit");
const formEditElement = popupElement.querySelector('.popup__edit-profile');
// Находим кнопки - редактирование профиля
const popupOpenButtonElement = document.querySelector(".profile__edit-button");// кнопка открытия edit профиль
//Находим поля формы в DOM - редактирование профиля
const nameInput = popupElement.querySelector('.popup__input_user_name');//ввода имени user
const jobInput = popupElement.querySelector('.popup__input_user_job');//ввода занятие user
const nameProfile = document.querySelector(".profile__user");// форма ввода имя user
const jobProfile = document.querySelector(".profile__author");//занятие user
//Находим кнопки - добавление картинок
const popupAddElement = document.querySelector(".popup_type_add");
const popupAddButtonElement = document.querySelector(".profile__add-button");
// //Находим кнопки для добавления карточек
const popupAddCard = document.querySelector(".popup__add-image");
const cardsElement = document.querySelector('.elements');
//const templateElement = document.querySelector('.template-card');
const titleInput = popupAddCard.querySelector('.popup__input_title');
const imageInput = popupAddCard.querySelector('.popup__input_link');


//Добавление карточек из массива
const initialCards = [
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

initialCards.forEach(item => {
    const card = new Card('.template-card', item.name, item.link, openPopup);
    const cardEl = card.generateCard();
    cardsElement.append(cardEl);
})

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_is-opened');
        closePopup(openPopup);
    }
}

//Функция открытия
function openPopup(popup) {
    popup.classList.add("popup_is-opened")
    document.addEventListener("keydown", closePopupEsc);
}

// Функция открытие - редактирование профиля
function openPopupProfile() {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    openPopup(popupElement);
}

// Функция закрытие - редактирование профиля
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener("keydown", closePopupEsc);

}

// Функция Обработчик «отправки» формы - редактирование профиля
function hendleProfileSumbit(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
     closePopup(popupElement);
}

//Функции templateElements
// function render() {
//     const cards = initialCards.map((item) => {
//         return createCard(item);
//     })
//
//     cardsElement.append(...cards);
// }

function buttonDisabled() {
    const buttonOff = popupAddElement.querySelector('.popup__save-button');
    buttonOff.classList.add('popup__save-button_disabled');
    buttonOff.setAttribute("disabled", "disabled");
}

// function createCard(item) {
//     const addCards = templateElement.cloneNode(true).content;
//     const titleElement = addCards.querySelector('.elements__heading');
//     const imageElement = addCards.querySelector('.elements__image');
//
//     titleElement.textContent = item.name;
//     imageElement.src = item.link;
//     imageElement.alt = titleElement.textContent;
//
//     // const deleteBtn = addCards.querySelector(".elements__delete-button");
//     // deleteBtn.addEventListener("click", handleDelete);
//     // const likeBtn = addCards.querySelector(".elements__like-button");
//     // likeBtn.addEventListener("click", handleLike);
//     // const imageBtn = addCards.querySelector(".elements__image");
//     // imageBtn.addEventListener("click", openImage);
//
//     return addCards;
// }

// //Добавление новой карточки
function handleAdd(evt) {
    evt.preventDefault();
    // const inputFormTitle = titleInput.value;
    // const inputFormImage = imageInput.value;
    // const Item = getView({
    //     name: inputFormTitle,
    //     link: inputFormImage
    //
    // })
    //
    // cardsElement.prepend(Item);
    //
    // titleInput.value = '';
    // imageInput.value = '';
    const card = new Card('.template-card', titleInput.value, imageInput.value, openPopup);
    const cardEl = card.generateCard();
    cardsElement.prepend(cardEl);


    titleInput.value = '';
    imageInput.value = '';

    buttonDisabled();
    closePopup(popupAddElement);

}

// //Функция удаления карточки
// function handleDelete(evt) {
//     const targerEl = evt.target;
//     const listItem = targerEl.closest(".elements__list-items");
//     listItem.remove();
// }
//
// //Функция лайк
// function handleLike(evt) {
//     evt.target.classList.toggle('elements__like-button_active');
// }

//Функция открытия попапа карточки
// function openImage(evt) {
//     popupImage.src = evt.target.src;
//     popupImage.alt = evt.currentTarget.alt;
//     popupHeading.textContent = evt.currentTarget.alt;
//     openPopup(popupImageElement)
// }

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        }
    })
})

//Регистрация обработиков
popupOpenButtonElement.addEventListener("click", () => openPopupProfile(popupElement));
formEditElement.addEventListener('submit', hendleProfileSumbit);
//Попап добавления
popupAddButtonElement.addEventListener("click", () => openPopup(popupAddElement));
popupAddCard.addEventListener("submit", handleAdd);
//Попап открытия карточки
//popupImage.addEventListener('click', () => openPopup(popupImageElement));
//render();

