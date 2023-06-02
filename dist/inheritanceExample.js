"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() { console.log('Walking'); }
    talk() { console.log('Talking'); }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Testing");
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
const dia = new Student(1234, 'Dia', 'mante');
const yuka = new Teacher('Yuka', 'koyama');
const hunter = new Principal('Hunter', 'koyama');
printNames([dia, yuka, hunter]);
//# sourceMappingURL=inheritanceExample.js.map