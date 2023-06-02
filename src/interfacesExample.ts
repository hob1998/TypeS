// abstract class calender {
//     constructor(public name: string) {}

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }

interface ICalender {
    name: string;
    addEvent(): void;
    removeEvent(): void; 
}

interface CloudCalender extends ICalender {
    sync(): void;
}

class CloudCalender implements ICalender {
    constructor(public name: string) {}

    addEvent(): void{
        throw new Error("CloudCalender");
    }

    removeEvent(): void{
        throw new Error("CloudCalender");
    }

}
/* abstract classes are better if you have a already defined 
logic within your code that you wish to share with your child
classes while using a interface is better for just making sure
your child classes will contain the method and properties but
each child will use the methods in a diffrent way (or logic)*/

