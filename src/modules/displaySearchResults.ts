export function displaySearchResults(results: string[] | number[]) {
    const searchResultContainer = document.querySelector('#searchResultContainer') as HTMLDivElement;
    searchResultContainer.innerHTML = "";

    const cleanButton = document.querySelector('#cleanButton') as HTMLDivElement;
    const closeButtonEl = document.createElement('button');
    closeButtonEl.innerText = "Close X";
    cleanButton.append(closeButtonEl);
    closeButtonEl.addEventListener("click", () => {
        searchResultContainer.innerHTML = "";
        cleanButton.innerHTML = "";
    });

    console.log(results);
    results.forEach(item => {
        // console.log(item);
        // console.log(item.title);

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
        searchResultContainer.append(card);
    })
}