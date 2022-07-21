import { Student } from './student.js'
import { Teacher } from './teacher.js'

let student1 = new Student('Julia', '22', 'female', 'JS');
let teacher1 = new Teacher('Ron', '33', 'male', 'music', 'English')
student1.showPerson();
teacher1.showPerson();