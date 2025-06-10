"use strict";

const getElement = selector => document.querySelector(selector);

let students = [];

const displayScores = scores => {   
    // filter scores
    const filterBy = parseInt(getElement("#filter").value);
    let filtered = scores.filter(score => {
        const individualScore = score[2]
        return individualScore >= filterBy;
    });

    // sort filtered scores
    const sortBy = getElement("#sort").value;
    filtered.sort((a, b) => {
        if (sortBy == "fname") {
            return a[0].localeCompare(b[0]);
        } else if (sortBy == "lname") {
            return a[1].localeCompare(b[1])
        } else {
            return b[2] - a[2];
        }
    });

    // get total of filtered scores and build display string
    let total = 0;
    let output = "";
    filtered.forEach(student => {
        const [firstName, lastName, score] = student;
        output += `${lastName}, ${firstName}: ${score}\n`;
        total += score;
    });


    // calculate the average 
    const avg = filtered.length > 0 ? (total / filtered.length).toFixed(2) : "";

    // display 
    getElement("#score_list").value = output;
    getElement("#avg").textContent = avg;
};

document.addEventListener("DOMContentLoaded", () => {
    
    getElement("#add_score").addEventListener("click", () => {  
        let firstName = getElement("#first_name").value;
        let lastName = getElement("#last_name").value;
        let score = parseFloat(getElement("#score").value);

        if (firstName == "" || lastName == "" || score == "") {
            alert("Please enter data");
            return
        }

        students.push([firstName, lastName, score]);

        getElement("#first_name").value = "";
        getElement("#last_name").value = "";
        getElement("#score").value = "";
        getElement("#first_name").focus();

        console.log(students)
        displayScores(students)

    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        students = [];
        getElement("#score_list").value = "";
        getElement("#avg").textContent = "";
        console.log(students);
        
    });

    getElement("#sort").addEventListener("change", () => {
        displayScores(students);
        
    });
    
    getElement("#filter").addEventListener("change", () => {
        displayScores(students);
        
    });

    // set focus on first text box on load
    getElement("#first_name").focus();
});