const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#passwordInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailError');
const passError = document.querySelector('#passwordError');

const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
  validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
  validateEmail(emailAddress.value, emailAddress, emailAddressError,);
  validatePass(password.value, password, passError,);
  
});

function validateEmail(valueInput, divInput, divError){
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (regExp.test(valueInput) == true){
      hideError(divInput, divError);
    }else {
      ShowError(divInput, divError, 'looks like this is not an email');
    }
}

function validatePass(valueInput, divInput, divError) {
  let regExp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (regExp2.test(valueInput) == true) {
    hideError(divInput, divError);
  } else {
    ShowError(
      divInput,
      divError,
      'Password this invalid, must contain at least 8 characters, one lowercase, one uppercase and one number'
    );
  }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
  if(valueInput.length == 0){
    ShowError(divInput, divError, nameInput);
  }else {
    hideError(divInput, divError);
  }
};

function ShowError(divInput, divError, error){
  divInput.style.border = '1px solid red';
  divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="icon-error">
            <p class="error">${error} </p>`; 
}

function hideError(divInput, divError) {
  divInput.style.border = '1px solid hsl(246, 25%, 77%)'; // remove the border color to make it empty again
  divError.innerHTML = ``; 
}


