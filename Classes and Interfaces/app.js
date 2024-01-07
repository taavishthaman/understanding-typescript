"use strict";
// interface Person {
//   name: String;
//   age: number;
//   greet(phrase: string): void;
// }
let add = (n1, n2) => n1 + n2;
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} ${this.name}`);
        }
        else {
            console.log("Hi!");
        }
    }
}
let user1;
// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };
user1 = new Person();
user1.greet("Hi there! I am ");
