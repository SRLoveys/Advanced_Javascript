// import statement(s)
import { Dice } from "dice";

// private


// public
export class StreetCraps {
    constructor() {
        this.dice = new Dice();
        this.point = 0;
        this.isGameOver = false;
        this.message = "";
    }

    comeOutRoll() {
        const roll = this.dice.roll();
        const total = roll.total;

        if (this.point == 0 && (total == 7 || total == 11)) {
            this.message = `You rolled ${total} on the come out roll, You win!`
            this.isGameOver = true;
        } else if (this.point == 0 && (total == 2 || total == 3 || total == 12)) {
            this.message = `You rolled ${total} on the come out roll, You lose.`
            this.isGameOver = true;
        } else {
            this.message = `You rolled a ${total}, roll again.`
            this.point = total;
        } 

        return {
            die1: roll.valueDieOne,
            die2: roll.valueDieTwo,
            total: total,
            point: this.point,
            message: this.message,
            isGameOver: this.isGameOver
        };
    }

    continuedGame() {
        const roll = this.dice.roll();
        const total = roll.total;

        if (total == this.point) {
            this.message = `You hit ${total} again, You win!`;
            this.isGameOver = true;
        } else if (total == 7) {
            this.message = `You rolled a ${total} after the come out roll, You lose.`;
            this.isGameOver = true;
        } else {
            this.message = `You rolled a ${total}, roll again.`;
        }

        return {
            die1: roll.valueDieOne,
            die2: roll.valueDieTwo,
            total: total,
            point: this.point,
            message: this.message,
            isGameOver: this.isGameOver
        };
    }

    reset() {
        this.point = 0;
        this.isGameOver = false;
        this.message = "";
    }
}