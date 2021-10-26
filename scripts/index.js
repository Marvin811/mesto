const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(
  ".popup__close-button"
);
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
let nameProfile = document.querySelector(".profile__user");
let jobProfile = document.querySelector(".profile__author");
/**
 * Функция, которая закрывает окошко по клику на затемненную область.
 */
const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};
/**
 * Функция, которая «переключает» состояние всплывающего окошка
 */
const openPopup = function () {
  popupElement.classList.add("popup_is-opened");
};
const closePopup = function () {
  popupElement.classList.remove("popup_is-opened");
};
const activeLike = function () {
  likeActiveElement.classList.add(".elements__like-button_active");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);

// Находим форму в DOM
let formElement = popupElement.querySelector(".popup__form");
// Находим поля формы в DOM
let nameInput = popupElement
  .querySelector(".popup__name")
  .setAttribute("value", nameProfile.textContent);
let jobInput = popupElement
  .querySelector(".popup__job")
  .setAttribute("value", jobProfile.textContent);
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  nameInput = popupElement.querySelector(".popup__name").value;
  // Получите значение полей jobInput и nameInput из свойства value
  jobInput = popupElement.querySelector(".popup__job").value;
  // Выберите элементы, куда должны быть вставлены значения полей
  nameProfile.textContent = nameInput;
  jobProfile.textContent = jobInput;
  // Вставьте новые значения с помощью textContent
  closePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
