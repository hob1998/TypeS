class Stores<T> {
    protected _objects: T[] = [];


    add(obj: T): void {
        this._objects.push(obj);
    }
    // T is Product
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

const store1 = new Stores<Product>();
store1.add({ name: 'a', price: 1});
store1.find( 'name', 'a');
store1.find( 'price', '1');