export default class Dob extends Date {
    constructor(dateString) {
        super(dateString);
    }
    
    isValid() {
        return this.toString() !== "Invalid Date";
    }

    isPast() {
        const today = new Date();
        return this < today;
    }

    toStringFormatted() {
        return this.toDateString();
    }
}