const $ = selector => document.querySelector(selector);

let total = 0;

const getSelectedProduct = (productId) => {
    let name = "";
    let price = 0;

    if (productId === "espresso") {
        name = "Espresso";
        price = 1.95;
    } else if (productId === "latte") {
        name = "Latte";
        price = 2.95;
    } else if (productId === "cappuccino") {
        name = "Cappuccino";
        price = 3.45;
    } else if (productId === "coffee") {
        name = "Drip Coffee";
        price = 1.75;
    } else if (productId === "biscotti") {
        name = "Biscotti";
        price = 1.95;
    } else if (productId === "scone") {
        name = "Scone";
        price = 2.95;
    }

    return { name, price };
};

document.addEventListener("DOMContentLoaded", () => {
    const menuList = $("#menu-list");
    const orderList = $("#order");
    const totalDisplay = $("#total");

    const images = menuList.querySelectorAll("img");

    for (let image of images) {
        const productId = image.alt;

        image.addEventListener("mouseover", () => {
            image.src = image.id;
        });

        image.addEventListener("mouseout", () => {
            image.src = "images/" + productId + ".jpg";
        });

        image.addEventListener("click", () => {
            const product = getSelectedProduct(productId);

            if (product.name !== "") {
                const option = document.createElement("option");
                option.text = "$" + product.price + " - " + product.name;
                orderList.appendChild(option);

                total += product.price;
                totalDisplay.textContent = "Total: " + "$" + total.toFixed(2);
            }
        });
    }

    $("#place_order").addEventListener("click", () => {
        $("#order_form").submit();
    });

    $("#clear_order").addEventListener("click", () => {
        orderList.innerHTML = "";
        total = 0;
        totalDisplay.textContent = "";
    });
});