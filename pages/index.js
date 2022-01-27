import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithFrom from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
    validationConfig,
    initialCards,
    formEditElement,
    popupOpenButtonElement,
    nameInput,
    jobInput,
    popupAddButtonElement,
    popupAddCard
} from '../utils/constants.js';


const editFormValidator = new FormValidator(validationConfig, formEditElement);
const cardFormValidator = new FormValidator(validationConfig, popupAddCard);

const section = new Section({
    items: initialCards,
    renderer: renderCard
}, '.elements');

const popupImage = new PopupWithImage('.popup_type_image');

const userInfo = new UserInfo({
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

const elementSumbitHandler = ({title, image}) => {
    const cardAdd = renderCard({name: title, link: image});
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

editFormValidator.enableValidation();
cardFormValidator.enableValidation();

section.renderSection();


