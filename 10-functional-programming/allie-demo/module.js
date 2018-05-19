'use strict';

// This is the only time we will use "var" in 301. It has to do with the temporal dead zone and hoisting. See the reading in day 10 for more details.
// We are declaring a single global variable called app. It is an object we are going to attach properties to.
var app = {};

// IIFE - Immediately-Invoked Function Expression
// An IIFE is a function that is defined and then immediately invoked. To turn a normal function into an IIFE, wrap the entire function declaration in parentheses, then immediately invoke it with opening and closing parentheses, just like you would invoke any other function.
// "module" is just a parameter here. It represents the "app" argument which is passed in as an argument below when the IIFE is invoked.
// "module" (the parameter name) and "app" (the argument name) are not required names by JavaScript, but are convention.
(function(module) {
  
  // At this point, these two variables are scoped within the IIFE
  let gary = 'Gary';
  let charlotte = 'Charlotte';

  // We can decide which properties to add to our object. Anything that is attached to the object can then be accessed outside of the IIFE's scope. Anything that is NOT attached to the object will not be available in the global scope as a property of the object.
  // Now, the app object will have a property called gary whose value is "Gary".
  // The charlotte property is still scoped to the IIFE's code block and the console.log message below will return "undefined".
  module.gary = gary;
})(app)

console.log(app.gary);
console.log(app.charlotte);

// Note, we can use an arrow function here and get the same result. So the IIFE could be defined above as: (module) => {} etc....
