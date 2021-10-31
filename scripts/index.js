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
//Регистрация обработиков 
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
