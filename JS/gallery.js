const images = [
    {
        preview: 'images/img1_preview.jpg',
        original: 'images/img1.jpg',
        description: 'Футболка'
    },
    {
        preview: 'images/img2_preview.jpg',
        original: 'images/img2.jpg',
        description: 'Штани'
    },
    {
        preview: 'images/img3_preview.jpg',
        original: 'images/img3.jpg',
        description: 'Кросівки'
    },
    {
        preview: 'images/img4_preview.png',
        original: 'images/img4.png',
        description: 'Куртка'
    },
    {
        preview: 'images/img5_preview.png',
        original: 'images/img5.png',
        description: 'Сумка'
    },
    {
        preview: 'images/img6_preview.png',
        original: 'images/img6.png',
        description: 'Шапка'
    }
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
    return `
        <li class="gallery-item">
            <a href="${original}" class="gallery-link">
                <img src="${preview}" alt="${description}" class="gallery-image">
            </a>
        </li>
    `;
}).join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const originalImageSrc = event.target.closest('a').href;

    const instance = basicLightbox.create(`
        <img src="${originalImageSrc}" alt="${event.target.alt}">
    `);

    instance.show();
});