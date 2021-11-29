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
//Находим кнопки - добавление картинок
const popupAddElement = document.querySelector(".popup_type_add");
const popupAddCloseElement = popupAddElement.querySelector(".popup__close-button");
const popupAddButtonElement = document.querySelector(".profile__add-button");
//Находим кнопки добавить изобржение
const popupAddCard = document.querySelector(".popup__add-image");
const cardsEl = document.querySelector('.elements');
const tamplateElement = document.querySelector('.template-card');




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
        link: 'https://images.unsplash.com/photo-1587416544790-e1e27237c6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80   '
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


function openPopup(popup){
    popup.classList.add("popup_is-opened")
}


// Функция открытие - редактирование профиля
function openPopupProfile() {
    //popupElement.classList.add('popup_is-opened');
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

//
function createCard(item) {
    const addCards = tamplateElement.content.cloneNode(true);
    // addCards.querySelector('.elements__heading').textContent = item.name;
    // addCards.querySelector('.elements__image').src = item.link;
    // addCards.querySelector('.elements__image').alt = item.name;
    const titleEl = addCards.querySelector('.elements__heading');
    const linkEl = addCards.querySelector('.elements__image');
    titleEl.textContent = item.title;
    linkEl.src = item.link;
    return addCards;
}

initialCards.map(render);

// function render(item) {
//     const addCards = createCard(item)
//     cardsEl.append(addCards);
//
// }
function render(){
    const addCards = initialCards
        .map((item) => {
            return createCard(item)
        });
    cardsEl.append(...addCards);
}

//Добавляет картинку без открытия попапа
function handleAdd(evt) {
    evt.preventDefault();
    const titleInput = evt.currentTarget.querySelector(".popup__input_title").value;
    const linkInput = evt.currentTarget.querySelector(".popup__input_link").value;
    const cards = createCard({name: titleInput, link: linkInput});
    cardsEl.prepend(cards);
    evt.currentTarget.reset();
    closePopup(popupAddButtonElement)
}

//Регистрация обработиков 
popupOpenButtonElement.addEventListener("click", () => openPopupProfile(popupElement));
popupCloseButtonElement.addEventListener("click", () => closePopup(popupElement));
formEditElement.addEventListener('submit', formSubmitHandler);

popupAddButtonElement.addEventListener("click", ()=> openPopup(popupAddElement));
popupAddCloseElement.addEventListener("click", () => closePopup (popupAddElement));
popupAddCard.addEventListener("click", handleAdd);
