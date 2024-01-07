// interface Person {
//   name: String;
//   age: number;
//   greet(phrase: string): void;
// }

// interface Greetable {
//     readonly name: String;
//     greet(phrase: string): void;
//   }

interface Named {
  readonly name?: string;
  output?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1: number, n2: number) => n1 + n2;

class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;
// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

user1 = new Person();

user1.greet("Hi there! I am ");
