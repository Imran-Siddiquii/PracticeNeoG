// Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
// const userVote=window.prompt("Enter Your age ");
//  if(userVote <18){
//      console.log("user is not eligible");}else{console.log("user can vote ");
// }

// Write a function that takes two numbers as input and determines which one is greater.

const greaterNumber = (a, b) =>
  a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
console.log(greaterNumber(4, 6));

// Write a function that takes a number as input and determines if it is positive or negative.

const checkNumber = (a) => (a > 0 ? "postive" : "negative");
console.log(checkNumber(-7));

// Write a function that takes a number as input and determines if it is even or odd

const isEvenOdd = (num) => (num % 2 == 0 ? "Even" : "Odd");
console.log(isEvenOdd(7));

// 5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlpahbet = (alpha) =>
  alpha.includes("a") || alpha.includes("A")
    ? "Includes A or a"
    : " Does not Include A or a";
console.log(checkForAlpahbet("imrn"));

// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (num) =>
  num.length > 5 ? "Length is longer than 5" : "Length is not longer than 5";
console.log(checkLength("imrad"));

//7 Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetween = (a) => a >= 0 && a < 10;
console.log(isBetween(78));

//8  Write a function that takes a string as input and determines if it contains the word "hello".

const includeHello = (char) => char.includes("Hello") || char.includes("hello");
console.log(includeHello("Hello world"));

// 8. Write a function that takes a number as input and determines if it is a multiple of 3.
const multiple = (num) => num % 3 == 0;
console.log(multiple(4));
// Write a function which takes in a number as input and returns it after multiplying by 10.
const multipleBy10 = (num) => num * 10;
console.log(multipleBy10(4));

// Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};
const { title, price, description } = product;

console.log(title, price, description);

//12  Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.
const book = { title: "Big Mistake", author: "Mk Mishra", pages: "101" };
const checkPage = (val) => val.pages > 100;
console.log(checkPage(book));

// 13 . Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = { name: "sunil", occupation: "salesman" };
const changeOccupation = (val, post) => (val.occupation = post);
console.log(changeOccupation(person, "manager"));
console.log(person);

// Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
const [one, second, third] = numbers;
console.log(one, second, third);

// 4. Convert the given function into ES6 with least amount of characters.
// function defaultParamsFunc(a, b, c) {
//     if (c === undefined) {
//         c = 4;
//     }
//     return a * b * c;
// 	};
// 	console.log(defaultParamsFunc(3, 1)); // 12

const defaultParamsFunc = (a, b, c = 4) => a * b * c;
console.log(defaultParamsFunc(3, 1)); // 12
