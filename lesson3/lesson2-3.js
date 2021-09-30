// Arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));

const subs = (a, b, c) => {
    return a * b * c;
}
// console.log(subs(2, 3, 5));

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
// console.log(arr.reverse());
// Array elementlarini saralash
// console.log(arr.sort());
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


// OBJECTS
const Person = {
    firstName: "Bek",
    lastName: "Edison",
    age: 23,
    gender: "male"
}
let nameKey = "Name"
// console.log(Person.age);
// console.log(Person['age']);
// console.log(Person['first' + nameKey]);
// console.log(Person['last' + nameKey]);

// Loops (Takrorlanuvchi jarayonlar)
// For
for (let a = 1; a <= 10; a++){
    // console.log(a);
}

// Array elementlarini ro`yhat qilib chiqaramiz
/* 1. Mark
   2. Bob
   .....
   n. Jonas */
let studentsList = ["Mark", "Tom", "Lewis", "Bob"];
for (let i = 0; i < studentsList.length; i++){
    // console.log(studentsList[i]);
}
// TODO: Teskari sanoq dasturini tuzing

// While
let i = 1;
while (i <= 10) {
    // console.log(i);
    i++;
}
// console.log(Math.trunc(Math.random()*10));