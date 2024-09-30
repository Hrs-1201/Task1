//1que---Create an array of numbers and sort array in ascending and descending order----Done
// Sort the numbers in ascending order
const points = [7, 10, 1, 12, 4, 3];
points.sort(function (a, b) {
  return a - b;
});

lowest = points[0];
console.log(points);

myArray = [1, 5, 8, 4, 0, 3, 6];
myArray.sort();
myArray.reverse();

//2 que ---Create an array of object with 7 elements and print array with first 5 elements---Done
function objEle() {
  arrayObj = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 35 },
    { name: "Eve", age: 28 },
    { name: "Frank", age: 45 },
    { name: "Grace", age: 32 },
  ];

  return arrayObj.slice(0, 5);
}

//3que ---Create an array of strings with 7 elements and replace any string of 5th index.---Done

function arrayStr() {
  arrayOfStrings = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "pineapple",
    "mango",
  ];

  // Replace 5th index
  arrayOfStrings[5] = "kiwi";
  return arrayOfStrings;
}

//4Que ---Create an array with 10 elements and print items till 7th index only.---Done
function arrayEle() {
  arrayOfStrings = [
    "apple",
    "banana",
    "orange",
    "grape",
    "strawberry",
    "pineapple",
    "mango",
    "kiwi",
    "watermelon",
    "blueberry",
  ];
  // Print items till the 7th index (index starts from 0)
  for (i = 0; i <= 7; i++) {
    console.log(arrayOfStrings[i]);
  }
  return arrayOfStrings;
}

//5que --Create array of objects with properties firstname, lastname and age and get the item if item’s age is 40 and print it.--Done
function ageFilter() {
  people = [
    { firstname: "Mayank", lastname: "Panchal", age: 27 },
    { firstname: "Harsh", lastname: "Panchal", age: 24 },
    { firstname: "Mehul", lastname: "Panchal", age: 40 },
    { firstname: "Raj", lastname: "Patel", age: 44 },
    { firstname: "Kuldeep", lastname: "Padhiyar", age: 19 },
  ];

  personWithAge40 = people.filter((person) => person.age === 40);

  return personWithAge40;
}

console.log(objEle(arrayObj));


