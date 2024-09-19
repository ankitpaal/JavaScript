console.log(this);
// Function context
function sayHi(){
  console.log(this);

}
sayHi();
// Method context 
 const user1 = {
  name: "john",
  sayHi: function(){
    console.log(this);
  },
  
 }
 user1.sayHi();


 
