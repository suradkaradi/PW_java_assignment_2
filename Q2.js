//The comma (,) operator evaluates each of its operands (from left to right) and returns 
//the value of the last operand. This is commonly used to provide multiple updaters to a for
// loop's afterthought.

let x = 1;

x = (x++, x);

console.log(x);


x = (2, 3);

console.log(x);
