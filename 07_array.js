// array - strings;

let ing1 = 'flour';
let ing2 = 'baking soda';
let ing3 = 'milk';
let ing4 = 'sugar';
let ing5 = 'strawberries';

let ingredients = ['flour', 'baking soda', 'milk', 'sugar', 'strawberries'];

// array - numbers

let numbers = [60, 1, 24, 7, 30, 12, 365];

// mixed data types:

let mixed = [60, 'minutes', true, undefined, null];

// ---------------------------------

let myVar;

let myArray = [60, 1, 24, 7, 30, 12, 365];

// array length;

myVar = myArray.length;

// check if something is array using Array.isArray() method:

myVar = Array.isArray(myArray);

// get a single value from array:

myVar = myArray[1];

// work with strings;

let myVar;
let heroesDC = ['Batman', 'Superman', 'Wonder Woman', 'Green Lantern'];
let villainsDC = ['Lex Luthor', 'Joker', 'Brainiac', 'Deathstroke', 'Darkseid'];

// add a value to our array:

heroesDC[4] = 'Aquaman';
heroesDC[5] = 'Cyborg';

// find index of some value with indexOf method:

myVar = heroesDC.indexOf('Batman');
myVar = heroesDC.indexOf('Cyborg');

// add a value to the last position in array using push() method:

myVar = heroesDC.push('The Flash');

// remove a value from the last position using pop() method:

myVar = heroesDC.pop();

// add a string value to front using unshift() method:

myVar = heroesDC.unshift('The Flash');

// remove a string value from front using shift() method:

// myVar = heroesDC.shift();

// add values using splice() method:

myVar = heroesDC.splice(2, 0, 'Martian Manhunter', 'Booster Gold');

// remove values using splice() method:

// myVar = heroesDC.splice(2, 2);

// console.log(myVar);

// Reverse values in our string using reverse method:

// myVar = heroesDC.reverse();

// merging (concatenating) arrays using concat method:

myVar = heroesDC.concat(villainsDC);

// sort array using sort method:

myVar.sort();

console.log(myVar);
