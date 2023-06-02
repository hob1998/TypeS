// CLASS DECORATORS //

type ComponentOptions = {
    selector: string
}

// Decorator factory
function Component(options: ComponentOptions){
    return (constructor: Function) =>{
            console.log('Component decorator called');
            constructor.prototype.options = options;
            constructor.prototype.uniqueId = Date.now();
            constructor.prototype.insertInDOM = () => {
                console.log('insert the component in the DOM');
            }
    }
}

// function Component(constructor: Function) {
//     console.log('Component decorator called');
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//         console.log('insert the component in the DOM');
//     }
// }

function Pipe(constructor: Function){
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}


@Component({selector: '#my-profile'}) // this will be called secound //
@Pipe // this will be called first //
class ProfileComponent {

}
// FUNCTION DECORATORS //
// google 'typescript decorators' //

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function(...args: any){ // cant use an arrow functionhere as it wont allow you to use 'this' keyword //
        console.log('Before')
        original.call(this, ...args);
        console.log('After')
    }
}


class Person1 {
    @Log
    say(message: string){
        console.log('Person says', message);
    }
}

// ACCESSOR DECORATORS //

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function() {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase(): result
         

    }
}

class Person2 {
    constructor(public firstName: string, public lastName: string) {

    }
    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const nathan = new Person2('rex', 'obrien');
console.log(nathan.fullName)