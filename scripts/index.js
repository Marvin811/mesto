const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__button-close");
const popupOpenButtonElement = document.querySelector(".profile__button_edit");
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
  popupElement.classList.add("popup_opened");
};
const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};
const activeLike = function () {
  likeActiveElement.classList.add(".elements__like-button_active");
};

popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);