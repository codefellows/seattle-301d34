let myArray = [7, 2, 13, 4, 99];

for(let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for(let i of myArray) {
  console.log(i);
}

for(let i in myArray) {
  console.log(myArray[i]);
}

myArray.forEach(function(number) {
  console.log(number);
});


function square(x) {
  console.log(x * x);
}

myArray.forEach(square);