/*
* Question 21: Think of something you could store in a TypeScript Object. 
* Write a program that creates Objects containing these items.

* Explain & TIP: Objects in TypeScript can store various related data about a single entity. 
* Think of an object as a container for characteristics of something, like a book or a car.
*/

// Method 01
let person20 = {
  name: "Huzaifa",
  age: 22,
  city: "Nawabshah",
  isStudent: true,
};

console.log(person20.name);
console.log(person20.age);
console.log(person20.city);
console.log(person20.isStudent);

// // Method 02
let book: { title: string; author: string; yearPublished: number } = {
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  yearPublished: 1937,
};

console.log(
  `Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`,
);

// Method 03
class Course {
  courseName: string;
  completingYear: number;
  mentor: string;

  constructor(courseName: string, completingYear: number, mentor: string) {
    this.courseName = courseName;
    this.completingYear = completingYear;
    this.mentor = mentor;
  }

  // Method
  greet() {
    console.log(
      `This ${this.courseName} course is designed by ${this.mentor}, and you can complete this course in ${this.completingYear} year`,
    );
  }
}

// Creating an object of the Course class
const course1 = new Course("GenAi", 1, "Zia Khan");
const course2 = new Course("Crypto", 1, "Waqar Zaka");

console.log(course1.courseName);
console.log(course1.completingYear);
console.log(course1.mentor);

// Calling method
course1.greet();
course2.greet();

// Method 04
const countries: {
  [country: string]: { capital: string; population: number; language: string };
} = {
  USA: {
    capital: "Washington D.C",
    population: 331000000,
    language: "English",
  },

  Pakistan: {
    capital: "Islamabad",
    population: 220000000,
    language: "Urdu",
  },
};

for (let country in countries) {
  console.log(`Country ${country}`);
  console.log(`Capital ${countries[country].capital}`);
  console.log(`Population ${countries[country].population}`);
  console.log(`Language ${countries[country].language} \n`);
}
