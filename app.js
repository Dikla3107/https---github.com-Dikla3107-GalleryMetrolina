import {
    photos
} from './photos.js';

function searchPhoto() {
    const searchField = document.getElementById('searchArea');
    const searchTerm = searchField.value.trim(); 

    const searchResult = photos.filter(prod => {
        return prod.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayPhotos(searchResult);
}

const searchButton = document.getElementById(`searchBtn`);
searchButton.addEventListener('click', searchPhoto);


function getTotalPhotos() {
    const total = document.getElementById('total-photos');
    total.innerHTML = photos.length;
}

/* show the photos on page */
function displayPhotos(photoData) {
    const container = document.getElementById('photosContainer');
    let html = '';

    photoData.forEach(prod => {
        html +=
            `<div class="card" style="width: 18rem;">
                <img src="${prod.getImage()}"
                    class="card-img-top" alt="${prod.getDescription()}">
                <div class="card-body">
                    <h5 class="card-title">${prod.getName()}</h5>
                    <p class="card-text">
                        ${prod.getPrice()}
                    </p>
                    <a href="#" class="btn btn-info">Add to Cart</a>
                </div>
            </div>`;
    })

    container.innerHTML = html;
    getTotalPhotos();
}

displayPhotos(photos);