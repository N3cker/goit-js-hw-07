import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWrapper = document.querySelector('.gallery');


const imageCreate = (src, data, alt) => {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');

    div.classList.add('gallery__item');

    a.classList.add('gallery__link');
    a.href = data;

    img.classList.add('gallery__image');
    img.src = src;
    img.setAttribute('data-source', data);
    img.alt = alt;
    a.appendChild(img);
    div.appendChild(a);
    return div;
}

const addImagesToGallery = () => {
    galleryItems.forEach(item => {
        const img = imageCreate(item.preview, item.original, item.description);
        galleryWrapper.appendChild(img);
    })
}

addImagesToGallery();

galleryWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') return;
    const instance = basicLightbox.create(`<img src="${event.target.getAttribute('data-source')}" width="800" height="600">`)
    instance.show();
})
