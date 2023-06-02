"use strict";
class logger {
    constructor(nameOfFile) {
        this.nameOfFile = nameOfFile;
        this.nameOfFile = nameOfFile;
    }
    writeToFile(message) {
    }
}
class Persons {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}
class Employee extends Persons {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
//# sourceMappingURL=ClassesExercises.js.map