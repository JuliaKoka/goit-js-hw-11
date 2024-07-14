const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formKey = event.target;
  const inputValue = formKey.elements['user-input'].value;
  if (inputValue === '') {
    window.alert('Please fill in the form');
  }
  form.reset();
}
