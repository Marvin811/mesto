//Находим форму в DOM - редак профиля
const popupElement = document.querySelector(".popup");
const formElement = popupElement.querySelector('.popup__form');
// Находим кнопки - редактирование профиля
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");// кнопка закрытия edit профиль
const popupOpenButtonElement = document.querySelector(".profile__edit-button");// кнопка открытия edit профиль
//Находим поля формы в DOM - редактирование профиля
const nameInput = popupElement.querySelector('.popup__input_user_name');//ввода имени user
const jobInput = popupElement.querySelector('.popup__input_user_job');//ввода занятие user
const nameProfile = document.querySelector(".profile__user");// форма ввода имя user
const jobProfile = document.querySelector(".profile__author");//занятие user
//Находим кнопки добавить изобржение
//const popupAddButtonElement = document.querySelector('.profile__add-button');
const cardsEl = document.querySelector('.elements');
const tamplateElement = document.querySelector('.template-card');
const popupAddCard = document.querySelector('.popup__add');

const addButtonElement = document.querySelector('.profile__add-button');//кнопка добавить карточку
const titleInput = document.querySelector('.popup__input_title');
const linkInput = document.querySelector('.popup__input_link');


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

// Функция открытие - редактирование профиля
function openPopup() {
    popupElement.classList.add('popup_is-opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

// Функция закрытие - редактирование профиля
function closePopup() {
    popupElement.classList.remove('popup_is-opened');
}

// Функция Обработчик «отправки» формы - редактирование профиля
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup()
}

//
function createCard(item) {
    const addCards = tamplateElement.content.cloneNode(true);
    addCards.querySelector('.elements__heading').textContent = item.name;
    addCards.querySelector('.elements__image').src = item.link;
    addCards.querySelector('.elements__image').alt = item.name;
    return addCards;
}

initialCards.map(render);

function render(item) {
    const cards = createCard(item)
    cardsEl.append(cards);

}

//Добавляет картинку без открытия попапа
function handleAdd() {
    const title = inputTitle.value;
    const link = inputLink.value;
    const card = createCard({title: title, link: link});
    cardsEl.prepend(card);

    titleInput.value = '';
    linkInput.value = '';
}

//Добавляем карточки

//Регистрация обработиков 
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);

addButtonElement.addEventListener("click", handleAdd);