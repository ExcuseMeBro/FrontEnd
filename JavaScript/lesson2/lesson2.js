// if else statement & ternary operators
/**
 *! shart operatori
 *! if ("3" == 2) {
   shart true qiymat olsa shu yerdagi qism ishlaydi
 } else {
   shart false qiymat qaytarsa shu yerdagi qism ishlaydi
 }; */ 

 //TODO: 2 sondan beriladi berilgan shu sonlardan kichigini toping!
 //TODO: Bitta son beriladi berilgan son `musbat` yoki `manfiy` ekanligini aniqlang!
 //TODO: Bitta son beriladi berilgan songa mos hafta kunini chiqaring!

 //* Ternary (Uchlik) operators {? : ;}
/**
 * shart ? shart true qiymat olsa shu yerdagi qism ishlaydi : shart false qiymat qaytarsa shu yerdagi qism ishlaydi; */

//TODO: BMI Calculator

// Type Coercion (Majburlash turi)
console.log('I am ' + 23 + ' years old' + true);
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

// 5 falsy values: 0, '', undefined, null, NaN
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

// != & !==
/* != -> faqat qiymatlarni solishtiradi */
console.log('18' != 18);
/* !== -> ham qiymati ham tipi bo`yicha solishtiradi */
console.log('18' !== 18) ; 

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
