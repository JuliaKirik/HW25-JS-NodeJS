export class Person {
    constructor(name, age, gendor, interests) {
        this.name = name;
        this.age = age;
        this.gendor = gendor;
        this.interests = interests;
    }
    showPerson() {
        if (this.age < 30) {
            console.log (`Student: ${this.name}, ${this.age} age, ${this.gendor}, 'I like ${this.interests}'`)
        } else {
            console.log (`Teacher: ${this.name}, ${this.age} age, ${this.gendor}, 'I like ${this.interests}', teacher ${this.subject}`)
        }
    }
}