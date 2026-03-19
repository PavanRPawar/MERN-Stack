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

// let, const & var keywords
let age = 23;
let cgpa;
cgpa = 8.43;
const pi = 3.14;
var number = 151;

// Practice Questions
age = 23
age + 2
console.log(age);
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;
console.log(avg);

// Assignment Operators
age += 1      // age = age + 1
age -= 1      // age = age - 1
age *= 1      // age = age * 1

// Unary Operators
age++       // age += 1
age--       // age -= 1
// ++age    >> pre-increment (change, then use)
// age++    >> post-increment (use, then change)

// Practice Questions
// What is the value of each variable in each line of code?
let num = 5;                // num = 5
let newNum = num++;         // newNum = 5, num = 6
newNum = ++num;            // newNum = 7, num = 7

// Identifier 

// Boolean
let isAdult = false;
console.log(typeof(isAdult));

// TypeScript
// Static(fixed) Typed, where JS is dynamic(change) typed

// String in JS
let firstName = 'Pavan'
console.log(firstName);

// String Indices
let fullName = "Pavan Pawar"
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName.length);
