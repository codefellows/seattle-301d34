// we cannot reassign a constant variable
const num = 5; // use let here instead
num = 6;
console.log(num);
// use let when reassigning numbers, strings, and Booleans

// this will work with const as well
let myArray = ['Gary', 'Charlotte'];
// we can push into an array that is assigned to a const as long as it stays as an array and is not reassigned to another data type
myArray.push('Neville');
console.log(myArray);

// this will thrown an error, even though they are both arrays
// each array holds its on place in memory so they are not the same array
const myArray = [];
myArray = [];

// we cannot declare a constant variable without giving it a value
// we can, however, do so with let
const num;
num = 6;

const myObj = {
  name: 'Allie'
}
// these work because myObj is still assigned an object, we are simply changing the properties of the object, just like we changed the values of the elements in the array above
myObj.name = 'Allison';
myObj.faveColor = 'blue';
console.log(myObj);

// this variable "sum" is in global scope
let sum = 0;
function add(num1, num2) {
  // if we declared "sum" here, it would be in function scope (also called block-level scope)
  sum = num1 + num2;
  return sum;
}
add(4, 8);
console.log(sum);
