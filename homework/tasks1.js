function task1(x) {
  return x ** 3;
}
// console.log(`Kub hajmi: ${task1(15)}`);
function task2(r1, r2, r3) {
  return Array(Math.PI * r1 ** 2, Math.PI * r2 ** 2, Math.PI * r3 ** 2);
}
// console.log(`Doira yuzlari: ${task2(15,2,5)}`);

function task3(s, h) {
  return (2 * s) / h;
}
// console.log(`Uchburchak asosi: ${task3(15,2)}`);

function task4(r) {
  return Math.PI * 4 * r ** 2;
}
//console.log(`sharning yuzasi: ${task4(6)}`);

function task5(a, b, c) {
  return a + b + c;
}
//console.log(`uchburchakning perimetiri: ${task5(10,5,15)}`);

function task6(v, s) {
  return s / v;
}
//console.log(`t=: ${task6(5,10)}`);

function task7(h) {
  let g = 9.81;
  return ((2 * h) / g) ** 2;
}
//console.log(task7(10));

function task8(x) {
  return (x * 365 * 24 * 60 * 60) / 1000;
}
//console.log(task8(20));

function task9(a, b, c) {
  return (a = a + b + c), (b = a - b - c), (c = a - b - c), (a = a - b - c);
}
//console.log(task9(10,20,30));

function task10(m) {
  let g = 9.81;
  return m * g;
}
//console.log(task10(10));

function task11(x, y) {
  if (x == y) {
    console.log("ikkita sin teng");
  } else if (x > y) {
    console.log("x katta");
  } else if (x < y) {
    console.log("y katta");
  }
}
//task11(5,8);

/* function task12(n, x) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += ((-1) ** (i - 1) * (x - 1) ** i) / i;
  }
  return s;
}
console.log(task12(12, 0.45)); */

// function task5(x,n){
//     let S = 0;
//     for(let i=1; i<=n ;i++){
//         S += (x**(2*i-1))/i;
//     }
//     return S;
// }
// console.log(task5(6,2));

// function factorialize(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorialize(num - 1);
//   }
// }

// function task4(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(factorialize(i));
//   }
// }
// task4(10);
// let counttt = 0;
// for (let i = 11; i < 100; i+=11){
//   counttt += 1;
//   console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     counttt += 1;
//     console.log(`${i}${j}${j}${i}`);
//   }
// }
// 101 111 121 131 141 151 161 202 212

// console.log(counttt);

