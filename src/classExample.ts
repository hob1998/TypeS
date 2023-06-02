class Account{
    // readonly id : number;
    // owner : string;
    // private balance : number;
    // nickname?: string;

    // // dont worry about the compilation errors when you first initialize the keys //
    // // all you need to do is set a constructor //

    // constructor(id : number, owner : string, balance : number){
    //     this.id = id;
    //     this.owner = owner;
    //     this.balance = balance;
    // }

    //constructor without properties declared outside of the constructor //

    constructor(
        public readonly id : number,
        public owner : string,
        private _balance : number) {

    }

    // now implement the methods //

    deposit(amount : number): void{
        if (amount <= 0){
            throw new Error ("You cannot deposit a negative amount");

        }
        this.calculateTax()
        this._balance += amount;
    }
    // with a private method you cant call it outside the object so use this method in other methods //
    private calculateTax(){
        const tax = this._balance * .12;
        console.log('the tax on your account is:', tax);

    }

    // getBalance(): number{
    //     return this.balance;
    // };
    
    // The concept of a getter is that you can call it outside of a object and still have access to
    // a private property without having to 'create' a new method //

    get balance (): number {
        return this._balance;
    }

    // same concept but with a setter but you wouldnt use the setter here //

    // set balance(value: number){
    //     if (value <= 0){
    //         throw new Error ("You cannot deposit a negative amount");
    //     }this._balance = value;
    // }
}

// to test the class and object you can use the following code //
// 1) compile the program via tsc in terminal
// 2) run the program using node 'node dist/nameOfFile.js'
// important to remember that you will test via the JS file not the TS file //

let account = new Account(1, "Alice", 0);

account.deposit(100);
console.log(account); // 100
console.log(typeof account); // object

// to check the object for the correct type of object you can use the instanceof //

console.log(account instanceof Account); // true

console.log(account.balance); // 100
// console.log(account.getBalance()); // 100