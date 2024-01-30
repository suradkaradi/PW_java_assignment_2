// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands: a condition followed by a question mark (?), then an 
// expression to execute if the condition is truthy followed by a colon (:), 
// and finally the expression to execute if the condition is falsy. 
// This operator is frequently used as an alternative to an if...else statement.

// syntax.
// 	condition ? exprIfTrue : exprIfFalse

// program to check if the number is even or odd
// take input from the user
const number = 12;  

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);