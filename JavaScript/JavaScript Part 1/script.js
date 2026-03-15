console.log("Hello World")

// Variables
let a = 10;
console.log(a);
let name = "Pavan";
console.log(name);

// Data Types
// Primitive types - Number, Boolean, String, Undefined, Null, Bigint, Symbol
console.log(typeof(a));
console.log(typeof(name));

// Numbers
// Positive (14) & Negative (-4)
// Integers (45, -50)
// Floating numbers - with decimal (4.6, -8.9)

// Operations
let num1 = 10
let num2 = 5
console.log(num1 + num2);      // addition
console.log(num1 - num2);      // subtraction
console.log(num1 * num2);      // multiplication
console.log(num1 / num2);      // division
console.log(num1 % num2);      // modulo
console.log(num1 ** num2);     // exponentiation

// NaN
console.log(0/0);
console.log(typeof(NaN));
console.log(NaN - 1);
console.log(NaN * 1);
console.log(NaN + NaN);

// Operator Precendence
// This is the general order of solving an expression
// ()        **        *,/,%        +,-
console.log((2+1)*3);         // 9
console.log(3/1+2**2);        // 7
console.log(4+1*6/2);         // 7
