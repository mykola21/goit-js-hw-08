// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector('ul.gallery');

function createElemListImg (items) {
    return galleryItems
    .map(({ preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href= "${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join('');
}
galleryList.insertAdjacentHTML('beforeend', createElemListImg(galleryItems));
//

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'top', captionDelay: 250
  });
