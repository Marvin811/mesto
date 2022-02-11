import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithFrom from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    validationConfig,
    //initialCards,
    formEditElement,
    popupOpenButtonElement,
    nameInput,
    jobInput,
    popupAddButtonElement,
    popupAddCard
} from '../utils/constants.js';
import Api from "../components/Api.js";

let section = null;

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: '7e1e7983-5be2-461b-86d0-72ce046c0cdb'
})

const editFormValidator = new FormValidator(validationConfig, formEditElement);
const cardFormValidator = new FormValidator(validationConfig, popupAddCard);

// const section = new Section({
//     items: initialCards,
//     renderer: renderCard
// }, '.elements');

const popupImage = new PopupWithImage('.popup_type_image');

const userInfo = new UserInfo({
    nameSelector: ".profile__user",
    infoSelector: ".profile__author"
});

function renderCard(cardData) {
    const card = new Card({
            cardData: cardData,
            handleCardClick: () => {
                popupImage.open(cardData.name, cardData.link);
            }
        },
        '#cardTemplate');
    return card.generate();
}

// const elementSumbitHandler = ({place, photo}) => {
//     const cardAdd = renderCard({name: place, link: photo});
//     section.addItem(cardAdd);
//     cardFormValidator.setInactiveButton();
// };
// Добавление карточки
const elementSumbitHandler = (cardData) => {
    api.addCard({...cardData})
        .then((cardData) => {
            const cardAdd = renderCard({...cardData});
            section.addItem(cardAdd);
            cardFormValidator.setInactiveButton()
    })
    // const cardAdd = renderCard({name: place, link: photo});
    // section.addItem(cardAdd);
    // cardFormValidator.setInactiveButton();
        .catch(err => console.log(`Ошибка в index.js при добавлении карточки ${err}`))
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

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

//section.renderSection();

//Загрузка карточек с сервера
api.getCards()
    .then((cards) => {
        section = new Section({
            items: cards,
            renderer: renderCard
        }, '.elements');
        section.renderSection(cards);
    })
    .catch(err => console.log(`Ошибка в index.js getCards при загрузке карточек ${err}`));