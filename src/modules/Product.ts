export class Product {
    constructor(
        readonly images: string,
        readonly title: string,
        readonly description: string,
        readonly rating: number,
        readonly stock: number,
        readonly category: string,
    ) {
        this.images = images;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.stock = stock;
        this.category = category;
        this.createButton();
    }

    public createButton() {
        // console.log("Hello")
        // const button = document.createElement("button");
        // card.append(button);
    }
}