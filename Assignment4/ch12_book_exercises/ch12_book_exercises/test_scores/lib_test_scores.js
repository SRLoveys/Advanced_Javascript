class TestScores {
    #testScores;

    constructor() {
        this.#testScores = [];
    }

    add(score) {
        this.#testScores.push(score)
    }

    get average() {
        if (this.#testScores.length == 0) return 0;

        let sum = 0;
        for (let score of this.#testScores) {
            sum += score;
        }

        return sum / this.#testScores.length
    }

    toString() {
        return this.#testScores.join(", ")
    }

    toLetterString() {
        let letters = [];

        for (let score of this.#testScores) {
            if (score >= 90) {
                letters.push("A");
            } else if (score >= 80) {
                letters.push("B");
            } else if (score >= 70) {
                letters.push("C");
            } else if (score >= 60) {
                letters.push("D");
            } else {
                letters.push("F")
            }
        }

        return letters.join(", ")
    }

    toSortedString() {
        const sortedScores = this.#testScores.slice()
        sortedScores.sort((a, b) => b - a)

        return sortedScores.join(", ")
    }

}

