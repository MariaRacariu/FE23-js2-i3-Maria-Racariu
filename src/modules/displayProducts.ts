import { Product } from "./Product.ts";

export function displayProducts(products): void {
    const container = document.querySelector('#productsContainer') as HTMLDivElement;
    products.forEach(item => {
        const productTest = new Product(item.images, item.title, item.description, item.rating, item.stock, item.category);
        console.log(productTest);

        const card = document.createElement('div');
        card.className = "productCard";

        const imagesEl = document.createElement('img');
        const titleEl = document.createElement('h1');
        const descriptionEl = document.createElement('p');
        const ratingEl = document.createElement('p');
        const stockEl = document.createElement('p');
        const categoryEl = document.createElement('p');
        const buttonEl = document.createElement('button');

        imagesEl.src = item.images[0];
        titleEl.innerText = item.title;
        descriptionEl.innerText = item.description;
        ratingEl.innerHTML = item.rating;
        stockEl.innerText = item.stock;
        categoryEl.innerText = item.category;
        buttonEl.innerText = "Add to cart";

        card.append(imagesEl, titleEl, descriptionEl, ratingEl, stockEl, categoryEl, buttonEl);
        container.append(card);
    });

}