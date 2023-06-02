"use strict";
class keyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new keyValuePair('a', 'b');
let pair2 = new keyValuePair('a', 'b');
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
const numbers = ArrayUtils.wrapInArray(56);
function fetch(Url) {
    return { data: null, error: null };
}
const result = fetch('url');
function echo(value) {
    return value;
}
function echo2(value) {
    return value;
}
function echo3(value) {
    return value;
}
class Example {
    constructor(name) { }
}
class Customer extends Example {
}
function echo4(value) {
    return value;
}
echo4(new Customer('a'));
const product = { name: 'a', price: 1234 };
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
store.add(product);
class searchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
//# sourceMappingURL=genericExample.js.map