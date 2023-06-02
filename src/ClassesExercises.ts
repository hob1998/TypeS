// Based off  5- Classes and Interfaces Exercises.pdf //

class logger {

    constructor(private nameOfFile:string) {
        this.nameOfFile = nameOfFile;
    }

    public writeToFile(message:string):void {
        
    }
}

class Persons {
    constructor(private _firstName:string, private _lastName:number) {}

    get fullName():string {
        return this._firstName + " " + this._lastName;
        
    }

}

class Employee extends Persons{
    constructor(private salary:number,firstName:string, lastName:number) {
       super(firstName, lastName);
    }
}
interface IAddress{
    street:string;
    city:string;
    zipCode:number;
}
interface IEmployee {
    name:string;
    salary:number;
    address: IAddress;
}