// Create and Access Elements:
// Create an array named fruits containing the elements: "Apple", "Banana", "Mango".
// Access the first and last element of the array.

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// Modify Array Elements:
// • Replace "Banana" with "Orange" in the fruits array.
// •Add "Pineapple" at the end of the array.
// •Remove the first element of the array.

fruits.splice(1, 1, "Orange");
console.log(fruits);

// or
// fruits[1] = "Orange";
fruits.push("Pineapple");
console.log(fruits);

fruits.shift();
console.log(fruits);

// Array Methods:
// Use map to create a new array with the lengths of each fruit name.
// Use filter to create a new array with fruits that have more than 5 letters.

newFruits = fruits.map((elem) => elem);
console.log(newFruits);

newwFruits = fruits.filter((fruit) => {
  return fruit.length > 5;
});
console.log(newwFruits);

// Sort and Reverse:
// Sort the fruits array in alphabetical order.
// Reverse the order of elements in the sorted array.
console.log(fruits);
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

// Find and Index:
// Use find to get the first fruit that contains the letter 'g'
// Use indexOf to find the index of "Mango".

console.log(
  fruits.find((fruit) => {
    return fruit.includes("g");
  })
);

console.log(fruits.indexOf("Mango"));

// Array Transformation with map and filter:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create an array named numbers containing integers from 1 to 10.
// Use map to create a new array where each number is squared.
// Use filter to create a new array containing only even numbers from the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqrnumbers = numbers.map((numb) => numb * numb);
console.log(sqrnumbers);

let filterednumber = numbers.filter((numb) => numb % 2 == 0);
console.log(filterednumber);

// Aggregate Data with reduce:
// Example : const expenses = [ { amount: 50, category: 'Groceries' { amount: 20,
// category: 'Transportation' }, { amount: 100, category: 'Entertainment' }, { amount: 80,
// category: 'Groceries' }, { amount: 30, category: 'Transportation' }];

// const expenses = [ { amount: 50, category: 'Groceries' }, { amount: 20, category:
// 'Transportation' }, { amount: 100, category: 'Entertainment' { amount: 80, category:
// 'Groceries' }, { amount: 30, category: 'Transportation' } l;

// Given an with objects representing different expenses ({amount :number, category: string}), calculate the total amount spent.
// Create a function that groups expenses by category and calculates the total amount for each category.

const expenses = [
  { amount: 50, category: "Groceries" },
  { amount: 20, category: "Transportation" },
  { amount: 100, category: "Entertainment" },
  { amount: 80, category: "Groceries" },
  { amount: 30, category: "Transportation" },
];

let sum = expenses.reduce((acc, curr) => {
  return acc + curr.amount;
}, 0);
console.log(sum);

//Expenses by Category

// const totalAmountForEachCategory = expenses.reduce((acc, curr) => {
//   if (acc[curr.category]) {
//     acc[curr.category] += curr.amount;
//   } else {
//     acc[curr.category] = curr.amount;
//   }
//   return acc;
// }, {});
// console.log(totalAmountForEachCategory);


 function totalAmountEachCategory(expenses) {
  const totalAmountForEachCategory = expenses.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += curr.amount;
    } else {
      acc[curr.category] = curr.amount;
    }
    return acc;
  }, {});
}
totalAmountEachCategory(expenses) 

// Array Flattening:
// const nestedArray = [1, p, p, [4, 511, 61, 7, [8, 91];
// Create a nested array nestedArray with multiple levels of arrays within arrays.
// Write a function flattenArray that flattens nestedArray into a single-level array.
const nestedArray = [1, [2, [3, [[4, 5]]], 6], 7, [8, 9]];

let flatarr = nestedArray.flat(4);
console.log(flatarr);

function flat_Array(nestedArray, n) {
  return nestedArray.flat(n);
}

// Object Assignments

// Create and Access Properties:
// Create an object named car with properties: make, model, and year.
// Access the make and year properties.
const car = {
  make: "Mercedes-Benz",
  model: "M-Class",
  year: 2000,
};

//Accessing make and year
console.log("make:", car["make"]);
console.log("year:", car.year);

//Modify Object Properties:
//change model to Camry
console.log("model:", (car.model = "Camry"));

//add new property color with value "blue"
car["color"] = "blue";
console.log(car);

// Iterate Over Object Properties:
// Use a for... in loop to iterate over all properties of the car object and log each
// key-value pair.
for (const key in car) {
  console.log(key + " : " + car[key]);
}

// Nested Objects:
// Create an object person with properties: firstName, lastName, and address (which is another object with properties street, city, and zipCode).
// Access the city of the address.
let person = {
  firstName: "Vikas",
  lastName: "Prajapati",
  address: {
    street: "Sare Crescent Park",
    city: "Ghaziabad",
    zipCode: 842001,
  },
};

console.log(person.address.city);

// Array of Objects:
// Create an array of objects named students where each object represents a student with properties name and grade.
// Use forEach to print the name and grade of each student.
let students = [
  {
    name: "Alex",
    grade: 10,
  },
  {
    name: "Bob",
    grade: 56,
  },
  {
    name: "Elister",
    grade: 12,
  },
];
students.forEach((e) => {
  console.log("Name:", e.name, " Grade:", e.grade);
});

// Destructuring:
// Use object destructuring to extract make and model from the car object.
// Use array destructuring to extract the first two fruits from the fruits array.
let { make, model } = car;
console.log("make:", make, "model:", model);

let [fruit1, fruit2] = fruits;
console.log("fruit1:", fruit1, " fruit2:", fruit2);

// Merge Objects:
// Use the spread operator to merge two objects: obj 1 with properties {a: 1 , b: 2}
// and obj2 with properties {b: 3, c: 4}
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  b: 3,
  c: 4,
};
console.log({ ...obj1, ...obj2 });
