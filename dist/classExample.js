"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("You cannot deposit a negative amount");
        }
        this.calculateTax();
        this._balance += amount;
    }
    calculateTax() {
        const tax = this._balance * .12;
        console.log('the tax on your account is:', tax);
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Alice", 0);
account.deposit(100);
console.log(account);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.balance);
//# sourceMappingURL=classExample.js.map