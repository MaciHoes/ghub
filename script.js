document.addEventListener('DOMContentLoaded', () => {
    // Define your images here. Add more objects for more images.
    const images = [
        {
            id: 1,
            name: 'Maci Hoes',
            thumbnail: 'images/girl1.webp',
            full: 'images/girl1.webp',
            description: 'First girl bio'
        },
        {
            id: 2,
            name: 'Girl1 and Girl 2',
            thumbnail: 'images/girl2.webp',
            full: 'images/girl2.webp',
            description: 'Girls bio'
        },
        {
            id: 3,
            name: 'City Lights',
            thumbnail: 'images/city_thumb.jpg',
            full: 'images/city_full.jpg',
            description: 'The vibrant and sprawling lights of a bustling city at night.'
        },
        {
            id: 4,
            name: 'Ocean Sunset',
            thumbnail: 'images/ocean_thumb.jpg',
            full: 'images/ocean_full.jpg',
            description: 'A breathtaking sunset over the calm, endless ocean.'
        }
    ];

    const imageGrid = document.getElementById('image-grid');
    const fullImage = document.getElementById('full-image');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description'); // Get the new description element

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
    if (fullImage && imageTitle && imageDescription) { // Check for the description element too
        const urlParams = new URLSearchParams(window.location.search);
        const imageId = parseInt(urlParams.get('id'));

        if (imageId) {
            const selectedImage = images.find(img => img.id === imageId);
            if (selectedImage) {
                fullImage.src = selectedImage.full;
                fullImage.alt = selectedImage.name;
                imageTitle.textContent = selectedImage.name;
                imageDescription.textContent = selectedImage.description; // Set the description
            } else {
                imageTitle.textContent = 'Image Not Found';
                imageDescription.textContent = 'The requested image could not be found.'; // Default description
                fullImage.src = ''; // Clear image source
            }
        } else {
            imageTitle.textContent = 'No Image Selected';
            imageDescription.textContent = 'Please select an image from the gallery.'; // Default description
            fullImage.src = ''; // Clear image source
        }
    }
});