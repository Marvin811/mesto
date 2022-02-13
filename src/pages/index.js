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
    popupAddCard,
    popupEditAvatar,
    popupEditAvatarButton
} from '../utils/constants.js';
import Api from "../components/Api.js";

let section = null;

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: '7e1e7983-5be2-461b-86d0-72ce046c0cdb'
})

const editFormValidator = new FormValidator(validationConfig, formEditElement);
const cardFormValidator = new FormValidator(validationConfig, popupAddCard);
const avatarFormValidator = new FormValidator(validationConfig, popupEditAvatar)

// const section = new Section({
//     items: initialCards,
//     renderer: renderCard
// }, '.elements');

const popupImage = new PopupWithImage('.popup_type_image');

const userInfo = new UserInfo({
    name: ".profile__user",
    info: ".profile__author",
    avatar: ".profile__avatar"
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


// Добавление карточки
const elementSumbitHandler = (cardData) => {
    api.addCard({...cardData})
        .then((cardData) => {
            const cardAdd = renderCard({...cardData});
            section.addItemUp(cardAdd);
            cardFormValidator.setInactiveButton()
    })
        .catch(err => console.log(`Ошибка в index.js при добавлении карточки ${err}`))
};

//Изменение профиля
const profileSumbitHandler = ({name, info}) => {
    api.editUser({name, info})
        .then(user => {
            userInfo.setUserInfo({
                name: user.name, info: user.about
            })
        })
                .then(() => popupImage.close())
                .catch(err => console.log(`Ошибка в index.js при редактировании информации о user ${err}`))
};
//Изменение аватара
const avatarSumbitHandler = (avatar) => {
    api.editAvatar(avatar)
        .then(avatar => {
            userInfo.setUserAvatar(avatar.avatar)
            avatarFormValidator.setInactiveButton()
        }).then(() => popupImage.close())
        .catch(err => console.log(`Ошибка в index.js при редактировании аватар${err}`))
}

const popupProfile = new PopupWithFrom('.popup_type_add', elementSumbitHandler);
const popupEdit = new PopupWithFrom('.popup_type_edit', profileSumbitHandler);
const popupAvatar = new PopupWithFrom('.popup_type_avatar', avatarSumbitHandler);


popupOpenButtonElement.addEventListener('click', () => {
    const user = userInfo.getUserInfo();
    nameInput.value = user.name;
    jobInput.value = user.info;
    popupEdit.open();
});
popupAddButtonElement.addEventListener('click', () => {
    popupProfile.open();
});
popupEditAvatarButton.addEventListener('click', () => {
    popupAvatar.open();
})


editFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

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
//Загрузка профиля с сервера
api.getUser()
.then((user) =>{
    userInfo.setUserInfo({
        name: user.name,
        info: user.about,
        avatar: user.avatar
    });
    userInfo.setUserAvatar(user.avatar);
    //userInfo.setUserId(id)
})
    .catch(err => alert(`Ошибка в index.js getUser при загрузке карточек ${err}`));