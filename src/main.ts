import { Product } from "./modules/Product.ts";

// readonly images: string,
// readonly title: string,
// readonly description: string,
// readonly rating: number,
// readonly stock: number,
// readonly category: string,
// button

// const product: Product = new Product("yes", "My Product", "Yes", 5, 67, "My product");
// console.log(product);
async function getProducts(): Promise<Product[]> {
    const url = 'https://dummyjson.com/products';

    const res = await fetch(url);
    const products = await res.json();
    console.log(products);

    return products as Product[];
}

function displayProducts(products: Product[]): void {
    const container = document.querySelector('#commentsContainer') as HTMLDivElement;

    // products.forEach(product => {

    // })

    for (const product in products) {
        createProduct(product, container);
    }
}

function createProduct({ images, title, description, rating, stock, category, button }: Product, container: HTMLDivElement): void {
    const card = document.createElement('div');
    const imagesEl = document.createElement('p');
    const titleEl = document.createElement('h1');
    const descriptionEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const stockEl = document.createElement('p');
    const categoryEl = document.createElement('p');

    imagesEl.innerText = images;
    titleEl.innerText = title;
    descriptionEl.innerText = description;
    ratingEl.innerHTML = rating;
    stockEl.innerText = stock;
    categoryEl.innerText = category;

    card.append(imagesEl, titleEl, descriptionEl, ratingEl, stockEl, categoryEl);
    container.append(card);
}

getProducts().then(displayProducts)