document.addEventListener("DOMContentLoaded", function() {
    function adjustImages() {
        const imageGrid = document.querySelector('#index-image-grid');
        if (!imageGrid) return;  // Exit if the element doesn't exist

        const images = Array.from(imageGrid.querySelectorAll('img'));
        const gridWidth = imageGrid.clientWidth;
        const maxImageWidth = 400;
        const columnCount = Math.floor(gridWidth / maxImageWidth);
        const rowCount = columnCount > 0 ? Math.floor(images.length / columnCount) : 0;
        const imagesToShow = rowCount * columnCount;

        images.forEach((img, index) => {
            img.style.display = (index < imagesToShow) ? 'block' : 'none';
        });

        // Set the grid-template-columns based on the column count
        imageGrid.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
    }

    window.addEventListener('resize', adjustImages);
    adjustImages();
});
