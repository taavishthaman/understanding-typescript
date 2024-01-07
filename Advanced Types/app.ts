type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //Combined object attributes

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Common from both union types

//Function Overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  //Type Guard
  if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  }
  return +a + +b;
}

const result = add("Taavish", "Thaman");
console.log(result);
console.log("Length", result.length);

const userInput = "";
//Nullish Coalescing, deals with nullish or undefined values but keeps rest of the falsy values like an empty string
const storedData = userInput ?? "DEFAULT";

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name: ", emp.name);
//   //Type Guard
//   if ("privileges" in emp) {
//     console.log("Privileges: ", emp.privileges);
//   }

//   if ("startDate" in emp) {
//     console.log("Start Date", emp.startDate);
//   }
// }

// printEmployeeInfo(e1);

// class Car {
//   drive() {
//     console.log("Driving....");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo:", amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(10000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   //Discriminated Unions type: "bird"
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log("Moving with speed: ", speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 300 });

// const paragraph = document.getElementById("message-output");

// //Typecasting
// //const userInput = <HTMLInputElement>document.getElementById("user-input")!;

// //React friendly typecasting syntax
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
// userInput.value = "Hi There!";

// interface ErrorContainer {
//   [prop: string]: string; //Index Type
// }

// //Add as many properties as you want but the key and value both should be string
// const errorBag: ErrorContainer = {
//   email: "Not a valid email!",
//   username: "Must start with a capital letter",
// };
