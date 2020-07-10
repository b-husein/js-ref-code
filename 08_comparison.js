/* 
if (condition is true) {
    do something
} else {
    do something else; 
}
*/

/* let Batman = false;
if (Batman) {
  console.log('Batman is cool.');
} else {
  console.log('Superman is cooler.');
} */

// JavaScript comparison operators:

/* 
< - less than; 
> - more than; 
<= - less than or equal to; 
>= - more than or equal to; 
= - assignment operator; 
== - equal to; 
=== - strict equal; 
!= - not equal; 
*/

/* let temperature = 29;
if (temperature <= 28) {
  console.log('Your AC should be off.');
} else if (temperature >= 34) {
  console.log('We stronlgy recommend to turn on your AC now!');
} else if (temperature >= 29) {
  console.log('You can turn on your AC now.');
} */

// EQUAL COMPARISON OPERATOR;

/*
let summer = 'winter';
if (summer == 'summer') {
  alert("It's summer!");
} else if (summer != 'summer') {
  alert("It's not summer!");
}
*/

// let age = '18';
// if (age === 18) {
//   console.log('You can drive!');
// } else {
//   age < 18;
//   console.log('You cannot drive!');
// }

// password validation snippet

// LOGICAL OPERATORS - 'or' - ||; && - 'and'; ternary operator - ?;

/* let myPassword = prompt('Please enter your password: ');

if (myPassword === 'Husein') {
  alert('Hello Husein');
} else if (myPassword === '123') {
  alert('Hello John!');
} else if (myPassword === 'hello' || myPassword === 'there') {
  alert('Hello Mary and Lucas');
} else {
  alert('Sorry, but your access is denied, please try again.');
} */

/* let myName = prompt('Please write your name: ');
let myPassword = prompt('Please write your password: ');

if (myName === 'John' && myPassword === 'John123') {
  alert('You are an admin!');
} else {
  alert('You are NOT an admin!');
} */

// myPassword = prompt('Please write your password: ');

// alert(myPassword === '123' ? 'You are an admin!' : 'You are not an admin!');

// variable name = (condition) ? value1 : value2

let myUser = prompt('Please write your credentials: ');

switch (myUser) {
  case 'John':
    alert('Hi there John!');
    break;
  case 'Lucy':
    alert('Hi there Lucy, long time no see!');
    break;
  case 'Arnold':
    alert('Hi there Arnold.');
    break;
  default:
    alert('Please register as user.');
    break;
}
