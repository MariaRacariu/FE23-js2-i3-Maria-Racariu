import { getData } from "./modules/getData.ts";

getData("display");

const searchButton = document.querySelector("#searchButton")?.addEventListener("click", (event) => {
    event.preventDefault();
    getData("search");
});