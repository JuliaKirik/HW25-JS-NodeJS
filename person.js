class Persone {
    constructor(name, age, gendor, interests) {
        this.name = name;
        this.age = age;
        this.gendor = gendor;
        this.interests = interests;
    }

    showPersone() {
        console.log(this.name, this.age, this.gendor, this.interests)
    }
}
let persone1 = new Persone('Julia', '22', 'female', 'JS')