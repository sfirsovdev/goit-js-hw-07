import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = cardsGalleryMarkup(galleryItems);


galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function cardsGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            title = "${description}"
            captionDelay = 250ms>
            </a>
            </div>`;
        })
        .join('');
}
const galleryClickEl = new SimpleLightbox('.gallery__item a');
galleryClickEl.on('show.simplelightbox', function () {

});



//galleryContainer.addEventListener('click', galleryClickEl)

// function galleryClickEl() {
//     return new simpleLightbox('.gallery__item a')
// galleryClickEl.next()
// }