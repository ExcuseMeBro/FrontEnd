const user = {
  name: "Mark",
  age: 45,
  email: "mark@example.com",
};
// console.log(Object.keys(user));
// console.log(...Object.keys(user));

let userKeys = Object.keys(user);

// userKeys.forEach(key => console.log(key));

// userKeys.map(key => console.log(key));

for (let i of userKeys) {
  // console.log(i);
}

let aa = 0;
while (aa < userKeys.length) {
  // console.log(userKeys[aa]);
  aa++;
}

for (let i = 0; i < userKeys.length; i++) {
  // console.log(userKeys[i]);
}
/* 
name
age
email */
// console.log(Object.keys(user));

const users = {
  Mark: {
    age: 45,
    email: "mark@gmail.com"
  },
  Lewis: {
    age: 25,
    email: "lewis@gmail.com"
  },
  Bob: {
    age: 21,
    email: "bob@gmail.com"
  },
};
// let values = Object.values(users);
// console.log(values);
// let s = 0;
// values.forEach(item => s += item.age);
// console.log(Math.trunc(s/values.length));

let keysWithValues = Object.entries(users);
// console.log(keysWithValues);

// keysWithValues.forEach(
//     item => 
//     console.log(`Mening ismim ${item[0]}. ${item[1].age} yoshdaman. Emailim ${item[1]['email']}!`)
//     );

// SETS
let mySet = new Set([
    "apple",
    "orange",
    "pear",
    "lemon",
    "apple",
    "orange",
    "pear",
    "lemon",
  ]);
  let a = [];
    mySet.forEach(item => a.push(item));
    // console.log(a);

    // MAPS
const myMap = new Map();
myMap.set("book", "kitob", "dsfdf");
myMap.set("sun", "quyosh");
myMap.set("sky", "osmon");
myMap.set("train", "poyezd");
console.log(myMap);