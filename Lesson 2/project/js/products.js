"use strict";

class ProductList {
    constructor (container=`.products`){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts(){
        this.goods = [
        {id:1, name: 'Macbook Pro 16"', price: 254980, img: "img/content/mbPro16.png"},
        {id:2, name: 'Macbook Pro 14"', price: 204980, img: "img/content/mbPro14.png"},
        {id:3, name: 'Macbook Air 13"', price: 115980, img: "img/content/mbAir13.png"},
        {id:4, name: 'Imac 27"', price: 324990, img: "img/content/imac27.jpeg"},
        {id:5, name: 'Mac Studio', price: 204990, img: "img/content/macStudio.jpg"},
        {id:5, name: 'Mac mini', price: 92990, img: "img/content/macMini.jpg"}
    ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    countTotal() {
        let totalAmount = 0;
        for(let product of this.goods) {
            totalAmount += product.price;
        }
        console.log(` Общая сумма доступных товаров ${totalAmount} рублей.`);
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `<div class="product">
        <span class="product-name">${this.name}</span>
        <img class="product-img" src="${this.img}" height="300" width="335"></img>
        <span class="product-price">${this.price} руб.</span>
        <button class="buyBtn">Купить</button>
    </div>`
    }
}

const productList = new ProductList();