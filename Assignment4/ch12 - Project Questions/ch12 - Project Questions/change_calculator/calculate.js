"use strict";

const clearForm = () => {
    document.querySelector("#cents").value = "";
    document.querySelector("#quarters").value = "";
    document.querySelector("#dimes").value = "";
    document.querySelector("#nickels").value = "";
    document.querySelector("#pennies").value = "";
    document.querySelector("#cents").focus();
};

const calculateChange = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,

    isValidCents: function(cents) {
        return !isNaN(cents) && cents >= 0 && cents <= 99;
    },

    calculateChange: function(cents) {
        if (!this.isValidCents(cents)) {
            alert("Please enter a valid number between 0 and 99");
            document.querySelector("#cents").select();
            return;
        }

        this.quarters = Math.floor(cents / 25);
        cents %= 25;

        this.dimes = Math.floor(cents / 10);
        cents %= 10;

        this.nickels = Math.floor(cents / 5);
        cents %= 5;

        this.pennies = cents;

        document.querySelector("#quarters").value = this.quarters;
        document.querySelector("#dimes").value = this.dimes;
        document.querySelector("#nickels").value = this.nickels;
        document.querySelector("#pennies").value = this.pennies;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#calculate").addEventListener("click", () => {
        const cents = parseInt(document.querySelector("#cents").value);
        calculateChange.calculateChange(cents);
    });  
    document.querySelector("#clear").addEventListener("click", clearForm);     
    document.querySelector("#cents").focus();     
});