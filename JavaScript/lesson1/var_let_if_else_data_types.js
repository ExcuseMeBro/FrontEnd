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
console.log(typeof person);

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
/* +, -, *, **,  /  */
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

// Comparison operators
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
console.log(r > 5 < t == 2);

//TODO: BMI Calculator. Coding challenge #1 

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

// if else statement & ternary operators
/**
 *! shart operatori
 *! if (shart) {
   shart true qiymat olsa shu yerdagi qism ishlaydi
 } else {
   shart false qiymat qaytarsa shu yerdagi qism ishlaydi
 }; */ 

 //TODO: 2 sondan beriladi berilgan shu sonlardan kichigini toping!
 //TODO: Bitta son beriladi berilgan son `musbat` yoki `manfiy` ekanligini aniqlang!
 //TODO: Bitta son beriladi berilgan songa mos hafta kunini chiqaring!

 //* Ternary operators {? : ;}
/**
 *! shart ? shart true qiymat olsa shu yerdagi qism ishlaydi : shart false qiymat qaytarsa shu yerdagi qism ishlaydi; */

//TODO: Coding challenge #2

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('44' + 23 + '1');
console.log('44' - 23 - '1');// Coercion
console.log('44' * 2);// Coercion
console.log('44' / 2);// Coercion
console.log('44' > '23');// Coercion

let nn = '1' + 1;//'11'
nn = nn - 1;
console.log(nn);

let mm = '1' - 1;// 0
mm = mm - 1;
console.log(mm);

// 5 flasy valus: 0, '', undefined, null, NaN
/* Faqat flase qiymat qaytaradigan qiymatlar */
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean('Janos'));

// == & ===
/* == -> faqat qiymatlarni solishtiradi */
console.log('18' == 18);
/* === -> ham qiymati ham tipi bo`yicha solishtiradi */
console.log('18' === 18) ; 

// foydalanuvchi kiritgan ma'lumotni o`qib olish
let num = prompt("Yoqtirgan soningizni kiriting:");
console.log("Siz yotirgan son: " + num);

//* ROSTLIK JADVALI
/*
_______________AND - &&________
|   A   |   B   |    A && B   |
|   0   |   0   |      0      |
|   1   |   0   |      0      |
|   0   |   1   |      0      |
|   1   |   1   |      1      |
_______________________________
______________OR - ||_________
|   A   |   B   |   A || B   |
|   0   |   0   |      0     |
|   1   |   0   |      1     |
|   0   |   1   |      1     |
|   1   |   1   |      1     |
______________________________
_________NOT - !_________
|   A   |    !A     |  
|   0   |     1     |
|   1   |     0     |
_____________________
*/
//  and
 console.log((1 > 2) && (3 > 1));

//  or
console.log((1 > 2) || (3 > 1));

//  not
console.log(!(1 > 2));

// TODO: Coding challenge #3

// switch case
/**
 * !switch (o`zgaruvchi){
 *    case qiymat:
 *      bajariladigan qism;
 *      break;
 *    case qiymat:
 *      bajariladigan qism;
 *      break;
 * } */
let w = 1;
switch (w) {
  case 1: 
    console.log("Mon");
    break;
  case 2:
    console.log("Tues");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thurs");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default :
    console.log("Bunday hafta kuni yo`q!");
    break;
}