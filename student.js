import { Person } from './person.js';

export class Student extends Person {
    constructor(name, age, gendor, interests) {
        super(name, age, gendor, interests);
    }
}