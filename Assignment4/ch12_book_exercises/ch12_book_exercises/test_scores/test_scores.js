"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const testScores = new TestScores();

    getElement("#add_score").addEventListener("click", () => {
        // clear any previous error message
        getElement("#add_score").nextElementSibling.textContent = "";  
        
        // get score entered by user and validate
        const score = parseFloat(getElement("#score").value);
        if (!validation.isNumeric(score) || !validation.isInRange(score, 0, 100)) {
            const msg = "Score must be from 0 to 100."; 
            getElement("#add_score").nextElementSibling.textContent = msg; 
        }
        else { // score is valid
            
            // add score to scores array 
            testScores.add(score);

            // display all scores
            getElement("#all").textContent = testScores.toString();

            // display letter grades for scores
            getElement("#grades").textContent = testScores.toLetterString();
            
            // calculate and display average score
            getElement("#avg").textContent = testScores.average.toFixed(2);

            // display the scores sorted in descending order
            getElement("#sort").textContent = testScores.toSortedString();
        }
        
        // get text box ready for next entry
        getElement("#score").value = "";
        getElement("#score").focus(); 
    });

    // set focus on initial load
    getElement("#score").focus();
});