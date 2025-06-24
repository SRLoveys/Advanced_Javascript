// import statement(s)

import { StreetCraps } from "craps";

const game = new StreetCraps();

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#new_game").addEventListener("click", () => {
        // start new game
        game.reset();

        // update page
        getElement("#roll").disabled = false;
        getElement("#new_game").disabled = true;
        getElement("#point").textContent = "0";
        getElement("#current_roll").textContent = "0";
        getElement("#message").textContent = "";
    });

    getElement("#roll").addEventListener("click", () => {
        // roll, check if users wins or loses
        let check = null;
        
        if (game.point == 0) {
            check = game.comeOutRoll()
        } else if (game.point !=0) {
            check = game.continuedGame()
        }
        
        getElement("#point").textContent = check.point;
        getElement("#current_roll").textContent = check.total;
        getElement("#message").textContent = check.message;

        if (check.isGameOver) {
            getElement("#message").style.color = "red"; 
            getElement("#roll").disabled = true;      
            getElement("#new_game").disabled = false; 
        } else {
            getElement("#message").style.color = "black";
        }
    });
}); 