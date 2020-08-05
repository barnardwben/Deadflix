

// // Constructor
// function Deadflix(title, director, year) {
//   this.title = title;
//   this.director = director;
//   this.year = year;
// }

// // Instatiate an Object
// const film1 = new Deadflix('The Big Lebowski', 'Coens Brothers', '1998');

// const film2 = new Deadflix('Blade Runner', 'Ridley Scott', '1982');


// function Shape(name, sides, sideLength) {
//   this.name = name;
//   this.sides = sides;
//   this.sideLength = sideLength;
// }

// // Write your code below here
    
// Shape.prototype.calcPerimeter = function() {
// let result = this.sideLength * this.sides;
// console.log(result);
// }

// let square = new Shape('square', 4, 5);
// square.calcPerimeter();

// class Shape {
//   constructor(name, sides, sideLength) {
//   this.name = name;
//   this.sides = sides;
//   this.sideLength = sideLength;
// }
// }


const signIn = document.querySelector('.signInBtn');
const registryBtn = document.querySelector('.registryBtn');

// signIn.addEventListener('click', logIn);
// registryBtn.addEventListener('click', signUp);

// function logIn() {

// }



class Films {
  constructor(name, director, year) {
    this.name = name;
    this.director = director;
    this.year = year;
  }
}

Films.prototype.info = function() {
  alert(`${this.name}, a film directed by ${this.director}, originally bombed at the box office in ${this.year}, however the film saw later success with popularity rising with the next generation of viewers. ${this.name} is now considered a cult classic.`);
}

let film1 = new Films('The Big Lebowski', 'The Coen Brothers', 1992)

// film1.info();



