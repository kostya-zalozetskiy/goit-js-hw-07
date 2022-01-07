import { galleryItems } from './gallery-items.js';
// Change code below this line
const createImageList = document.querySelector('.gallary');

// const createGalleryMurkupList = createGalleryMurkup(galleryItems);
console.log(createGalleryMurkup);

const createGalleryMurkup = galleryItems.map(({ original, preview, description }) => {
        return
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
        `;
    }).join('')



//  <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>

// console.log(galleryItems);
