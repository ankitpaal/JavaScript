const user = [
  { firstName: "Ankit", lastName: "Pal", age: 26},
  { firstName: "Rahul", lastName: "Katiyar", age:27},
  {firstName: "Rajan", lastName: "kashyap", age: 28},
  {firstName: "rohit", lastName: "Pal", age: 26}
];

// acc = { 26: 2 , 27: 1, 28: 1}

const output = user.reduce(function (acc, curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  }
  else{
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

const output1 = user.filter((x) => x.age>26)
.map((x) => x.firstName);

console.log(output1);