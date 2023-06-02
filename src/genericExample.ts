class keyValuePair<T, U> {
    constructor(public key: T, public value: U) {}
}

let pair = new keyValuePair<string, string>('a', 'b');

let pair2 = new keyValuePair('a', 'b');

class ArrayUtils {
    static wrapInArray<T>(value: T): T[] {
        return [value];
    }
}

const numbers = ArrayUtils.wrapInArray<number>(56);

interface Result<T> {
    data: T | null,
    error: string | null;
}

function fetch<T>(Url: string): Result<T> {
    return {data: null, error: null};
}

interface User {
    username: string;
}

interface product {
    title: string;
}

const result = fetch<User>('url');

// Generic Constraints //

// Constraining via simple DataTypes //
function echo<T extends number | string>(value: T): T {
    return value;

}
// Constraining via Object //
function echo2<T extends {name: string}>(value: T): T {
    return value;

}

// Constraining via Interface //
interface Person {
    name: string
}

function echo3<T extends Person>(value: T): T {
    return value;

}

// constraining Via Class //
// important to rember this will allow you to pass any child classes of example as well //
class Example {
    constructor(name: string) {}
}

class Customer extends Example {

}

function echo4<T extends Example>(value: T): T {
    return value;
}

echo4(new Customer('a'));

// EXTENDING GENERIC CLASSES //

interface Product{
    name: string;
    price: number;
}

const product: Product = {name: 'a', price: 1234};
class Store<T> {
    protected _objects: T[] = [];


    add(obj: T): void {
        this._objects.push(obj);
    }
}

// Pass on the generic type parameter //
class CompressibleStore<T> extends Store<T> {
    compress() {}


}

let store = new CompressibleStore<Product>();
store.compress();
store.add(product);

// restricting the generic type parameter //
class searchableStore<T extends {name: string}> extends Store<T> {
    find(name:string): T | undefined {
        return this._objects.find(obj => obj.name === name);

    }
}

// Fix the generic type parameter //
class ProductStore extends Store<Product> {
    filterByCategory(category:string): Product []{
        return [];
    }
}