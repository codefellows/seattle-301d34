'use strict';

// PAY ATTENTION TO THE ORDER IN WHICH THE CONSOLE.LOG MESSAGES APPEAR IN THE BROWSER CONSOLE
// WHY ISN'T THE AJAX REQUEST TO THE POKEMON API APPEAR AS THE FIRST CONSOLE.LOG MESSAGE?
// THINK ABOUT THE ORDER OF THE CONSOLE.LOG MESSAGES IN THE LAST EXAMPLE

// can be used for any AJAX request
$.ajax({

});

// shorthand to specifically make a GET request
$.get();

$.get();

// this will work for a text file
$.get();

// go a step further and only accept JSON
// this will not work because it is not JSON
$.getJSON();

// will not fail if it receives properly formatted JSON, even if the file extension is not .json
$.getJSON();

// will fail if if receives malformed JSON, even if the file extension is .json
// no error handling here, so it will fail silently with no feedback to the user
$.getJSON();

// this will skip the .then altogether and move past it to the .catch
$.getJSON()
  .then()
  .catch();

// larger example
// handle the error at every point so that, if an error occurs, you'll know where it occurred
$.getJSON('data.json')
  .then()
  .catch()
  .then()
  .catch()
  .then()
  .catch();