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