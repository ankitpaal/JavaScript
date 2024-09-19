/* let massage = "hello";
let pharse = massage;
alert(massage);
alert(pharse);

let user = {
 name: "Anklit"
};
alert(user.name);
let admin = user;
alert(admin.name); // [object object]
admin.user = 'pete';
alert(user.name);

 */
// Comparision by refrence

// cloning and merging 
/* let user1 = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user1) {
  clone[key] = user1[key];
}
clone.name = "pete";
console.log(user1.name);
console.log(clone.name);
console.log(clone); */
 let user = {name: "Ankit"};
 let permission1 = {age: 22};
 let permission2 = {canEdit: true};
 Object.assign(user, permission1, permission2);
console.log(user)
console.log(user.name);
console.log(user.age);
console.log(user.canEdit);
Object.assign(user, {name: "Rahul"});
console.log(user.name);
let clone = Object.assign({},user);
console.log(clone);


// nestig cloning 
let userData = {
  name: "John",
  size: {
    height: 182,
    width: 50
  }
};
console.log(userData.size.height);

let clone1 = Object.assign({}, userData);
console.log(userData.size === clone1.size);


userData.size.width = 60;
console.log(clone1.size.width);


// Structured clone 
 let clone2 = structuredClone(userData);
 console.log(userData.size === clone2.size);