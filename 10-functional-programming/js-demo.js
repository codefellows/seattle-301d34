// functional javascript for functional people

// warmup: how would you write the following using forEach instead of a for loop?
// for brownie points: can you do it on one line?

let fruits = ['apple', 'banana', 'canteloupe', 'dragonfruit'];

for (let i = 0; i < fruits.length; i++) {
  console.log(`I ate ${i} ${fruits[i]}.`);
}

fruits.forEach( (value, index) => {
  console.log(`I ate ${index} ${value}.`);
});

// get to just even length fruits?

// for each element in the array:
//    if the element length is even:
//      eat it
//    else
//      don't
//

// set up variable for the fruits I want
let goodFruit = [];

for(let i = 0; i < fruits.length; i++) {
  if (fruits[i].length % 2 === 0) {
    goodFruit.push(fruits[i]);
  }
}

// with filter, life is better!
// Filter is used for taking an array and cutting down on what's inside of it.

fruits.filter( fruit => fruit.length % 2 === 0);

// that filter is the same as:

let isEven = (fruit) => {
  return fruit.length % 2 === 0;
};

fruits.filter(isEven);

// which is also the same as

fruits.filter( fruit => {
  return fruit.length % 2 === 0;
});

// We use map to take an array and transform each element.

// Let's find the length of all the fruits!

fruits.map(fruit => fruit.length);

// And their first characters!

fruits.map(fruit => fruit[0]);

// Lastly, reduce is useful when we have an array and want to turn it into a single answer.
// Let's find the total weight of our fruits!

fruits.reduce ( (prevAns, fruit) => prevAns + fruit.length, 0);

// Or create a beautiful fruit tray!

fruits.reduce( (prevAns, fruit) => prevAns + fruit[0], '');

// Or find the longest fruit!
fruits.reduce( (prevAns, fruit) => (prevAns.length > fruit.length) ? prevAns : fruit);


// bonus content: our version of map!
function myMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

myMap(fruits, fruit => fruit[0]);