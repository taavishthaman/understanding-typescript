"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximillian",
//   age: 30,
// };
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tuple type
// } = {
//   name: "Maximillian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Maximillian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("Person is an Admin");
}
