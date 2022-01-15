// console.log("2" + 15);  
// console.log("2" - 15); 
// console.log("2" * 15); 
// console.log("2" / 15); 
// console.log("2" % 15); 
// console.log("2" ** 15); 
// <=
// >=
// !=
// const ism = "Jack";
// let age = 14;
// // Menning ismim Jack, 14 yoshdaman!
// console.log(`Mening ismim ${ism}, ${age} yoshdaman!`);
// console.log('Mening ismim ' + ism + ', ' + age + ' yoshdaman!');
// console.log("Mening ismim " + ism + ", " + age + " yoshdaman!");

// let x = 15;
// // x = x * 13;
// x *= 13;
// console.log(x);

// Shartli o`tish operatori
// if else, ternary, switch case
let a = 5;
let b = 3;
//console.log(a > b);
if (a > b) {
  //console.log("a katta!");
} else {
  //console.log("b katta!");
}
/* 
  if (shart) {
    shart bajarilsa ishga tushadigan amallar
  } else {
    shart bajarilmasa ishga tushadigan amallar
  }
*/
// To`liq bo`lmagan shart operatori
if (a > b) {
  //console.log("a katta!");
}
// Bir nechta shart operatorlarini bir biriga ulash
// if (a == b){
//   console.log("Ikkalasi teng!");
// } else if (a > b) {
//   console.log("a katta!");
// } else {
//   console.log("b katta!");
// }

let son = 6;
if(son % 2 != 0) {
  console.log("toq son");
} else {
  console.log("juft son");
}

// ternary - 3lik operatori
// ? : ;
// ? - if
// : - else
son % 2 != 0 ? console.log("toq son") : console.log("juft son");
if (son % 2 != 0) console.log("toq son"); else console.log("juft son");

let aa = 1;
switch (aa) {
  case 1:
    console.log(a + 1);
    break;
  case 2:
    console.log(a + 2);
    break;
  default:
    console.log(a + 111);
}

if(aa == 1){
  console.log(a + 1);
}else if(a == 2){
  console.log(a + 2);
}else{
  console.log(a + 111);
}

// let a = 3;
// let b = 5;
// if (a == b) {
//   console.log(`2 ta son teng!`);
// } else {
//   console.log(`${a} kichik!`);
// }

// a > b ? console.log(`${b} kichik!`) : console.log(`${a} kichik!`);
/* BMI Calculator */
// let massa = 64;
// let boyi = 174;
// let BMI = massa / ((boyi / 100) ** 2);
// console.log(BMI);
/*TODO: Davom qildirish kerak */

// let a = -156165;
// let b = 1111111;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a = " + a);
// console.log("b = " + b);
// console.log("44" < "23");

// let a = "5";
// let b = 5;
// //  0, '', undefined, null, NaN
// if ({}) {
//   console.log("b");
// } else {
//   console.log("k");
// }
// if (a === b) {
//   console.log("b");
// } else {
//   console.log("k");
// }

// let a = prompt("Salom!");
// if (a == 0) {
//   console.log("Son nolga teng!");
// } else if (a > 0) {
//   console.log("Musbat");
// } else {
//   console.log("Manfiy");
// }

let num = prompt("Ixtiyoriy sonni kiriting:");
// console.log(typeof num);
// if (num == 1) {
//   console.log("Dushanba");
// } else if (num == 2) {
//   console.log("Seshanba");
// } else if (num == 3) {
//   console.log("Chorshanba");
// } else if (num == 4) {
//   console.log("Payshanba");
// } else if (num == 5) {
//   console.log("Juma");
// } else if (num == 6) {
//   console.log("Shanba");
// } else if (num == 7) {
//   console.log("Yakshanba");
// } else {
//   console.log("Bunday hafta kuni yo`q!");
// }
switch (num) {
  case "1":
    console.log("Dushanba");
    break;
  case "2":
    console.log("Seshanba");
    break;
  case "3":
    console.log("Chorshanba");
    break;
  case "4":
    console.log("Payshanba");
    break;
  case "5":
    console.log("Juma");
    break;
  case "6":
    console.log("Shanba");
    break;
  case "7":
    console.log("Yakshanba");
    break;
  default:
    console.log("Bunday hafta kuni yo`q!");
}
