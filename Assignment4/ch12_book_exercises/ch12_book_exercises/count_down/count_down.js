"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value; 
        
        const event = new Event(eventName, eventDateString);

        const messageLbl = getElement("#message");  

        // make sure user entered event name and date 
        if (!event.hasName || !event.hasDate) {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // make sure date is valid
        // const eventDate = new Date(eventDateString);
        if (!event.isValidDate) {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        messageLbl.textContent = event.message;
    });

    // set focus on first text box
    getElement("#event").focus();
});