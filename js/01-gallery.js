import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = cardsGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)
galleryContainer.addEventListener('click', onContainerClick)

function cardsGalleryMarkup(galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {
    return `
    <div class="gallery">
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    </div>`;
})
    .join('');
}

function onContainerClick(evt) {
const isImageEl = evt.target.classList.contains('gallery__image');
if (!isImageEl) {
    return;
}
evt.preventDefault();

const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}"/>`,
    {
    onShow: (instance) => { 
        window.addEventListener('keydown', onCloseClick);
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', onCloseClick);
    }
    })

instance.show();

function onCloseClick(evt) {
    if (evt.code === 'Escape') {
    instance.close()
    }
    }
}





