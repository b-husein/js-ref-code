// PRIMITIVE DATA TYPES: string, boolean, number, null, undefined and symbol;

// 01_String:

let myCar = 'BMW';

// 02_Number:

let myAge = 29;

// 03_Boolean:

let married = false;

// 04_Null;

let laptop = null;

// 05_Undefined;

let apple;

// 06_Symbol:

let moon = Symbol();

// REFERENCE DATA TYPES: array, object, function and date;

// 01_Array:

let favoriteFruit = ['apple', 'pineapple', 'watermelon'];

// 02_Object_literal:

let favoriteMovies = {
  Marvel: 'Avengers series',
  DC: 'Justice League',
};

// 03_Function:

let a = 100;
let b = 5;

function multiply(a, b) {
  return a * b;
}

let result = multiply(a, b);

// console.log(result);
// console.log(typeof result);

// 04_Date;

let today = new Date();

console.log(today);
console.log(typeof today);
