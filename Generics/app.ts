// const names: Array<string> = []; //same as string[]
// //names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 200);
// });

// promise.then((data) => {});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDecribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 elements";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDecribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "Max" });
// objectStorage.addItem({ name: "Manu" });
// //... Does not work
// objectStorage.removeItem({ name: "Max" });
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {}; //Partial = Temporary
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu");
// names.pop();
