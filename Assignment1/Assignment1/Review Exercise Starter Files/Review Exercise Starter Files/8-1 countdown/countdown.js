"use strict";

const getElement = selector => document.querySelector(selector);

let timerId = null;

document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  

        if (timerId !== null) {
            clearInterval(timerId);
        }

        // make sure user entered event and date 
        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // convert event date string to Date object and check for validity
        const eventDate = new Date(eventDateString);
        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // calculate days
        const today = new Date();
        const msFromToday = eventDate.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        const daysToDate = Math.ceil( msFromToday / msForOneDay );

        const countdown = () => {
            const today = new Date();
            let secondsToDate = Math.floor((eventDate.getTime() - today.getTime()) / 1000);

            // create and display message 
            const displayDate = eventDate.toDateString();
            let msg = "";

            if (secondsToDate == 0) {
                msg = `Hooray! Today is ${eventName}! (${displayDate})`;
                clearInterval(timerId);
            } else if (secondsToDate > 0) {
                const days = Math.floor(secondsToDate / 86400);
                secondsToDate %= 86400;
                const hours = Math.floor(secondsToDate / 3600);
                secondsToDate %= 3600;
                const minutes = Math.floor(secondsToDate / 60);
                secondsToDate %= 60;
                const seconds = secondsToDate;

                msg = `${days} day(s), ${hours} hour(s), ${minutes} minute(s), ${seconds} second(s) until ${eventName}! (${displayDate})`;
            } else if (daysToDate < 0) {
                msg = `${eventName} happened ${Math.abs(daysToDate)} 
                    day(s) ago. (${displayDate})`;
            }
            messageLbl.textContent = msg;
            };

            countdown();
            timerId = setInterval(countdown, 1000)
    });

    // set focus on first text box
    getElement("#event").focus();
});