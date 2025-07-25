document.addEventListener('DOMContentLoaded', () => {
    // Define your images here. Add more objects for more images.
    const images = [
        { id: 1, name: 'Mountain View', thumbnail: 'images/mountain_thumb.jpg', full: 'images/mountain_full.jpg' },
        { id: 2, name: 'Forest Path', thumbnail: 'images/forest_thumb.jpg', full: 'images/forest_full.jpg' },
        { id: 3, name: 'City Lights', thumbnail: 'images/city_thumb.jpg', full: 'images/city_full.jpg' },
        { id: 4, name: 'Ocean Sunset', thumbnail: 'images/ocean_thumb.jpg', full: 'images/ocean_full.jpg' }
    ];

    const imageGrid = document.getElementById('image-grid');
    const fullImage = document.getElementById('full-image');
    const imageTitle = document.getElementById('image-title');

    // --- Logic for index.html ---
    if (imageGrid) {
        images.forEach(image => {
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');

            imageItem.innerHTML = `
                <img src="${image.thumbnail}" alt="${image.name}">
                <div class="image-details">
                    <h2>${image.name}</h2>
                    <a href="view.html?id=${image.id}" class="view-button">View</a>
                </div>
            `;
            imageGrid.appendChild(imageItem);
        });
    }

    // --- Logic for view.html ---
    if (fullImage && imageTitle) {
        const urlParams = new URLSearchParams(window.location.search);
        const imageId = parseInt(urlParams.get('id'));

        if (imageId) {
            const selectedImage = images.find(img => img.id === imageId);
            if (selectedImage) {
                fullImage.src = selectedImage.full;
                fullImage.alt = selectedImage.name;
                imageTitle.textContent = selectedImage.name;
            } else {
                imageTitle.textContent = 'Image Not Found';
                fullImage.src = ''; // Clear image source
            }
        } else {
            imageTitle.textContent = 'No Image Selected';
            fullImage.src = ''; // Clear image source
        }
    }
});