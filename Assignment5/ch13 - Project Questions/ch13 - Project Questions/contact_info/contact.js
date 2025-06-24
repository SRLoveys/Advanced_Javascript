"use strict";

import Contact from "lib_contact";
import Dob from "lib_dob";

const getElement = selector => document.querySelector(selector);

const padNum = num => num.toString().padStart(2, "0");

const clearContact = () => {
    sessionStorage.removeItem("contact");
};
const saveContact = (contact) => {
    sessionStorage.contact = JSON.stringify(contact);
};
const displayContact = () => {
    const contactData = JSON.parse(sessionStorage.contact ?? null);
    if (contactData) {
        const contact = new Contact(
            contactData.name,
            contactData.email,
            contactData.phone,
            contactData.zip,
            new Dob(contactData.dob)
        );

        getElement("#name").value = contact.name;
        getElement("#email").value = contact.email;
        getElement("#phone").value = contact.phone;
        getElement("#zip").value = contact.zip;
        
        // Format and display DOB
        const dob = contact.dob.toStringFormatted();
        getElement("#dob").value = dob;
    }
};
const displayConfirmPage = () => {
    const contactData = JSON.parse(sessionStorage.contact ?? null);
    if (contactData) {
        const contact = new Contact(
            contactData.name,
            contactData.email,
            contactData.phone,
            contactData.zip,
            new Dob(contactData.dob)
        );

        getElement("#lbl_name").textContent = contact.name;
        getElement("#lbl_email").textContent = contact.email;
        getElement("#lbl_phone").textContent = contact.phone;
        getElement("#lbl_zip").textContent = contact.zip;
        getElement("#lbl_dob").textContent = contact.dob.toStringFormatted();
    }
};

const clearMessages = () => {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        const span = input.nextElementSibling;
        if (span) span.textContent = "";
    }
    inputs[0].focus();
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form) {  // index.html
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

        // display data from web storage in contact form
        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();  

            // validate user has entered an email or a phone number
            const email = getElement("#email");
            const phone = getElement("#phone");

            let msg = (email.value == "" && phone.value == "") ? "Please enter an email or phone." : "";
            email.setCustomValidity(msg);

            // validate dob 
            const dob = getElement("#dob"); 
            const dobValue = new Date(dob.value + "T00:00:00");   // add time to correct UTC/local time issue
            if (dobValue.toString() == "Invalid Date") {
                msg = "Please enter a valid DOB."
            } else {
                let today = new Date();
                today = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // sets time to 00:00:00
                msg = (today <= dobValue) ? "DOB must be in the past." : "";
            }
            dob.setCustomValidity(msg);

            // validate form
            if(!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                // save contact info to web storage
                saveContact({
                name: getElement("#name").value,
                email: email.value,
                phone: phone.value,
                zip: getElement("#zip").value,
                dob: dobValue
            });
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    } else {     // confirm.html
        // display data from web storage in confirm page labels
        displayConfirmPage();
    }
}); 