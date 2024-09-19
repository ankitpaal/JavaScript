// What is callback function in javaScript
 /*setTimeout(function () {
  console.log("timer");
 }, 5000);

 function x(y){
  console.log("x");
  y();
 }
 x(function y(){
  console.log("y");

 });*/
function attachEventListerns(){
  let count =0;
 document.getElementById("ClickMe").addEventListener("click", function xyz(){
  console.log("Button clicked", ++count);
 });
}
attachEventListerns(); 
 

// JavaScript is a synchonous and Single-threaded language

// BVloking the main thread

// power of callback 

// deep about event listeners

// Closure demo with Event listeners

// Scope Demo with Event listeners

// garbage Collection & removeEventListeners