 function x(){
 // var i = 1;
  for(var i = 1; i<= 5; i++){
    function close(x){
      setTimeout(function() {
        console.log(x);
    
      }, x * 2000);
    }
    close(i);
   
  }
  
  console.log("Namaste javaScript");
 }
 x();