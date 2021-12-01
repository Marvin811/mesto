//Находим форму в DOM - редак профиля
const popupElement = document.querySelector(".popup_type_edit");
const formEditElement = popupElement.querySelector('.popup__edit-profile');
// Находим кнопки - редактирование профиля
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");// кнопка закрытия edit профиль
const popupOpenButtonElement = document.querySelector(".profile__edit-button");// кнопка открытия edit профиль
//Находим поля формы в DOM - редактирование профиля
const nameInput = popupElement.querySelector('.popup__input_user_name');//ввода имени user
const jobInput = popupElement.querySelector('.popup__input_user_job');//ввода занятие user
const nameProfile = document.querySelector(".profile__user");// форма ввода имя user
const jobProfile = document.querySelector(".profile__author");//занятие user
//Находим кнопки - добавление картинок ///////////////мой код////////////////////
const popupAddElement = document.querySelector(".popup_type_add");
const popupAddCloseElement = popupAddElement.querySelector(".popup__close-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
// //Находим кнопки добавить изобржение
const popupAddCard = document.querySelector(".popup__add-image");
const cardsElement = document.querySelector('.elements');
const templateElement = document.querySelector('.template-card');

const titleInput = popupAddCard.querySelector('.popup__input_title');
const imageInput = popupAddCard.querySelector('.popup__input_link');

//Добавление карточек из массива
const initialCards = [
    {
        name: 'Star Wars in COVID19',
        link: 'https://images.unsplash.com/photo-1585669060258-2dc6a3976d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        alt: 'Архыз'
    },
    {
        name: 'Stormtrooper on planter',
        link: 'https://images.unsplash.com/photo-1627742604452-2444a3952e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        alt: 'Архыз'
    },
    {
        name: 'S T O R M T R O O P E R',
        link: 'https://images.unsplash.com/photo-1587416544790-e1e27237c6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        alt: 'Архыз'
    },
    {
        name: 'D A V I D S O N L U N A',
        link: 'https://images.unsplash.com/photo-1598899450636-3c62c5332a35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        alt: 'Архыз'
    },
    {
        name: 'brothers',
        link: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        alt: 'Архыз'
    },
    {
        name: 'Baby Yoda',
        link: 'https://images.unsplash.com/photo-1603621760091-d7b12c66549a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1464&q=80',
        alt: 'Архыз'
    }
];


function openPopup(popup) {
    popup.classList.add("popup_is-opened")
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
}

// Функция Обработчик «отправки» формы - редактирование профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup(popupElement);
}

function render() {
    const cards = initialCards.map((item) => {
        return createCard(item);
    })
    cardsElement.append(...cards);
}

function createCard(item) {
    const addCards = templateElement.cloneNode(true).content;
    const titleElement = addCards.querySelector('.elements__heading');
    const imageElement = addCards.querySelector('.elements__image');

    titleElement.textContent = item.name;
    imageElement.src = item.link;
    imageElement.alt = titleElement.textContent;

    return addCards;
}

function handleAdd(evt) {
    evt.preventDefault();

    const inputFormTitle = titleInput.value;
    const inputFormImage = imageInput.value;
    const placeItem = createCard({
        name: inputFormTitle,
        link: inputFormImage
    })

    cardsElement.prepend(placeItem);

    titleInput.value = '';
    imageInput.value = '';

    closePopup(popupAddElement);
}


//Регистрация обработиков
popupOpenButtonElement.addEventListener("click", () => openPopupProfile(popupElement));
popupCloseButtonElement.addEventListener("click", () => closePopup(popupElement));
formEditElement.addEventListener('submit', formSubmitHandler);
//Попап добавления
popupAddButtonElement.addEventListener("click", () => openPopup(popupAddElement));
popupAddCloseElement.addEventListener("click", () => closePopup(popupAddElement));
popupAddCard.addEventListener("submit", handleAdd);

render();