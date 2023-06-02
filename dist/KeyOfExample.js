"use strict";
class Stores {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
const store1 = new Stores();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
store1.find('price', '1');
//# sourceMappingURL=KeyOfExample.js.map