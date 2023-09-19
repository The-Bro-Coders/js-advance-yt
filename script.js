// NaN

let probablyNaN = parseInt("HII")
let notNaN = parseInt("7") // prints "7"
console.log(probablyNaN) // prints " NaN"

// Null and Undefined

// Null

let myName = null; // Explicitly assigning null
console.log(myName); // Output: null

// Checking type using typeof
console.log(typeof myName); // Output: object

// Checking if it's falsy
if (!myName) {
  console.log("userName is falsy"); // This will be printed
}

// Undefined
let userAge;
console.log(userAge); // Output: undefined

// Checking type using typeof
console.log(typeof userAge); // Output: undefined

// Checking if it's falsy
if (!userAge) {
  console.log("userAge is falsy"); // This will be printed
}



// Values vs References

// Primitive values
let num1 = 10;
let num2 = num1; // Copying the value
num2 = 20; // Modifying num2 doesn't affect num1
console.log(num1); // Output: 10
console.log(num2); // Output: 20

let str1 = "Hello";
let str2 = str1; // Copying the value
str2 = "Hi"; // Modifying str2 doesn't affect str1
console.log(str1); // Output: "Hello"
console.log(str2); // Output: "Hi"

// Reference values

let arr1 = [1, 2, 3];
let arr2 = arr1; // Copying the reference
arr2.push(4); // Modifying arr2 affects arr1
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]


let obj1 = { name: "Alice" };
let obj2 = obj1; // Copying the reference
obj2.name = "Bob"; // Modifying obj2 affects obj1
console.log(obj1.name); // Output: "Bob"
console.log(obj2.name); // Output: "Bob"


// Immutabe objects and prototypes

// Immutable objects

const person = Object.freeze({ name: "Alice", age: 30 });
person.age = 31; // This assignment will have no effect
console.log(person.age); // Output: 30

// Prototypes

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const person1 = new Person("Alice");
  person1.sayHello(); // Output: "Hello, my name is Alice"

  
// Number vs Bigint

// Number

console.log(typeof 1); // Output: number
let num = 9007199254740991;

console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // Output: 9007199254740992


// BigInt

console.log(typeof 1n); // Output: bigint
console.log(typeof BigInt(1)); // Output: bigint
console.log(1n === BigInt(1)); // Output: true

let bigNum = 9007199254740991n;

