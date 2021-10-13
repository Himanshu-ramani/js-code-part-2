'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
// ES6
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
// ES5
//numPassengers= numPassengers || 1;
// price = 199
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('a123', 2);
// createBooking('a123', 2, 800);

// set peramiter as default

// createBooking('HR123' ,undefined , 1000)
///
//
///
///
//pass by value VS pass by refrence

const flight = 'LH234';
const jonas = {
  name: 'himanshu',
  passport: 538992343687,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 538992343687) {
    console.log('checkIn');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// callback function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transform = function (str, fn) {
  console.log(`Oringial string : ${str}`);
  console.log(`transform string : ${fn(str)}`);
  console.log(`tramsnform by : ${fn.name}`);
};

transform('javascript is the best!', upperFirstWord);
transform('javascript is the best!', oneWord);

//
//JS uses callbacks all the time

const high5 = function () {
  console.log('hi');
};
// document.body.addEventListener('click', high5);
['jonas', 'martha', 'adam'].forEach(high5);

//
//
//function returing function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greethey = greet('hey');
greethey('jonas');
greet('hello')('himanshu');

//with arrow function

const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greetArr('hi')('himanshu');

//
//
//call and apply mathod
console.log('-------------------------------------');
const lufthansa = {
  airline: 'lufthanz',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} bookedd aseat on ${this.airline} flight ${this.iatacode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'himanshu ramani');
lufthansa.book(235, 'parth ramani');

const eurowings = {
  airline: 'eurowings',
  iatacode: 'EW',
  bookings: [],
};
// calling by call method
// bowring function from another object is called call method
const book = lufthansa.book;
book.call(eurowings, 23, 'jay patal');
// showing arry include in object also
console.log(eurowings);

// net airlines

const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'KX',
  bookings: [],
};

// with call method

book.call(swiss, 523, 'mary copper');

// Apply method

const flightData = [234, 'Raj Patel'];
book.apply(swiss, flightData);
// same

book.call(swiss, ...flightData);

// bind method
//book.call(eurowings , 12 , 'himanshu ramani')
// bind take object as a first argument

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'himanshu patel');

// we can add argument in bind method

const bookEW23 = book.bind(eurowings, 23);
// and now all passanger flight book in 23 flightnumber
bookEW23('himanshu ramani');

//// with event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy')
// .addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

// partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value + 0.23
console.log(addVAT(100));

// function retuen a function

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// coding challange
//   const poll = {
//     question : 'what is your favorite programming language?',
//     option : ['0: javascript' , '1:python' , '2:rust' , '3:c++'],

//   answer : new Array(4).fill(0),
//   registerNewAnswe(){
//   // get answer
//    const answer = Number(
//      prompt(`${this.question}\n${this.option.join('\n')}\n(write option number)`)
//    );

//    console.log(answer);

//    //Register answer
//    typeof answer === 'number' && answer < this.answer.length && this.answer[answer]++;

//    this.displayResults();
//    this.displayResults('string')
// },
// displayResults(type = 'array'){
//   if(type === 'array'){
//     console.log(this.answer);
//   }else if(type === 'string'){
//     //poll result are 12 , 3, 4, 2
//     console.log(`poll results are ${this.answer.join(', ')}`);
//   }
// } }

// poll.registerNewnumber

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswe.bind(poll))

// iife immediatly inwoked function

(function () {
  console.log('hi am himanshu');
})();

// its work on arrow function too

(() => console.log('hi i am himu'))();

//clouser
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// coluser example

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

// example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passenger`);
    console.log(`there are 3 groups, each with${perGroup} passengers`);
  }, wait * 1000);
  console.log(`we will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);

//coding challange

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
