let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2);// false

/* let id = Symbol("id");
alert(id);  //TypeError: Cannot convert a Symbol value to a string */

// If want to cnvert a string then Explicitly convert
let id3 = Symbol("id");
alert(id3.toString()); //Symbol(id)
alert(id3.description); // id


// Hidden propertise

let age = Symbol("age");

let user = {
  name: "ankit",
  class: "MCA",
  [age]: 26
};
console.log(user);

// another way
let User1 = {
  name: "ankit",
  class: "MCA",
  [age]: 26
};

