"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";



let choice = prompt(`${menuString}`);

while (choice != "exit") {
    if (choice == "list") {
        let output = "";
        for (let i = 0; i < contacts.length; i++) {
            let number_name = contacts[i].split("|");
            output +=  number_name[0] + " - " + number_name[1] + "\n"
        }
        alert (output)
    } else if (choice.startsWith("get ")) {
        let parts = choice.split(" ");
        let number = parts[1];

        for (let i = 0; i < contacts.length; i++) {
            let contact = contacts[i].split("|");
            if (contact[0] == number) {
                alert(`Contact info for ${contact[1]}` + 
                      `\nEmail: ${contact[2]}` +
                      `\nPhone: ${contact[3]}`);
            } 
        }

        if (number > contacts.length) {
            alert("NO")
        }
    } else {
        alert("Invalid Command")
    }

    choice = prompt(`${menuString}`);
}
