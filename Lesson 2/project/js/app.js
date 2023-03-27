// "use strict";

// /* Массив с объектами-товарами */
// const products = [
//     {id:1, name: 'Macbook Pro 16"', price: 254980, img: "img/content/mbPro16.png"},
//     {id:2, name: 'Macbook Pro 14"', price: 204980, img: "img/content/mbPro14.png"},
//     {id:3, name: 'Macbook Air 13"', price: 115980, img: "img/content/mbAir13.png"},
//     {id:4, name: 'Imac 27"', price: 324990, img: "img/content/imac27.jpeg"},
//     {id:5, name: 'Mac Studio', price: 204990, img: "img/content/macStudio.jpg"},
//     {id:5, name: 'Mac mini', price: 92990, img: "img/content/macMini.jpg"}
// ]

// /**
//  * Функция принимает объект-продукт и создает из его свойств HTML разметку
//  * @param {object} Объект-продукт 
//  * @returns {string} HTML разметка со свойствами объекта
//  */
// const renderProduct = product => {
//     return `<div class="product">
//         <span class="product-name">${product.name}</span>
//         <img class="product-img" src="${product.img}" height="300" width="335"></img>
//         <span class="product-price">${product.price} руб.</span>
//         <button class="buyBtn">Купить</button>
//     </div>`
// }


// /**
//  * Функция принимает массив продуктов-объектов и вставляет созданную на его основе разметку в HTML
//  * @param {array} products 
//  */
// const insertProducts = products => {
//     let productsHTML = products.map(product => renderProduct(product));
//     productsHTML = productsHTML.join(" ");
//     document.querySelector(".products").innerHTML = productsHTML;
// }

// insertProducts(products);

