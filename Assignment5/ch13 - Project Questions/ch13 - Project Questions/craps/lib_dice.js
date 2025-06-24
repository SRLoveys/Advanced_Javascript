export class Die {
  constructor() {
    this.value = 1; 
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    return this.value;
  }

}

export class Dice {
    constructor() {
        this.die1 = new Die();
        this.die2 = new Die();
        this.total = 0;
    }

    roll() {
        const valueDieOne = this.die1.roll()
        const valueDieTwo = this.die2.roll()
        this.total = valueDieOne + valueDieTwo;
        return {
            valueDieOne, valueDieTwo, total: this.total
        }
    }
}