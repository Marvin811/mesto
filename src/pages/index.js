import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithFrom from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    validationConfig,
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
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import {
    addSave,
    removeSave
} from "../utils/utils.js";

let section = null;

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-35',
    token: '7e1e7983-5be2-461b-86d0-72ce046c0cdb'
})

const apiDeleteCard = (cardData) => {
    api.deleteCard(cardData._id)
        .then(() => cardData.deleteCardClass())
        .then(() => closePopupDeleteCard())
        .catch(err => console.log(`Ошибка в index.js DeleteCard при загрузке карточек ${err}`));
}


//Загрузка профиля с сервера
api.getUser()
    .then((user) => {
        userInfo.setUserInfo({
            name: user.name,
            info: user.about,
            avatar: user.avatar
        });
        userInfo.setUserAvatar(user.avatar);
        userInfo.setUserId(user._id)
    })
    .then(() => {
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
    })
    .catch(err => alert(`Ошибка в index.js getUser при загрузке карточек ${err}`));



const popupImage = new PopupWithImage('.popup_type_image');

const userInfo = new UserInfo({
    name: ".profile__user",
    info: ".profile__author",
    avatar: ".profile__avatar"
});

function renderCard(cardData) {
    const card = new Card({
        cardData: cardData,
        userId: userInfo._id,
        handleCardClick: () => {
            popupImage.open(cardData.name, cardData.link);
        },
        handleDeleteCard: (cardData) => {
            popupDeleteCard.open();
            popupDeleteCard.setSumbitAction(() => apiDeleteCard(cardData))
        },
        addLikeCard: (cardData) => {
            return api.addLike(cardData)
        },
        deleteLikeCard: (cardData) => {
            return api.deleteLike(cardData)
        }
    }, '#cardTemplate');

    return card.generate();
}


// Добавление карточки
const elementSumbitHandler = (cardData, text) => {
    addSave(text);
    api.addCard({...cardData})
        .then((cardData) => {
            const cardAdd = renderCard({...cardData});
            section.addItemUp(cardAdd);
            cardFormValidator.setInactiveButton()
        })
        .then(() => popupProfile.close())
        .catch(err => console.log(`Ошибка в index.js при добавлении карточки ${err}`))
        .finally(() => {
            removeSave(text);
        });
};

//Изменение профиля
const profileSumbitHandler = ({name, info}, text) => {
    addSave(text);
    api.editUser({name, info})
        .then(user => {
            userInfo.setUserInfo({
                name: user.name, info: user.about
            })
        })
        .then(() => popupEdit.close())
        .catch(err => console.log(`Ошибка в index.js при редактировании информации о user ${err}`))
        .finally(() =>
            removeSave(text));
};
//Изменение аватара
const avatarSumbitHandler = (avatar, text) => {
    addSave(text);
    api.editAvatar(avatar)
        .then(avatar => {
            userInfo.setUserAvatar(avatar.avatar)
            avatarFormValidator.setInactiveButton()
        }).then(() => popupAvatar.close())
        .catch(err => console.log(`Ошибка в index.js при редактировании аватар${err}`))
        .finally(() =>
            removeSave(text));
}
//Закрытие попапа удаления карточки
const closePopupDeleteCard = () => popupDeleteCard.close();
//Попап удаления карточки

const editFormValidator = new FormValidator(validationConfig, formEditElement);
const cardFormValidator = new FormValidator(validationConfig, popupAddCard);
const avatarFormValidator = new FormValidator(validationConfig, popupEditAvatar);

const popupProfile = new PopupWithFrom('.popup_type_add', elementSumbitHandler);
const popupEdit = new PopupWithFrom('.popup_type_edit', profileSumbitHandler);
const popupAvatar = new PopupWithFrom('.popup_type_avatar', avatarSumbitHandler);
const popupDeleteCard = new PopupWithConfirm('.popup_type_remove', {
    clickHandleCallBack: closePopupDeleteCard
});

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