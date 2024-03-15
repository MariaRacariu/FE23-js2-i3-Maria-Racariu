import { displayProducts } from "./displayProducts.ts";
import { displaySearchResults } from "./displaySearchResults.ts";

export function getData(type) {
    if (type === "display") {
        async function getProducts() {
            const url = 'https://dummyjson.com/products';

            const res = await fetch(url);
            const productsResponse = await res.json();
            const products = productsResponse.products;
            displayProducts(products);
        }
        getProducts();
    } else if (type === "search") {
        async function getSearchResults() {
            const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
            const inputValue = searchInput.value;

            const url = `https://dummyjson.com/products/search?q=${inputValue}`;

            const res = await fetch(url);
            const searchResponse = await res.json();
            const searchResult = searchResponse.products;
            displaySearchResults(searchResult);
        }
        getSearchResults();
    }
}
