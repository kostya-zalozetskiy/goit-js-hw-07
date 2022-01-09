import { galleryItems } from './gallery-items.js';
// Change code below this line
const createImageList = document.querySelector('.gallery');

// const createGalleryMurkupList = createGalleryMurkup(galleryItems);


const createGalleryMurkup = galleryItems.map(({ original, preview, description }) => 
        
    `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
           />
         </a>
         </div>
        `
).join('');

// console.log(createGalleryMurkup);
createImageList.insertAdjacentHTML('afterbegin', createGalleryMurkup);

createImageList.addEventListener('click', onClickImage)

function onClickImage(e) {
    e.preventDefault()
    
    if (e.currentTarget === e.target) {
        return
    }
    const selectedImage = e.target.dataset.source;
    const altImgModal = e.target.alt
    console.log(selectedImage, altImgModal)

    const instance = basicLightbox.create(`
    <div class="modal">
        <img
            src ='${selectedImage}'
            alt= '${altImgModal}'
           />
    </div>
`)

instance.show()
window.addEventListener('keydown', closeModal);

    function closeModal(e) {
        if (e.code === "Escape"){
            instance.close()
        }
    }
}
