import { fetchImageName } from './js/pixabay-api';
import { gallery } from './js/render-functions.js';

const form = document.querySelector('form');
const loadingIndicator = document.querySelector('.loading-indicator');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formKey = event.target;
  const inputValue = formKey.elements['user-input'].value;
  if (inputValue === '') {
    window.alert('Please fill in the form');
    return;
  }

  gallery.innerHTML = '';

  loadingIndicator.style.display = 'block';

  fetchImageName(inputValue).finally(() => {
    loadingIndicator.style.display = 'none';
  });

  form.reset();
}
