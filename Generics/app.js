"use strict";
// const names: Array<string> = []; //same as string[]
// //names[0].split(" ");
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 200);
// });
// promise.then((data) => {});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
function countAndDecribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 elements";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}
console.log(countAndDecribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
//Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {}; //Partial = Temporary
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
