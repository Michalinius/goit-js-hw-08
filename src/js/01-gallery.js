import { galleryItems } from './gallery-items.js';
// Change code below this line

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector("div.gallery");

const siteContent = galleryItems.map((item) =>
`<a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`)
.join("");

console.log(siteContent);

gallery.innerHTML = siteContent;


gallery.addEventListener("click",(event) =>
{
    event.preventDefault();
const lightbox = new SimpleLightbox('.gallery a', {captionDelay:250});

})
