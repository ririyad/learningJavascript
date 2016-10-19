// interface Person{
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person){

//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = {firstName: "Rashedul", lastName: "Riyad"};
// document.body.innerHTML = greeter(user);

// class Student{
//     fullName: string;
//     constructor(public firstName, public middileInitial, public lastName){
//         this.fullName = firstName + " " + middileInitial + " " + lastName;
//     }
// }

// interface Person{
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person){
//     return "Hello " + person.firstName + " " + person.lastName;
// }

// var user = new Student("Rashedul", "Islam", "Riyad");
// document.body.innerHTML = greeter(user);

class Student{
    fullName: string;
    constructor(public firstName, public middleName, public lastName){
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface Person1{
    firstName: string;
    middleName: string;
    lastName: string;
}

interface Person2{
    firstName: string;
    lastName: string;
}

function greeter1(person: Person1){
    return "Hello " + person.firstName + " " + person.middleName + " " + person.lastName;
}

function greeter2(person: Person2){
    return "Hello " + person.firstName + " " + person.lastName;
}

var user1 = new Student("Santino", "D", "Costa");
var user2 = new Student("Angelo", "D", "Gomez");

document.body.innerHTML = greeter1(user1);
document.body.innerHTML = greeter2(user2);
