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
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
  } else alert('Заповніть всі поля!');
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    refs.input.value = JSON.parse(savedData).email;
    refs.textarea.value = JSON.parse(savedData).message;
  }
}
