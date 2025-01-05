// play.js
function getSpanEstimate(size) {
    return size > 250 ? 2 : 1;
}

function addImageToGrid(image) {
    const container = document.getElementById('gridContainer');
    const imgElement = document.createElement('img');
    const gridColumnEnd = `span ${getSpanEstimate(image.width)}`;
    const gridRowEnd = `span ${getSpanEstimate(image.height)}`;

    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.style.gridColumnEnd = gridColumnEnd;
    imgElement.style.gridRowEnd = gridRowEnd;

    container.appendChild(imgElement);
}

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { url: 'img/jpm.jpeg', alt: 'Description of image 1', width: 300, height: 300 },
        { url: 'img/gwi.png', alt: 'Description of image 2', width: 1914, height: 1144 }
    ];

    images.forEach(image => {
        addImageToGrid(image);
    });
});
