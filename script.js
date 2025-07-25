document.addEventListener('DOMContentLoaded', () => {
    // Define your images here. Make sure to ADD A 'CATEGORY' PROPERTY to each image!
    const images = [
        {
            id: 1,
            name: 'Maci Hoes',
            thumbnail: 'images/girl1.webp',
            full: 'images/girl1.webp',
            description: 'First girl bio',
            category: 'main-girls' // <-- ADD THIS CATEGORY
        },
        {
            id: 2,
            name: 'Girl1 and Girl 2',
            thumbnail: 'images/girl2.webp',
            full: 'images/girl2.webp',
            description: 'Girls bio',
            category: 'main-girls' // <-- ADD THIS CATEGORY
        },
        {
            id: 3,
            name: 'Allison',
            thumbnail: 'images/girl3.webp',
            full: 'images/girl3.webp',
            description: 'Allison is in the eighth grade and became a John Adams Academy scholar in the 2019-2020 school year. “In my year at John Adams Academy, I have learned more about scholar empowered learning than ever, and that is why it is my favorite of the Core Values. A scholar is a person who takes charge of their learning and goes the extra mile. When the world falls apart the people who understand scholar empowered learning are able to continue and organize their education. This doesn’t work for others because they expect it to be done for them.” When it comes to a classical education, Allison said, “I get to learn all about truth and make interpretations for myself. I like that every English lesson has a little bit of Latin or History in it. Since I started at John Adams Academy a year ago I feel like I finally understand the scholar mentality, and I’m very grateful that I do.” Allison’s family chose a classical education for their scholar because they believe in rational thought, and that all things should be seen through the context of history. “John Adams Academy’s Core Values help guide and shape scholars into strong servant leaders, and we look forward to our child finding her place in the world with that mindset.” Thank you for sharing your story with us.',
            category: 'main-girls' // <-- ADD THIS CATEGORY (or create a 'scholars' category if you prefer)
        },
        // <-- main-girls-cousins for adding section
        {
            id: 4,
            name: 'Girl4',
            thumbnail: 'images/girl4.webp',
            full: 'images/girl4.webp',
            description: 'Girl 4 bio',
            category: 'main-girls' // <-- ADD THIS CATEGORY
        }
        // Add more images here, each with its appropriate 'category'
    ];

    // REMOVE this line, as we are no longer targeting a single 'imageGrid'
    // const imageGrid = document.getElementById('image-grid');

    const fullImage = document.getElementById('full-image');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');

    // --- Logic for index.html ---
    // Change: Check for any .gallery-section element to know we're on index.html
    if (document.querySelector('.gallery-section')) {
        images.forEach(image => {
            // Find the specific image-grid within the correct category section
            // The ID of the section should match the image.category followed by '-section'
            const targetSectionGrid = document.querySelector(`#${image.category}-section .image-grid`);

            if (targetSectionGrid) { // Only attempt to add if the target grid exists in the HTML
                const imageItem = document.createElement('div');
                imageItem.classList.add('image-item');

                imageItem.innerHTML = `
                    <img src="${image.thumbnail}" alt="${image.name}">
                    <div class="image-details">
                        <h2>${image.name}</h2>
                        <a href="view.html?id=${image.id}" class="view-button">View</a>
                    </div>
                `;
                targetSectionGrid.appendChild(imageItem);
            } else {
                console.warn(`No target grid found for category: ${image.category}. Make sure your HTML sections have IDs like '${image.category}-section'.`);
            }
        });
    }

    // --- Logic for view.html ---
    if (fullImage && imageTitle && imageDescription) {
        const urlParams = new URLSearchParams(window.location.search);
        const imageId = parseInt(urlParams.get('id'));

        if (imageId) {
            const selectedImage = images.find(img => img.id === imageId);
            if (selectedImage) {
                fullImage.src = selectedImage.full;
                fullImage.alt = selectedImage.name;
                imageTitle.textContent = selectedImage.name;
                imageDescription.textContent = selectedImage.description;
            } else {
                imageTitle.textContent = 'Image Not Found';
                imageDescription.textContent = 'The requested image could not be found.';
                fullImage.src = '';
            }
        } else {
            imageTitle.textContent = 'No Image Selected';
            imageDescription.textContent = 'Please select an image from the gallery.';
            fullImage.src = '';
        }
    }
});