import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

populateForm();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (refs.input.value !== '' && refs.textarea.value !== '') {
    refs.form.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    Object.keys(formData).forEach(key => delete formData[key]);
  } else alert('Заповніть всі поля!');
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      formData.email = parsedData.email;
      console.log(formData.email);
    } else formData.email = '';

    if (parsedData.message) {
      formData.message = parsedData.message;
    } else formData.message = '';

    refs.input.value = formData.email;
    refs.textarea.value = formData.message;
  }
}
