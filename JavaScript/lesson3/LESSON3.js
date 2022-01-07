/* let a = 15;
console.log(a);

function qoshish(b) {
    console.log("Yig`indi: " + (a + b));
}
qoshish("45");

const qoshishArrow = (a, b) => {
    a = a + b;
    return a ** 2;
};
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(15, 45));
console.log(qoshishArrow(154, 45));
console.log(qoshishArrow(15, 45));
 */

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

/* let person = {
    name: "Mark",
    age: 15,
    isActive: true
}
console.log(person); */