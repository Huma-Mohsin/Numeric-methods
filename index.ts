// Numeric Methods In JS:-

// Here's a list of numeric methods in JavaScript along with their definitions:

// parseFloat(string):
// Definition: Parses a string argument and returns a floating-point number.

// parseInt(string, radix):
// Definition: Parses a string argument and returns an integer.

// toFixed(digits):
// Definition: Formats a number using fixed-point notation with a specified number of digits after the decimal point.

// toPrecision(precision):
// Definition: Formats a number to a specified precision.

// isNaN(value):
// Definition: Returns true if the value is NaN (Not a Number); otherwise, returns false.

// isFinite(value):
// Definition: Returns false if the value is NaN, Infinity, or -Infinity; otherwise, returns true.

// Math.abs(x):
// Definition: Returns the absolute value of a number.

// Math.ceil(x):
// Definition: Returns the smallest integer greater than or equal to a number.

// Math.floor(x):
// Definition: Returns the largest integer less than or equal to a number.

// Math.round(x):
// Definition: Rounds a number to the nearest integer.

// Math.max(...values):
// Definition: Returns the largest of zero or more numbers.

// Math.min(...values):
// Definition: Returns the smallest of zero or more numbers.

// These methods are commonly used for various numeric operations and calculations in JavaScript.

//solution:-

let weight:string="1500.50324";//Assuming a weight of luggage.

//for parsefloat
console.log("string converted to a floating point number as:", parseFloat(weight) );

//for parseInt
console.log("string converted to an Integer as:", parseInt (weight));

//for NAN 
console.log(`is ${weight} a number ?: `,isNaN(parseFloat(weight)));//Returns true if the value is NaN (Not a Number) or 
//isNaN() function in JavaScript checks if the provided value is "Not a Number". However, when we pass a string like "1500.50324" to isNaN(), JavaScript tries to convert it into a number before performing the check. If it can successfully parse the string into a number, it returns false, indicating that it is a number.

//tofixed
let percentage:number=98.65789
console.log("Fixed Decimal Value:", percentage.toFixed(2));//property to fixed doesnot apply on string so we had to assume numeric data.

//to precision
console.log("Percision as:", percentage.toPrecision(5));// it formats the number stored in the variable percentage to have a precision of 5 digits. This means that the output will have a total of 5 digits, including both integer and decimal parts, as necessary. If necessary, the number will be rounded or padded with zeros to meet this precision.

//isfinite
console.log(`Is ${percentage} a finite? :`,isFinite(percentage));

//Math.abs
console.log("Absolute value:", Math.abs(percentage));
console.log("Absolute value:", Math.abs(-4.589));

//Math.ceil
console.log(`ceil value of ${percentage}:`, Math.ceil(percentage));
//Returns the smallest integer greater than or equal to a number.

//Math.floor
console.log(`Floor value of ${percentage}:`, Math.floor(percentage))//Returns the largest integer less than or equal to a number.

//Math.round
console.log(`Round a ${percentage}:`, Math.round(percentage)) //Rounds a number to the nearest integer.

//Math.max: 
console.log("max value:", Math.max(10,39,76));//Returns the largest of zero or more numbers.

//Math.min 
console.log("min value:", Math.min(2,4,6))//Returns the smallest of zero or more numbers.

//to String 
console.log(`Is ${percentage} an integer?:`, Number.isInteger(percentage));
console.log(`Percentage as a string:`, percentage.toString());//In this corrected version, the first line checks if percentage is an integer using Number.isInteger(), and the second line converts percentage into a string using the toString() method.

//Author Huma Mohsin