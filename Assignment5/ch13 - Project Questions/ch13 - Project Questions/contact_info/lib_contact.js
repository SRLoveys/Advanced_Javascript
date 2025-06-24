import Dob from "lib_dob"

export default class Contact {
    constructor(name, email, phone, zip, dob) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.zip = zip;
        this.dob = new Dob(dob);
    }

}