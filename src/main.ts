import { getData } from "./modules/getData.ts";

getData("display");

const searchButton = document.querySelector("#searchButton")?.addEventListener("click", () => {
    getData("search");
});