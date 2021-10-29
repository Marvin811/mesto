const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
let nameProfile = document.querySelector(".profile__user");
let jobProfile = document.querySelector(".profile__author");
const formElement = popupElement.querySelector('.popup__form');
let nameInput = popupElement.querySelector('input[name="name"]');
let jobInput = popupElement.querySelector('input[name="job"]');

function openPopup() {
  popupElement.classList.add('popup_is-opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
function closePopup() {
  popupElement.classList.remove('popup_is-opened');
}
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput = popupElement.querySelector('input[name="name"]').value;
  jobInput = popupElement.querySelector('input[name="job"]').value;
  nameProfile.textContent = nameInput;
  jobProfile.textContent = jobInput;
  closePopup()
}
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
