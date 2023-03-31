// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryCard(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `;
    })
    .join('');
}

const cardsMarkup = createGalleryCard(galleryItems);
gallery.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a', {
  captionSelector: '.gallery__image',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
