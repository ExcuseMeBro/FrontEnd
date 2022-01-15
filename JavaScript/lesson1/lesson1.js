// Case lar
/* JavaScript dasturlash tilida `cemoCase` da yozish best practise hisoblanadi! */
/* Masalan Pascal dasturlash tilida `PascalCase` ishlatiladi
Python dasturlash tilida esa `snake_case`! */
/* Har bir dasturlash tilida o`garuvchilarni nomlash shu tarzda amalga oshiriladi */
// O`zgaruvchilarni e'lon qilish
var name = "Mark"; /* eski versiyalarda `var` ishlatilardi */
let firstName = "Bob"; /* yangi ecmascript versiyalarida `let` ishlatiladi */
console.log("Hello " + firstName); /* chiqarish operatori */
/* O`zgarmaslarni e'lon qilish uchun `const` kalit so`zidan foydalaniladi */
const PI = 3.1415;
console.log(PI);
//JavaScriptda tiplar {Data Types}
/* JavaScriptda tiplar asosan 2 ta asosiy guruhga bo`linadi. Bular
`primitive` va `object` tiplardir. */

/*1. Primitive types */
let lastName = "Ma";

/*2. Object types  */
let person = {
  name: "Tom",
  lastName: "Reader",
  age: 15
};
// O`zgaruvchini tipini aniqlash
console.log(typeof(person));

/* Primitive tiplar: number, string, boolean, undefined, null, bigInt(ES2020) */
let a = 15; //number
console.log(typeof a);
let b = "Jonas"; //string
console.log(typeof b);
let c = true; //boolean
console.log(typeof c);
let d = 1.2456; //number
console.log(typeof d);
let kid; //undefined
console.log(typeof kid);
/* bigInt -- katta sonlar bilan ishlovchi tip*/

/* JavaScript dasturlash tili dinamik tipli dasturlash tili hisoblanadi!
Bu degani typelar har doim o`zgaruvchan hisoblanadi, o`zguvchini e'lon qilish 
joyida hech qanday tiplar berilmaydi. Uni o`zi o`zgaruvchini qiymatidan 
uning tipini aniqlaydi */

// * Type conversion
let aa = 2;
let bb = "2";
console.log(aa + bb);
console.log(aa + parseInt(bb));
/*parseInt() funksiyasi faqat satr sonlardan tashkil topsagina uni 
`string` tipidan `number` tipiga o`tira oladi*/
console.log(Number(bb));
console.log(String(aa));

let n = '15.1321';
let m = parseFloat(n);
console.log(m);

// Matematik operatorlar
/* +, -, *, **,  /, % */
let qoshish = 15 + 152;
console.log(qoshish);
let ayirish = 15 - 152;
console.log(ayirish);
let kopaytirish = 15 * 152;
console.log(kopaytirish);
let bolish = 15 / 152;
console.log(bolish);
let daraja = 2 ** 3;
console.log(daraja);
let qoldiq = 7 % 3;
console.log(qoldiq);

let name2 = "Jonatan";
let lastName2 = "Swift";
console.log(name2 + lastName2);


// operatorlarni qisqa ko`rinishda yozish
let x = 5;
x = x + 5; //10
x += 5; //15
console.log(x); //15
/* +=, -=, *=, /=, **=, %= */

/* Increment & Decrement */
let aaa = 1;
aaa++;//Increment sonni qiymatini 1 ga oshiradi
console.log(aaa);
let aba = 10;
aba--;//Decrement sonni qiymatini 1 ga kamaytiradi
console.log(aba);

// Comparison operators (Solishtirish operatorlari)
/* >, <, ==, >=, <=, != */
let r = 5;
let t = 3;
console.log(r == t);
console.log(r >= t);
console.log(r <= t);
console.log(r != t);
console.log(r > t);
console.log(r < t);
console.log(r + 5 < t - 2);

//TODO: BMI Calculator. Coding challenge #1 
massa/(boy**2)
//* String
const name3 = 'Angela';
const job = 'teacher';
const birthYear = 2003;
const year = 2021;
const angela = "I'm " + name3 + ', a ' + (year - birthYear) +
' years old ' + job + '!';
console.log(angela);
// Osonroq usuli (BackTicket String) String Interpolition
const angela2 = `I'm ${name3}, a ${year - birthYear} years old!`
console.log(angela2);
// Stringlarni console.logda chiqarish
console.log("O'zbekiston kelajagi \"buyuk\" davlat!");
console.log("O'zbekiston \n\ kelajagi \n\ buyuk \n\ davlat!");
console.log(`O'zbekiston 
kelajagi 
buyuk 
davlat!`);

// \n -> Enter
// \t -> Tab 
// ` -> BackTicket
// ~ -> Tilda