/* adding MAAM */
function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }
    const vat = 1.17;
    const total = (price * vat).toFixed(2);
    return total;
}



/* creating the class for each photo */
class Photo {
    constructor(photoPrice, photoName, photoImage, photoDescription) {
        this.price = photoPrice;
        this.name = photoName;
        this.image = photoImage;
        this.description = photoDescription;
        this.id = this.generateId();
    }

    generateId() {
        const time = new Date().getTime();
        return Math.floor(Math.random() * time);
    }
    getPrice() {
        const totalPrice = addTax(this.price);
        return `$${totalPrice}`;
    }

    getName() {
        return this.name;
    }

    getImage() {
        const IMG_PATH = 'https://picsum.photos//';
        return `${IMG_PATH}${this.image}`;
    }

    getDescription() {
        return this.description;
    }

    getId() {
        return this.id;
    }
}

/* Array of each products - all details detailed */
const photos = [
    new Photo(
        1900,
        'Best Of',
        '/200',
        'great product really!'
    ),
    new Photo(
        56732,
        'Show me The Money',
        '/400',
        'be careful - very cold'
    ),
    new Photo(
        55997,
        'PIMP',
        '/300',
        '',
    ),
    new Photo(
        3107,
        'DIK',
        '/800',
        '',
    ),
];

export {
    photos
};