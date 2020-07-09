// an object contains properties and methods;

let car = {
  carName: 'BMW',
  carColor: 'black',
  prodYear: 2010,
  currentYear: 2020,
  isCool: true,
  // an array inside of an object
  features: [
    'dual-zone climate control',
    'cruise control',
    'power windows',
    'push-button ignition',
    'rain-sensing wipers',
    'foglamps',
  ],
  // object inside of an object
  prevOwners: {
    2010: 'Tony Stark',
    2015: 'Bruce Wayne',
    2018: 'Me',
  },
  // a function inside of an object:
  carAge: function () {
    return 2020 - 2010;
  },
};

let myCar;

myCar = car;

// to get a specific value:

myCar = car.carAge();

console.log(myCar);
