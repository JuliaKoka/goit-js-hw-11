import { fetchImageName } from './js/pixabay-api';

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formKey = event.target;
  const inputValue = formKey.elements['user-input'].value;
  if (inputValue === '') {
    window.alert('Please fill in the form');
  }

  fetchImageName(inputValue);

  form.reset();
}
