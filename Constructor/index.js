// Create constructor
// defining a constructor
function User(name){
  this.name = name;
  this.isAdmin = false;
}
// using a contructor
let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);
// contructor propertise

function Person(name,age){
  this.name = name;
  this.age = age;
}
// sherd propertise
Person.prototype.sayHi = function(){
  console.log(`hi my name is ${this.name}`);
}
const isUser = new Person("Johan",30);
console.log(isUser.name);
console.log(isUser.age);
isUser.sayHi();
console.log(isUser);

function SmallUser(){
  this.name = "john";
  return;
}
console.log(new SmallUser().name);

// methods in constrctor
function User1(name){
  this.name = name;
  this.sayHi = function(){
    console.log("my name is: " + this.name);
  };
}
let john =  new User1("Johan");
john.sayHi();


// assignment 

/* function A(){
  this.name = "Ankit";
  this.age = 30;
}
function B(){
  this.name = "Ankit";
  this.age = 30;
}
let a = new A();
let b = new B();
console.log(a == b); */

let obj = {};
function A(){
  return obj;
}
function B(){
  return obj;
}
console.log(new A() == new B());

// assignment create calculator
function Calculator(){
  this.read = function(){
    this.a = +prompt('a?',0);    
    this.b = +prompt('b?',0);    
   };
   this.sum = function(){
    return this.a + this.b;
   };
   this.mul = function(){
    return this.a * this.b;
   };
}
let calculator = new Calculator();
calculator.read();
alert("Sum =" + calculator.sum());
alert("Mul =" + calculator.mul());

// Create new Accumulator

function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
    this.value += +prompt('how much to add?', 0);

  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);