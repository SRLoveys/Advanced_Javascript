class Event {
    constructor(name, dateString) {
        this.name = name;
        this.dateString = dateString;
        this.date = new Date(dateString);
    }

    get hasName() {
        return this.name != "";
    }

    get hasDate() {
        return this.dateString != "";
    }

    get isValidDate() {
        return this.date.toString != "Invalid Date";
    }

    get days() {
        // calculate days
        const today = new Date();
        const msFromToday = this.date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        return Math.ceil( msFromToday / msForOneDay );
    }

    get message() {
         // create and display message 
        let msg = "";
        const date = this.date.toDateString();
        if (this.days == 0) {
            msg = `Hooray! Today is ${this.name}! (${date})`;
        } else if (this.days > 0) {
            msg = `${this.days} day(s) until ${this.name}! (${date})`;
        } else if (this.days < 0) {
            msg = `${this.name} happened ${Math.abs(this.days)} 
                   day(s) ago. (${date})`;
        }
        return msg;
    }

}