'use strict';

let unsortedArray = [9, 744, 2, 91, 13, 510, 75, 198, 1];

// Note: I am using the Quokka extention for VSCode to see the printout of each variable. If you do not have this exptension installed and running on the current file, you can get the output by simply console.log-ing the variables and viewing them in the browser, as we normally do. You can also play around with these examples in a repl.
unsortedArray;

// Without a callback, .sort() will sort an array of numbers 0-9 correctly or an array of strings alphabetically
// The callback used on line 13 is the most common callback and uses sorting algorithms under the hood
// The specific type of sort even varies based on the browser and number of elements in your array!
// Want to know more? Stay tuned until 401 :)
// unsortedArray.sort();
unsortedArray.sort((a, b) => a - b);

// .sort() mutates the original array
unsortedArray;

// .reverse() will also mutate the original array
unsortedArray.reverse();
unsortedArray;

// .slice() will return the element you asked for, not including the element at the position of the second argument, but the original array is not modified. In other words, .slice() does not mutate the original array.
let pizzaChoices = ['Veggie', 'Margherita', 'Pepperoni', 'Cheese'];
let oneSlice = pizzaChoices.slice(1, 2);
oneSlice;
pizzaChoices;

// .splice() will return the elements you asked for, including the element at the position of the second argument, and will also mutate the original array. 
let oneSplice = pizzaChoices.splice(2, 3);
oneSplice;
pizzaChoices;

// .forEach() will not mutate the original array
let myChoices = () => {
  pizzaChoices.forEach(choice => console.log(`I would like a slice of ${choice} pizza.`));
} 
myChoices();

pizzaChoices;