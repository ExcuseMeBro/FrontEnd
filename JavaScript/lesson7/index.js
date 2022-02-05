let a = [0, 2, 8, 5];
let b = [1, 5, 4];
a.push(...b);
// console.log(a);

// console.log(Math.max(...a));
// console.log(Math.max(a + b));
// console.log(Math.max("a + b"));

const firstName = "Mark";
let n = [...firstName];
// console.log(n);

// Matn beriladi siz matnda nechta unli harf borligini aniqlang!
// Matnda har bir belgidan nechta borligini aniqlovchi dastur tuzing!
/* 
M - 13,
e - 16,
s - 10 */

0, '', null, NaN, undefined
// console.log(0 && 1);
// console.log(undefined || 0 || false || "Hello" || 13 || null);

// console.log(undefined || 0 || false || "" || "13" || null);

// console.log("----- Not Nullish ------");
// console.log(0 ?? 10);
// console.log('' ?? 10);
// console.log(false ?? 10);
// console.log("----- Nullish -----");
// console.log(null ?? 10);
// console.log(undefined ?? 0);

fruits = [
    "apple",
    "banana",
    "cherry",
    "blueberry",
    "strowberry",
    "pear",
    "lemon",
    "orange",
];

// fruits.forEach(element => {
//     console.log(element);
// });

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let item of fruits) {
//     console.log(`${fruits.indexOf(item)}.${item}`);
// }

// fruits.forEach((element, index) => {
//     console.log(`${index}.${element}`);
// });

// for (const item of fruits.entries()) {
//     console.log(item[0], item[1]);
// }

// const users = [
//     {
//       age: 45,
//       email: "mark@gmail.com",
//     },
//   ];
  
//   let result = users[0]?.name ?? "Foydalanuvchilar ro`yhati bo`sh!";
//   console.log(result);

let index = Math.trunc(Math.random() * fruits.length);
console.log(fruits[index]);