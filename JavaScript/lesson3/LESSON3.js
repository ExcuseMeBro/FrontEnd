// Function
let a = 15;
function qoshish(b) {
    console.log("Yig`indi: " + (a + b));
}
qoshish(45);

function qoshish(c, b) {
    console.log("Yig`indi: " + (c + b));
}
qoshish(45, '12');

const qoshishArrow = (a, b) => {
    let sum = a + b;
    return sum;
};
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(154, 45));
console.log(qoshishArrow(15, 45));
 
// Arrow function
// => - Caret
// const add = (a, b) => a + b;
//        |     |  |    \  
// funksiya_nomi \  \    \
//           parametrlar caret 

const add = (a, b) => a + b;
console.log(add(2, 3));

const subs = (a, b, c) => {
    a += b;
    return a * b * c;
}
// console.log(subs(2, 3, 5));

function hello(ism) {
    console.log("Assalomu aleykum" + ism);
}
hello("Jack");

// Arrays
let arr = ["Mark", "Tom", "Lewis", "Bob"];
// console.log(arr);
// Array uzunligini aniqlash
// console.log(arr.length);
// Arrayha element qo`shish o`ngdan
arr.push("Jack");
// console.log(arr);
// Arrayga element qo`shish chapdan
arr.unshift("KKK");
// console.log(arr);
// Arraydan element o`chiqish oxiridan (o`ngdan)
arr.pop()
// console.log(arr);
// Arrayni teskari qilish
arr.reverse()
// console.log(arr);
// Array elementlarini saralash
// console.log(arr.sort((a, b) => a - b));
// Arraydan element olish
// console.log(arr[0]);
// Array elementini o`zgartirish
arr[0] = "Tuzik"
// console.log(arr);
// Array map metodi
// console.log(arr.map(item => (item.length > 3)? item: "-"));
// Element Indexini aniqlash
// console.log(arr.indexOf("Bob")); //element topilmasa -1 qaytadi
// console.log(arr.indexOf("Lewis"));
// Elementni arrayda bor yoki yo`qligini tekshirish
// console.log(arr.includes("Bob"));
// Arrayda hamma elementni logga chiqarish
arr.forEach(item => console.log(item));


// Array elementlarini ro`yhat qilib chiqaramiz
/* 1. Mark
   2. Bob
   .....
   n. Jonas */

const arrayVal = ["Mark", 15, true];
// console.log(typeof arrayVal);
// console.log(arrayVal.length);
// console.log(arrayVal[arrayVal.length - 1]);
arrayVal.push(["Kali", "Ubuntu", "Mint"]);
console.log(arrayVal);
arrayVal.unshift('Kali');
console.log(arrayVal);
arrayVal.pop()
arrayVal.reverse();
console.log(arrayVal);
const arr = ['34.5', "4.2", "7.6", "5.2", "8.6", "4.7"];
// console.log(arr.sort((a, b) => a - b).reverse());
// console.log(arr.sort((a, b) => b - a));

let jj = arr.map((a, b) => b);
console.log(jj);
let jd = arr.forEach((a, b) => console.log(b));
console.log(jd);

console.log(arr.indexOf('7.6'));

console.log(arr.includes("7.6"));
