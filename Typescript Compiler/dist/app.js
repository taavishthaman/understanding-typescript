"use strict";
// let myName: string;
// myName = "Taavish";
// console.log("Hello Taavish");
const btn = document.querySelector("button");
function clickHandler(message) {
    console.log("Clicked!", message);
}
if (btn) {
    btn.addEventListener("click", clickHandler.bind(null, "Button"));
}
// const add = (...numbers: [number, number, number, number, number]) =>
//   numbers.reduce((acc, num) => acc + num);
const add = (...numbers) => numbers.reduce((acc, num) => acc + num);
const addedNumbers = add(5, 4, 3, 7, 10.5);
console.log(addedNumbers);
const hobbies = ["Sports", "Cooking", "Surfing", "Existing"];
const [h1, h2, ...remainingHobbies] = hobbies;
console.log(h1, h2, remainingHobbies);
const person = {
    name: "Max",
    age: 20,
};
const { name: personName, age: personAge } = person;
console.log(personName, personAge);
// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);
// const person = {
//   name: "Max",
//   age: 20,
// };
// const copiedPerson = { ...person };
// console.log(copiedPerson);
//# sourceMappingURL=app.js.map