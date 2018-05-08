'use strict';

document.getElementsByTagName('h2');
jQuery('h2');
$('h2');

document.getElementsByClassName('theClassName');
$('.theClassName');

document.getElementById('idName');
$('#idName');

$('nav > ul');

$('h2').attr('data-potato', 'mashed');

// document.getElementById('idName');
// .textContent
// parent.appendChild(child);

$('ul').append('<li>List Item 1!</li>');
$('ul').append('<li>List Item 2!</li>');
$('ul').append('<li>List Item 3!</li>');
$('ul').append('<li>List Item 4!</li>');

// $(document).ready(function() {
//   alert('DOM is loaded!');
// });

// shorthand
$(function() {
  alert('DOM is loaded!');
});