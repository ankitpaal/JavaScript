/* let user = {};
alert(user.address.street); */

//let html = document.querySelector('.ele').innerHTML; //script.js:4 Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')

/* let user = {};
alert(user.address ? user.address.street : undefined);// undefind

let html = document.querySelector('.ele') ? document.querySelector('.ele').innerHTML : null;
console.log(html);

let user1 = {};
alert(user1.address ? user1.address.street ? user1.address.street.name : null : null);// null
// anither way code
let user2 = {};
alert(user2.address && user2.address.street && user2.address.street.name); // undefined

// using optional chaining
let user3 = {};
alert(user3?.address?.street); // undefined
// the code short and clean, no duplication at all
 
// example document.querySelector
let html1 = document.querySelector('ele')?.innerHTML; 
console.log(html1); // undefined

let user = null;
alert(user?.address); // undefined
alert(user?.address.street);// undefined
*/


// short-circuting
let x = 0;
let y = 0;
if(x || y){
  console.log("Both x and y are truthy");
}else{
  console.log("One of x or y is falsy");
}
let user = null;
let z = 0;
user?.sayHi(x++);
alert(x);

// other variants: ?.(),?.[]
let userAdmin = {
  admin(){
    alert("I am a admin");
  }
};
let userGest = {};

userAdmin.admin?.();
userGest.admin?.();


