/* let a = 4;
let b = 8;
let c = 6;
let Z =
  Math.pow(c ** 2 / b ** 2, 1 / 3) -
  (2 * a * b + c ** 2) / (Math.pow(a + b, 1 / 3) - 2 * a * b ** 2);
  console.log(`Z = ${Z}`);
  */
//  5! = 1*2*3*4*5
// 0! = 1
// 5! = 5*4*3*2*1
/* function factor(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factor(n - 1);
  }
}

function task11(x, m){
    let S = 0;
    for (let i = 0; i <= m; i++){
        S += (Math.pow(x, i)/(factor(i)));
        console.log(`factor: ${factor(i)} | i = ${i}`);
        // console.log(S);
    }
    return S;
}
console.log(task11(5, 7)); */

/* for (let x = 3; x <= 5; x += 0.2){
    console.log(x);
} */

let a = -5, b = 1, c = 0.5, x = 2, y = 0;
if (a < 0){
    y = (Math.pow(Math.sin(a/Math.PI*x),2)+(Math.pow(Math.cos(a/Math.PI*x**2),3)))/((a + b)**2 + c);
} else if (a**2 >= b**3){
    y = 45;
}
console.log(y);
