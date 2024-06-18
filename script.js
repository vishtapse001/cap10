// problem1

function combiningArrays(fruits, vegetables) {
  const groceries = [...fruits, ...vegetables];
  return groceries;
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables));

// problme2

function cloningObjects(obj) {
  return { ...obj };
}
const person = { name: "John", age: 30, address: "123 Main St" };
console.log(cloningObjects(person));

// problem3

function mergingObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course));

// problem4

const array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];
function combiningNestedArrays(array1, array2) {
  const array3 = [...array1, ...array2];
  return array3;
}
console.log(combiningNestedArrays(array1, array2));
