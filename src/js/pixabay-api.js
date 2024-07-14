fetch(
  'https://pixabay.com/api/?key=44934541-86fe3f4b652536370b4b9d239&q=cats&image_type=photo&orientation=horizontal&safesearch=true'
)
  .then(res => {
    return res.json();
  })
  .then(data => console.log(data));
