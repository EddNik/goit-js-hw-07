const loginForm = document.querySelector('.login-form');

const emailInputName = 'email';
const passwordInputName = 'password';

const formObjectAfterSubmit = {
  [emailInputName]: '',
  [passwordInputName]: '',
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const formElementsCollection = event.target.elements;
  formObjectAfterSubmit[emailInputName] = formElementsCollection.email.value.trim();
  formObjectAfterSubmit[passwordInputName] = formElementsCollection.password.value.trim();

  if (
    formObjectAfterSubmit[emailInputName] === '' ||
    formObjectAfterSubmit[passwordInputName] === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    console.log(formObjectAfterSubmit);
  }

  loginForm.reset();
});
