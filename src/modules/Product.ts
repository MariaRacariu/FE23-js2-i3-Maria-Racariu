export class Product {
    constructor(
        readonly images: string,
        readonly title: string,
        readonly description: string,
        readonly rating: string,
        readonly stock: string,
        readonly category: string,
    ) {
        this.images = images;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.stock = stock;
        this.category = category;
    }
}