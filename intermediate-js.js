// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

// var originalArray = [1, 2, 3, 4, 5, 6, 7]
//
// arrowFunction = () => {
// 	console.log(originalArray.reverse());
// }
//
// arrowFunction()

// 2. Given the object below, complete the console.log to find specific information:

// var bicycle = {
// 	type: "Roadbike",
// 	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
// 	wheels: {
// 		count: 2,
// 		specs: ["road tires", "AX-7563", "80-115 PSI"],
// 		brand: "Trek"
// 	}
// }

// Log the type of bicycle:
// console.log(bicycle.type)

// Log the bell:
// console.log(bicycle.gear[2])

// Log the PSI:
// console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

// var ourString = "Hello Learn Students!"
//
// function myFunction() {
//   var ourString = "Hello Learn Students!"
//   var howmanyL = /l/gi;
//   var result = ourString.match(howmanyL).length
//   console.log(result);
// }
//
// myFunction()


// 4. Write a function called getFib that returns the first 10 numbers
// of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// let fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//
// function getFib(arr){
// 	let newArr = []
// 	for (let arr = 0; arr <= 10; arr ++ ){
// 		arr = arr + 1
// 		console.log(arr);
// 	}
// 	return newArr
// }
//
// getFib()

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop
// to return a new array of only odd numbers. Copy and paste your code and refactor
// using ES6 syntax.
var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddOnly(arr){
	newArr = arr.filter(arr)
	return arr !== 2
}

console.log(oddOnly(fullArr));

// function oddOnly(arr){
// 	let newArr = []
// 	for ( let i = 0; i <= arr.length; i++ )
// 		if (i % 2 === 0){
// 	 newArr = arr.push
//  }
// }
//
// console.log(oddOnly(fullArr));
