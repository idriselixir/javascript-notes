// const num = 5;

// if (num > 0) {
//     console.log("The number is positive");
// }

// else if (num < 0) {
//     console.log("The number is negative");
// } 

// else {
//     console.log("The number is zero");
// }

// ___________________________________________________________________________________
// SWITCH STATEMENT
// let value = 1 ;
// switch(value) {
//     case 0:
//         console.log("value is 0");
//         break
//     case 1:
//         console.log("Value is 1"

//         )
//         break
//     case 2:
//         console.log(
//             "value is 2");
//             break
    
//         default:
//             console.log(
//                 "Value is greater than 2"
//             )

// }


// TERNARY OPERATOR
// _________________________________________________

// let num = 10;
// let result = num >= 0 ? "positive" : "negative";
// console.log(`The number is ${result}.`);


//  USING FOR LOOP
// ________________________________________________________________

// for (initialization; condition; finalExpression) {
//     // code to be executed on each loop iteration
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// OUTPUT [1 2 3 4 5]

// CONTINUE STATEMENT
// ________________________________________________________________________

// for (let i = 1; i <= 10; i++) {
//     if (i === 5 || i === 7) {
//         continue;
//     }
//     console.log(i);
// }

// FOR WHILE LOOP
// _________________________________________________________________________________
// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer loop iteration: ${i}`);

//     let j = 1;
//     while (j <= 2) {
//         console.log(`  Inner loop iteration: ${j}`);
//         j++;
//     }
// }


// DO WHILE LOOP
// ____________________________________________________________________
// SYNTAX 
// do {
//     // code to be executed
// } while (condition);


// EXAMPLE 
// let num = 1;

// do {
//     console.log(num);
//     num++;
// } while (num % 5 !== 0);

  
// FOR LOOP
// _____________________________________________________________________
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


// FOR IN LOOP
// _____________________________________________________________________________________
// const person = {
//     name: "John",
//     age: 30, 
//     occupation: "Engineer"
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }




// declare variables
// let userGuess =0;
// // let randomNumber = Math.floor(Math.random)(1, 10)+1;
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// let attempts =0

// // console.log("this is the user imput", userInput)

//  while(attempts<5){
//     let userInput = parseInt(prompt("guess a number between 1 to 10"))
//     console.log ("this is user input:", userInput)
    
//     if(userInput < randomNumber){
//         console.log("your number is too low")

//     }else if(userInput == randomNumber){
//         console.log("you entered the correct number on your ${attempts} try"); 
//     } else {
//         console.log(userInput, "is not valid number");
//     }
//     attempts++
//  }











// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   function isEven(number) {
//     return number % 2 === 0;
//   }
  
//   function isPrime(number) {
//     if (number <= 1) return false;
//     if (number <= 3) return true;
//     if (number % 2 === 0 || number % 3 === 0) return false;
  
//     for (let i = 5; i * i <= number; i += 6) {
//       if (number % i === 0 || number % (i + 2) === 0) return false;
//     }
  
//     return true;
//   }
  
//   const min = 1;
//   const max = 100;
//   const randomNumber = generateRandomNumber(min, max);
  
//   console.log(`Random number generated: ${randomNumber}`);
  
//   if (isEven(randomNumber)) {
//     console.log('It is an even number.');
//   } else {
//     console.log('It is an odd number.');
//   }
  
//   if (isPrime(randomNumber)) {
//     console.log('It is a prime number.');
//   } else {
//     console.log('It is not a prime number.');
//   }

// _________________________________________________________________________________________
// create a simple console application that generates a random 
// number then checks if the random number is even number ,
//  odd number or prime number 
// function isEven(num) { 
//     // If the remainder when divided by 2 is 0, then the number is even  
//     return num % 2 === 0;
// }
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     // If the number is divisible by 2 or 3, it's not prime.
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     // checking for factors from 5 onwards.
//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }
// function checkNumber(num) {
//     if (isPrime(num)) {
//         console.log(`${num} is a prime number.`);
//     } else if (isEven(num)) {
//         console.log(`${num} is an even number.`);
//     } else {
//         console.log(`${num} is an odd number.`);
//     }
// }
// // Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// checkNumber(randomNumber);



// Function to generate a random integer between min and max (inclusive)
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   // Function to generate an array of random integers
//   function generateRandomArray(length, min, max) {
//     const randomArray = [];
//     for (let i = 0; i < length; i++) {
//       randomArray.push(getRandomInt(min, max));
//     }
//     return randomArray;
//   }
  
//   // Function to find the sum of all numbers in the array
//   function findSum(array) {
//     return array.reduce((sum, num) => sum + num, 0);
//   }
  
//   // Function to determine the largest and smallest values in the array
//   function findMinMax(array) {
//     const min = Math.min(...array);
//     const max = Math.max(...array);
//     return { min, max };
//   }
  
//   // Function to calculate the average of the numbers in the array
//   function calculateAverage(array) {
//     const sum = findSum(array);
//     return sum / array.length;
//   }
  
//   // Function to check how many numbers in the array are multiples of 3
//   function countMultiplesOf3(array) {
//     return array.filter(num => num % 3 === 0).length;
//   }
  
//   // Function to display the array in both its original order and in reverse order
//   function displayArray(array) {
//     console.log("Original Array: " + array.join(", "));
//     console.log("Reversed Array: " + array.reverse().join(", "));
//   }
  
//   // Generate an array of 10 random integers between 1 and 100
//   const randomArray = generateRandomArray(10, 1, 100);
  
//   console.log("Generated Array: " + randomArray.join(", "));
//   console.log("Sum of all numbers: " + findSum(randomArray));
//   console.log("Min and Max: ", findMinMax(randomArray));
//   console.log("Average of numbers: " + calculateAverage(randomArray));
//   console.log("Multiples of 3: " + countMultiplesOf3(randomArray));
//   displayArray(randomArray);
  
//   _______________________

// 1. Generate an array of random integers
const generateRandomArray = (length, min, max) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
};

const array = generateRandomArray(10, 1, 100); // Generates 10 random integers between 1 and 100
console.log("Generated Array:", array);

// 2. Find the sum of all numbers in the array
const sum = array.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// 3. Determine the largest and smallest values in the array
const largest = Math.max(...array);
const smallest = Math.min(...array);
console.log("Largest:", largest);
console.log("Smallest:", smallest);

// 4. Calculate the average of the numbers in the array
const average = sum / array.length;
console.log("Average:", average);

// 5. Check how many numbers in the array are multiples of 3
const multiplesOfThree = array.filter(num => num % 3 === 0).length;
console.log("Numbers that are multiples of 3:", multiplesOfThree);

// 6. Display the array in both its original order and in reverse order
console.log("Original Order:", array);
console.log("Reverse Order:", [...array].reverse());

