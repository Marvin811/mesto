import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithFrom from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

//const popups = document.querySelectorAll('.popup');
//Находим форму в DOM - редак профиля
const popupElement = document.querySelector(".popup_type_edit");
const formEditElement = popupElement.querySelector('.popup__edit-profile');
// Находим кнопки - редактирование профиля
const popupOpenButtonElement = document.querySelector(".profile__edit-button");// кнопка открытия edit профиль
//Находим поля формы в DOM - редактирование профиля
const nameInput = popupElement.querySelector('.popup__input_user_name');//ввода имени user
const jobInput = popupElement.querySelector('.popup__input_user_job');//ввода занятие user
//const nameProfile = document.querySelector(".profile__user");// форма ввода имя user
//const jobProfile = document.querySelector(".profile__author");//занятие user
//Находим кнопки - добавление картинок
//const popupAddElement = document.querySelector(".popup_type_add");
const popupAddButtonElement = document.querySelector(".profile__add-button");
// //Находим кнопки для добавления карточек
const popupAddCard = document.querySelector(".popup__add-image");
//const cardsElement = document.querySelector('.elements');
//const popupTypeImage = document.querySelector('.popup_type_image')
//const templateElement = document.querySelector('.template-card');
//const titleInput = popupAddCard.querySelector('.popup__input_title');
//const imageInput = popupAddCard.querySelector('.popup__input_link');


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

const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const editFormValidator = new FormValidator(validationConfig, formEditElement);
const cardFormValidator = new FormValidator(validationConfig, popupAddCard);

const section = new Section({
    items: initialCards,
    renderer: renderCard
}, '.elements');

const popupImage = new PopupWithImage('.popup_type_image');

const userInfo = new UserInfo( {
    nameSelector: ".profile__user",
    infoSelector: ".profile__author"
});

function renderCard(objCard) {
    const card = new Card({
        name: objCard.name,
        link: objCard.link,
        handleCardClick: () => popupImage.open(objCard)
    }, ".template-card");

    return card.generateCard();
}

const elementSumbitHandler = ({ place, photo }) => {
    const cardAdd = renderCard({name: place, link: photo});
    section.addItem(cardAdd);
    cardFormValidator.setInactiveButton();
};

const profileSumbitHandler = ({name, info}) => {
    userInfo.setUserInfo({name, info});
};
const popupProfile = new PopupWithFrom('.popup_type_add', elementSumbitHandler);
const popupEdit = new PopupWithFrom('.popup_type_edit', profileSumbitHandler);

popupOpenButtonElement.addEventListener('click', () => {
    const user = userInfo.getUserInfo();
    nameInput.value = user.name;
    jobInput.value = user.info;
    popupEdit.open();
});
popupAddButtonElement.addEventListener('click', () => {
    popupProfile.open();
});

//
// // Функция закрытие - редактирование профиля
// function closePopup(popup) {
//     popup.classList.remove('popup_is-opened');
//     document.removeEventListener("keydown", closePopupEsc);
// }
//
// // Функция Обработчик «отправки» формы - редактирование профиля
// function hendleProfileSumbit(evt) {
//     evt.preventDefault();
//     nameProfile.textContent = nameInput.value;
//     jobProfile.textContent = jobInput.value;
//     closePopup(popupElement);
// }



// function buttonDisabled() {
//     const buttonOff = popupAddElement.querySelector('.popup__save-button');
//     buttonOff.classList.add('popup__save-button_disabled');
//     buttonOff.setAttribute("disabled", "disabled");
// }

// //Добавление новой карточки
// function handleAdd(evt) {
//     evt.preventDefault();
//     const card = new Card('.template-card', titleInput.value, imageInput.value, openPopup);
//     const cardEl = card.generateCard();
//     cardsElement.prepend(cardEl);
//
//
//     titleInput.value = '';
//     imageInput.value = '';
//
//     buttonDisabled();
//     closePopup(popupAddElement);
//
// }

// popups.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('popup_is-opened') || evt.target.classList.contains('popup__close-button')) {
//             closePopup(popup);
//         }
//     })
// })

//Регистрация обработиков
//popupOpenButtonElement.addEventListener("click", () => openPopupProfile(popupElement));
//formEditElement.addEventListener('submit', hendleProfileSumbit);
//Попап добавления
//popupAddButtonElement.addEventListener("click", () => openPopup(popupAddElement));
//popupAddCard.addEventListener("submit", handleAdd);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

section.renderSection();


