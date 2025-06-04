"use strict";
const getElement = selector => document.querySelector(selector);

const clearMessages = form => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        if (span) span.textContent = "*";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    // turn off default HTML validation messages
    form.noValidate = true;
    
    // attach invalid event handler for form controls
    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const elem = evt.currentTarget;
            const msg = elem.title ? elem.title : elem.validationMessage;

            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        });
    }

     form.addEventListener("submit", evt => {
        clearMessages(form);

        const email = getElement("#email");

        email.setCustomValidity("");

        if (email.value == "" && phone.value == "") {
            const msg = "Please enter an email or phone (nnn-nnn-nnnn format).";
            email.setCustomValidity(msg);
        } else if(email.value == "" && phone.value.length < 12) {
            const msg = "Please enter an email or phone (nnn-nnn-nnnn format).";
            email.setCustomValidity(msg);
        }

        // do custom age validation
        const dobElement = getElement("#dob");
        const dob = new Date(dobElement.value + "T00:00:00");

        const today = new Date();
        
        const msg = (dob > today) ? dobElement.title: "";
        dobElement.setCustomValidity(msg);
        
        // validate form 
        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    });

})