"use strict";

class Burger {
    constructor() {
        this.size = this.checkSize();
        this.extra = this.checkExtra();
        this.souse = this.checkSouse();
        this.price = this.countPrice();
        this.calories = this.countCalories();
        this.displayInfo();
    }

    checkSize() {
        let sizes = [
            { size: "big", price: 100, calories: 40 },
            { ingredient: "small", price: 50, calories: 20 }
        ];

        let big = document.querySelector("#size_1");
        let small = document.querySelector("#size_2");

        if (big.checked) {
            return sizes[0];
        }
        if (small.checked) {
            return sizes[1];
        }
    }

    checkExtra() {
        let extras = [
            { extra: "salad", price: 20, calories: 5 },
            { extra: "cheese", price: 10, calories: 20 },
            { extra: "potato", price: 15, calories: 10 }
        ];

        let salad = document.querySelector("#extra_1");
        let cheese = document.querySelector("#extra_2");
        let potato = document.querySelector("#extra_3");

        if (salad.checked) {
            return extras[0];
        }
        if (cheese.checked) {
            return extras[1];
        }
        if (potato.checked) {
            return extras[2];
        }
    }

    checkSouse() {
        let souses = [
            { souse: "grass", price: 15, calories: 0 },
            { souse: "mayou", price: 20, calories: 5 }
        ];

        let sosue = [];

        let grass = document.querySelector("#souse_1");
        let mayou = document.querySelector("#souse_2");

        if (grass.checked) {
            sosue.push(souses[0]);
        }
        if (mayou.checked) {
            sosue.push(souses[1]);
        }

        return sosue;
    }

    countPrice() {
        let sousePrice = 0;
        this.souse.forEach(element => {
            sousePrice += element.price;
        });
        return this.size.price + this.extra.price + sousePrice;
    }

    countCalories() {
        let sosuseCalories = 0;
        this.souse.forEach(element => {
            sosuseCalories += element.calories;
        });
        return this.size.calories + this.extra.calories + sosuseCalories;
    }

    displayInfo() {
        let infoBlocks = document.querySelectorAll(".hidden");
        let priceBlock = document.querySelector(".totalPrice");
        let caloriesBlock = document.querySelector(".totalCalories");

        priceBlock.innerText =this.price;
        caloriesBlock.innerText = this.calories;
        infoBlocks.forEach(element => {
            element.classList.remove("hidden");
        });
    }
}

let burger = {};
document.querySelector(".button").addEventListener('click', () => {
    burger = new Burger;
});
