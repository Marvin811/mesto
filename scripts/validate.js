const checkIfInputValid = (form, input) => {
    if (!input.validity.valid){
        console.log("validniu")
    } else{
        console.log(" ne validno")
    }
}

const setInputListener = (form, {inputSelector}) => {
 const inputs = form.querySelectorAll(inputSelector);

 inputs.forEach((input) => {
     input.addEventListener('input', () => {
    checkIfInputValid(form, input);
     })
 })
}

const enableValidation = ({ formSelector, ...rest }) => {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setInputListener(form, rest);
    });
}
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
