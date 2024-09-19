const radius = [3,1,2,4];
 const area = function (radius){
  return 2* Math.PI * radius*radius;
 }
 const cicumfrence = function(radius){
  return 2* Math.PI * radius;
 }
 const daiometer = function(radius){
  return 2*radius
 }

 const calculator = function (radius , logic){
  const  output = [];
  for(let i =0; i< radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
 }
 console.log(calculator(radius,area));
 console.log(calculator(radius, daiometer));
 console.log(calculator(radius, cicumfrence));