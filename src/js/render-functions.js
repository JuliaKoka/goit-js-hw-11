export const gallery = document.querySelector('.gallery');

// gallery.addEventListener(
//   'click',
//   handleClick(evt => {})
// );

export function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
  <div class="img-container">
  <a class="gallery-link" href=${largeImageURL}>
  <img class="gallery-image" src=${webformatURL} data-source=${largeImageURL} alt=${tags}>
  </a>
  </div>
  <div class="img-data">
  <ul class="img-data-list">
  <li class="img-data-element">
  <p class="img-data-fetched">Likes: </p>
  <p class="img-data-fetched">${likes}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Views: </p>
  <p class="img-data-fetched">${views}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Comments: </p>
  <p class="img-data-fetched">${comments}</p>
  </li>
  <li class="img-data-element">
  <p class="img-data-fetched">Downloads: </p>
  <p class="img-data-fetched">${downloads}</p>
  </li>
  </ul>
  </div>
  </li>`;
}

export function createListMarkup(liArray) {
  return liArray.map(createMarkup).join('');
}
