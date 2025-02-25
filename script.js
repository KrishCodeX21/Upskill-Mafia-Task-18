// Question 1
// let array = [1, 2, 3, 4, 5];

// let newArray = array.map((number) => {
//   return number * number;
// });
// console.log(newArray);

// Question 2
// const parameterShow = (marks) => {
//   let grade =
//     marks >= 90
//       ? "A"
//       : marks >= 80
//       ? "B"
//       : marks >= 70
//       ? "C"
//       : marks >= 60
//       ? "D"
//       : "F";
//   return grade;
// };

// let marks = parseInt(prompt("Enter the marks of the student: "));
// console.log(`The grade of the marks is ${parameterShow(marks)}`);

// Question 3
// let carName = prompt("Enter Car Name ");
// let carModel = prompt("Enter Car Model/Brand ");
// let carYear = parseInt(prompt("Enter Car Buying Year"));

// const Car = {
//   Name: carName,
//   model: carModel,
//   year: carYear,
// };

// const changeDetails = () => {
//   let wantToChange = prompt(
//     "Do you want to change car details? (yes/no)"
//   ).toLowerCase();

//   if (wantToChange === "yes") {
//     let changeName = prompt(
//       "Do you want to change the car name? (yes/no)"
//     ).toLowerCase();
//     if (changeName === "yes") {
//       Car.Name = prompt("Enter new Car Name:") || Car.name;
//     }

//     let changeModel = prompt(
//       "Do you want to change the car model? (yes/no)"
//     ).toLowerCase();
//     if (changeModel === "yes") {
//       Car.model = prompt("Enter new Car Model:") || Car.model;
//     }

//     let changeYear = prompt(
//       "Do you want to change the car year? (yes/no)"
//     ).toLowerCase();
//     if (changeYear === "yes") {
//       let newYear = parseInt(prompt("Enter new Car Year:"));
//       Car.year = isNaN(newYear) ? Car.year : newYear;
//     }
//   }
// };

// changeDetails();

// const { Name, model, year } = Car;
// console.log(`Car Name: ${Name}, Model: ${model}, Year: ${year}`);

// Question 4

// let normalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const isPrime = (number) => {
//   if (number < 2) {
//     return false;
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// };
// let primeArray = normalArray.filter((number) => isPrime(number));
// console.log(primeArray);

// Question 5
//  map() - Transforming Data
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// //  filter() - Filtering Data
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// //  reduce() - Aggregating Data
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// // Real-World Example
// const users = [
//   { name: "Alice", age: 25, active: true },
//   { name: "Bob", age: 30, active: false },
//   { name: "Charlie", age: 35, active: true }
// ];

// const activeUsers = users.filter(user => user.active);
// const activeUserNames = activeUsers.map(user => user.name);
// const totalAge = activeUsers.reduce((sum, user) => sum + user.age, 0);

// console.log(activeUserNames);
// console.log(totalAge);

// Question 6
// const requestData = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("The error occured is " + err);
//   }
// };
// requestData();

// Question 7
// const person = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     zip: "10001",
//   },
//   contactDetails: {
//     email: "johndoe@example.com",
//     phone: "9876543210",
//   },
// };

// const phoneNumber = person.contact?.phone;
// // If contactDetails is change to contact the data can be accessed
// console.log(phoneNumber);
