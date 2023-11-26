
/*
let score = "33";
console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score);
console.log(typeof valueNumber);
console.log(valueNumber);

console.log("Score1 : ");

let score1 = "33abc";
console.log(typeof(score1));
let valueNumber1 = Number(score1);
console.log(typeof valueNumber1);
console.log(valueNumber1);

console.log("Score => ");
let score2 = null;
console.log(typeof score2);
let valueNumber2 = Number(score2);
console.log(typeof valueNumber2);
console.log(valueNumber2);

let score3 = undefined;
console.log(typeof score3);
let valueNumber3 = Number(score3);
console.log(typeof valueNumber3);
console.log(valueNumber3);
*/
/*
"33" => 33
"33abc" => NaN
true => 1 ; false => 0;

*/
// convert Integer 1 to boolean
let isLoggedIn = 1;
let BooleanIsLoggedIn = Boolean(isLoggedIn);
console.log(BooleanIsLoggedIn);// true

// convert EmptyString to boolean
let isLoggedIn1 = "";
let BooleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(BooleanIsLoggedIn1);// false

// convert String to boolean
let isLoggedIn2 = "Ankit";
let BooleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(BooleanIsLoggedIn2);// true


// 1 => true; 0 => false
// "" => false
// "Hitesh" => true;


// convert Number to String 
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
