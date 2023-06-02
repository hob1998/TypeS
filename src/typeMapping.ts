interface Tool {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    // index signature
    // keyof 
    // functions like a for loop will return all the desired 
    // properties and datatypes //
    readonly [Keys in keyof T]: T[Keys];
}

type Optional<T> = {
    [Keys in keyof T]?: T[Keys];
}

type Nullable<T> = {
    [Keys in keyof T]: T[Keys] | null;
}

const firstTool: ReadOnly<Tool> = {
    name: 'a',
    price: 1,
}