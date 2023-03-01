// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

let array = [4, 78, 8, 3, 6, 0, 12, 34];
let maxElement = array[0];
const getMaxElement = (num) => {
  for (i = 1; i < num.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};
console.log(getMaxElement(array)); // 78

// 2. Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (num) => {
  let addNumber = 0;
  let avarage;
  for (let i = 0; i < num.length; i++) {
    addNumber += num[i];
  }
  return (avarage = addNumber / num.length);
};

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

// 3. write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const convertEvenToOdd = (num) => {
  const change = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      change.push(num[i] + 1);
    } else {
      change.push(num[i]);
    }
  }
  return change;
};
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

// 4. write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

let words = ["eat", "sleep", "code", "repeat", "neog", "community"];
const filterWords = (num) => {
  const array = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i].length > 5) {
      array.push(num[i]);
    }
  }
  return array;
};
console.log(filterWords(words)); // ["repeat", "community"]

// 5.  Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (num) => {
  let capitalArra = [];
  for (let i = 0; i < num.length; i++) {
    capitalArra.push(num[i].toUpperCase());
  }
  return capitalArra;
};

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

//6. Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (num) => {
  const nam = [];
  for (let i = 0; i < num.length; i++) {
    nam.push(num[i].name);
  }
  return nam;
};

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]

// 7.  Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const userData = { firstName: "John", lastName: "Dee" };
const podAndTeamAllocation = (obj) => ({ ...obj, teamId: 667543 });
console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

//8. Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = (obj) => {
  console.log("-----------------------");
  for (const team in obj) {
    if ("team" in obj) {
      return { ...obj };
    } else {
      return { ...obj, team: "A" };
    }
  }
};

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// {firstName: 'Priya', lastName: 'Raj', team: A}

//9 . Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

const { title, authors, publisher } = book;
const [authorName, authorName2] = authors;
const author1 = authorName.name;
const author2 = authorName2.name;
const { name } = publisher;

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(name); // O'Reilly Media

//10 . Write an ES6 function that takes an array of objects and returns the sum of all ages.

var array2 = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];
const sumOfAges = (array2) => {
  let sum = 0;
  for (let i = 0; i < array2.length; i++) {
    sum += array2[i].age;
  }
  return sum;
};

console.log(sumOfAges(array2)); // 121
