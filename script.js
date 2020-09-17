/*
// Function constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function () {
  //   console.log(2016 - this.yearOfBirth);
  // }
}

Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1982, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

var car = {
  maker: 'Toyota',
  model: 'Camry',
  year: '2019',
  price: '21000',
}

var Vehicle = function (maker, model, year, price) {

  this.maker = maker;
  this.model = model;
  this.year = year;
  this.price = price;

  this.discount = function () {
    console.log(this.price - (this.price * 0.15))
  }
}

Vehicle.prototype.tyre = 'new';

var car1 = new Vehicle('Honda', 'RX-D', 2001, 10000);
var car = new Vehicle('Nisan', 'OKP-28', 2011, 13000);

console.log(car1.discount())
console.log(car)
console.log(car.tyre)
*/

//=================================================================
//=================================================================

// Object.create
/*
var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth)
  }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOgBirth = 1988;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOgBirth: { value: 1969 },
  job: { value: 'designer' }
});

*/