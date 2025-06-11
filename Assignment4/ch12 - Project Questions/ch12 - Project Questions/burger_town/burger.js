"use strict";
const getElement = selector => document.querySelector(selector);

class Burger {
    constructor(type, size, toppings = []) {
        this.type = type;
        this.size = size;
        this.toppings = toppings;
        this.price = 0;
    }

    setType() {
        if (getElement("#burger_regular").checked) {
            this.type = getElement("#burger_regular").value;
        } else if (getElement("#burger_cheese").checked) {
            this.type = getElement("#burger_cheese").value;
        }

        if (!this.type && (getElement("#burger_single").checked || getElement("#burger_double").checked)) {
            this.type = "Regular";
        }
    }

    setSize() {
        if (getElement("#burger_single").checked) {
            this.size = getElement("#burger_single").value;
        } else if (getElement("#burger_double").checked) {
            this.size = getElement("#burger_double").value;
        }

        if (!this.size && (getElement("#burger_regular").checked || getElement("#burger_cheese").checked)) {
            this.size = "Single";
        }
    }

    setPrice() {
        if (this.type === "cheese" && this.size === "double") {
            this.price = 8.0;
        }
        else if (this.type === "cheese" && this.size === "single") {
            this.price = 6.0;
        }
        else if (this.type === "regular" && this.size === "double") {
            this.price = 7.0;
        } else {
            this.price = 5.0;
        }
    }


    setToppings() {
        this.toppings = [];
        if (getElement("#tomatoes").checked) this.toppings.push(getElement("#tomatoes").value);
        if (getElement("#lettuce").checked) this.toppings.push(getElement("#lettuce").value);
        if (getElement("#pickles").checked) this.toppings.push(getElement("#pickles").value);
        if (getElement("#onions").checked) this.toppings.push(getElement("#onions").value);
        if (getElement("#mustard").checked) this.toppings.push(getElement("#mustard").value);
        if (getElement("#ketchup").checked) this.toppings.push(getElement("#ketchup").value);
    }
    
}

class Drink {
    constructor(type, size) {
        this.type = type;
        this.size = size;
        this.price = 0;
    }

    setType() {
        if (getElement("#water").checked) {
            this.type = getElement("#water").value;
        } else if (getElement("#tea").checked) {
            this.type = getElement("#tea").value;
        } else if (getElement("#soda").checked) {
            this.type = getElement("#soda").value;
        } else {
            this.type = "Water";
        }
    }

     setSize() {
        if (getElement("#drink_small").checked) {
            this.size = getElement("#drink_small").value;
        } else if (getElement("#drink_medium").checked) {
            this.size = getElement("#drink_medium").value;
        } else if (getElement("#drink_large").checked) {
            this.size = getElement("#drink_large").value;
        } else {
            this.size = "Small";
        }
    }

    setPrice() {
    if (this.type === "soda") {
        if (this.size === "small") {
            this.price = 2.75;
        }
        else if (this.size === "medium") {
            this.price = 3.25;
        }
        else if (this.size === "large") {
            this.price = 3.75;
        }
    } else if (this.type === "tea") {
        this.price = 1.75;
    } else {
        this.price = 0.00;
    }
}


}

class Fries {
    constructor(type, size) {
        this.type = type;
        this.size = size;
        this.price = 0;
    }

    setType() {
        if (getElement("#fry_regular").checked) {
            this.type = getElement("#fry_regular").value;
        } else if (getElement("#fry_curly").checked) {
            this.type = getElement("#fry_curly").value;
        } else {
            this.type = "Regular"; 
        }
    }

    setSize() {
        if (getElement("#fry_small").checked) {
            this.size = getElement("#fry_small").value;
        } else if (getElement("#fry_medium").checked) {
            this.size = getElement("#fry_medium").value;
        } else if (getElement("#fry_large").checked) {
            this.size = getElement("#fry_large").value;
        } else {
            this.size = "Small"; 
        }
    }

    setPrice() {
    if (this.type === "regular") {
        if (this.size === "small") {
            this.price = 2.5;
        }
        else if (this.size === "medium") {
            this.price = 3.0;
        }
        else if (this.size === "large") {
            this.price = 3.5;
        }
    } else if (this.type === "curly") {
        if (this.size === "small") {
            this.price = 3.0;
        }
        else if (this.size === "medium") {
            this.price = 3.5;
        }
        else if (this.size === "large") {
            this.price = 3.75;
        }
    }
}

}

class Order {
    constructor() {
        this.burgers = [];
        this.drinks = [];
        this.fries = [];
    }

    addBurger(burger) {
        this.burgers.push(burger);
    }

    addDrink(drink) {
        this.drinks.push(drink);
    }

    addFries(fry) {
        this.fries.push(fry); 
    }

    getTotal() {
        let total = 0;

        this.burgers.forEach(burger => {
            total += burger.price;
        });

        this.drinks.forEach(drink => {
            total += drink.price;
        });

        this.fries.forEach(fry => {
            total += fry.price;
        });

        return total;
    }
    
    toString() {
         let result = "";

        this.burgers.forEach((burger) => {
            result += `<strong>${burger.size} ${burger.type}burger - $${burger.price.toFixed(2)}</strong><br>`;
            if (burger.toppings.length > 0) {
                result += `<br>•${burger.toppings.join("<br>•")}<br>`;
            }
            result += "<br>";
        });

        this.drinks.forEach((drink) => {
            result += `<strong><br>${drink.size} ${drink.type} - $${drink.price.toFixed(2)}</strong><br>`;
        });

        this.fries.forEach((fry) => {
            result += `<strong><br>${fry.size} ${fry.type}fries - $${fry.price.toFixed(2)}</strong><br>`;
        });

        result += `<br><strong>Total: $${this.getTotal().toFixed(2)}</strong><br>`;

        return result;
    }


}

document.addEventListener("DOMContentLoaded", () => {
    const order = new Order();

    getElement("#add_order").addEventListener("click", () => {
        
        let burger = new Burger();
        let drink = new Drink();
        let fries = new Fries();

        burger.setType();
        burger.setSize();
        burger.setToppings();
        if (!burger.type && !burger.size && burger.toppings.length > 0) {
            burger = null;
        }

        if (burger) {
           burger.setPrice();
           order.addBurger(burger);
}

        drink.setType();
        drink.setSize();
        drink.setPrice();

        order.addDrink(drink);
        
        fries.setType();
        fries.setSize();
        fries.setPrice();

        order.addFries(fries);

        getElement("#order_details").innerHTML = order.toString();

    }); 

    getElement("#clear_order").addEventListener("click", () => {
        order.burgers = [];
        order.drinks = [];
        order.fries = [];
        getElement("#order_details").textContent = "";
    });
    
}); 