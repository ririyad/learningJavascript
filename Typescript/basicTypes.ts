let decimal1: number = 6;
let decimal2: number = 16;

let sum: number = decimal1 + decimal2;
// document.body.innerHTML = sum.toString();

let fullName: string = `Jessica Jones`;
let age: number = 27;

let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`

// document.body.innerHTML = sentence;

let x: [string, number];
x = ["Hello", 12];
document.body.innerHTML = x[0].substr(1);

let list: any[] = [1, false, "Hello"];

function warnUser(): void{
    alert("This is warning message");
}

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;