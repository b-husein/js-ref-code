// FOR LOOP SYNTAX

/*
for (statement 1; statement 2; statement 3) {
    //block of code to be executed
}
*/

/* for (x = 0; x <= 7; x++) {
  if (x === 3) {
    console.log('Hey there, it is lunch time!');
    continue;
  }
  if (x === 4) {
    console.log('We will continue after break!');
    break;
  }
  console.log('The number is ' + x);
} */

// x++ it's the same as x = x + 1;

// WHILE LOOP

// let x = 0;

// while (x < 5) {
//   console.log('The number is: ' + x);
//   x++;
// }

// DO WHILE LOOP

// let x = 11;

// do {
//   console.log('The number is ' + x);
//   x++;
// } while (x <= 10);

// LOOP THROUGH ARRAYS:

// let heroes = ['Hulk', 'Thor', 'Hawkeye', 'Captain America'];

// for (let x = 0; x < heroes.length; x++) {
//   console.log(heroes[x]);
// }

// forEach loop

// heroes.forEach(function (hero) {
//   console.log(hero);
// });

// map() method:

// let heroes = [
//   { name: 'Captain America', ability: 'superhuman soldier' },
//   { name: 'Superman', ability: 'ultimate hero' },
//   { name: 'Hulk', ability: 'Hulk smash' },
//   { name: 'Batman', ability: 'intelligent' },
// ];

// let abilities = heroes.map(function (hero) {
//   return hero.ability;
// });

// console.log(abilities);

// for in loop - loop through objects

let myInfo = {
  myName: 'John',
  myAge: 28,
  myPet: 'dog',
  myCar: 'BMW',
};

for (let a in myInfo) {
  console.log(`${a} : ${myInfo[a]}`);
}
