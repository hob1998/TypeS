class Person {
    constructor( public firstName: string, public lastName: string) { }

    get fullName(): string { 
        return this.firstName + " " + this.lastName; 
    }

    walk(): void {console.log('Walking');}

    talk(): void {console.log('Talking');}
}

class Student extends Person {
    constructor( public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest(): void {
        console.log("Testing");
    }

}



class Teacher extends Person {
    override get fullName(): string { 
        return 'Professor '+ super.fullName; 
    }
}

class Principal extends Person {
    override get fullName(): string { 
        return 'Principal '+ super.fullName; 
    }
}



function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}

const dia = new Student(1234, 'Dia', 'mante');
// dia.walk();
const yuka = new Teacher('Yuka', 'koyama');
// console.log(yuka.fullName);
const hunter = new Principal('Hunter', 'koyama');
printNames([dia, yuka, hunter]);