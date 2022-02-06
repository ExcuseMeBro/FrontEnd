const user = {
  name: "Mark",
  age: 45,
  email: "mark@gmail.com",
};
/* TODO: Objectning barcha keylarini pechat qiliuvchi dastur tuzing */
console.log("--------KEYS-------");
for (let a of Object.keys(user)) {
  console.log(a);
}
/* TODO: Objectning barcha valuelarini pechat qiliuvchi dastur tuzing */
console.log("--------Values-------");
for (let b of Object.values(user)) {
  console.log(b);
}

let valueArray = Object.values(user);
console.log(valueArray);

const users = {
  Mark: {
    age: 45,
    email: "mark@gmail.com",
  },
  Lewis: {
    age: 25,
    email: "lewis@gmail.com",
  },
  Bob: {
    age: 21,
    email: "bob@gmail.com",
  },
};
let values = Object.values(users);
console.log(values);

let keysWithValues = Object.entries(users);
console.log(keysWithValues);
/* TODO: Har bir foydalanuvchi uchun quyidagi qatorni chiqaruvchi dastur tuzing*/
/* *
Mening ismim Mark. 45 yoshdaman. Emailim mark@gmail.com
Mening ismim Lewis. 25 yoshdaman. Emailim lewis@gmail.com
Mening ismim Bob. 21 yoshdaman. Emailim bob@gmail.com
....... */
for (const [name, { age, email }] of keysWithValues) {
  console.log(`Mening ismim ${name}. ${age} yoshdaman. Emailim ${email}`);
}

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
console.log(mySet);
let myWordSet = new Set("Jhonatan");
console.log(myWordSet);

/* Set elementlari sonini topish */
console.log(mySet.size);

/* Set da berilgan element bor yoki yo`qligini tekshirish */
console.log(mySet.has("apple"));
console.log(mySet.has("Apple"));

/* Setga element qo`shish*/
mySet.add("blueberry");
console.log(mySet);

/* Setdan element o`chirish */
mySet.delete("apple");
console.log(mySet);

/* Setni barcha elementlarini o`chirish */
// mySet.clear();
// console.log(mySet);

/* .forEach function with Set */
console.log("*******************************");
mySet.forEach((element) => console.log(element));

/* Setda index tushunchasi yo`q */
// console.log(mySet[0]);

// MAPS
const myMap = new Map();
myMap.set("book", "kitob");
myMap.set("sun", "quyosh");
myMap.set("sky", "osmon");
myMap.set("train", "poyezd");
console.log(myMap);

console.log(myMap.get("sun"));
/* Mapda element bor yoki yo`qligini hisoblash! */
console.log(myMap.has("sun"));
console.log(myMap.keys());
console.log(myMap.values());
// myMap.clear();
// console.log(myMap);
console.log(myMap.size);