// ARRAY
/* let a = [0, 2, 8, 5];
let b = [1, 5, 4]; */
// TODO 2 arrayni qo`shib array hosil qiling! (Array, Array) => Array
/* for (let i = 0; i < b.length; i++){
    a.push(b[i]);
}
console.log(typeof a);
console.log(a.length); */
// ... -> 
/* let c = [...a, ...b];
console.log(c); 
console.log(...a);  */
/* 
function qoshish(...numbers) {
    console.log(numbers);
}
qoshish(5, 2, 1, 7, 4, 6); */

/* console.log("------ OR ------");
console.log(0 || null || 22);
console.log('' || "Mark");
console.log(true || 0);
console.log('' || 0);
console.log(undefined || null); */

// TODO Mantiqiy ifodaning natijasini aniqlang!
/* console.log(undefined || 0 || false || "Hello" || 13 || null);
console.log(undefined || 0 || false || "" || "13" || null);

console.log("------ AND ------");
console.log(23 && "Mark");
console.log(true && 0);
console.log(undefined && null); */

// TODO Mantiqiy ifodaning natijasini aniqlang!
/* console.log(undefined && 0 && false && "Hello" && 13 && null);
console.log(undefined && 0 && false && "" && "13" && null); */

// Check nullish value operator -> ??
/* console.log("----- Not Nullish ------");
console.log(0 ?? 10);
console.log('' ?? 10);
console.log(false ?? 10);
console.log("----- Nullish -----");
console.log(null ?? 10);
console.log(undefined ?? 10); */


// Loops with Array
fruits = [
    "apple",
    "banana",
    "cherry",
    "blueberry",
    "strowberry",
    "pear",
    "lemon",
    "orange",
];
// TODO Arrayning barcha elementlarini quyidagi ko`rinishda consolega chiqaring!
/* 
apple
banana
cherry
..... */
/* for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
} */

/* for (let fruit of fruits){
    console.log(fruit);
} */
// let i = 0;
// for (let fruit of fruits){
//     console.log(`${i}.${fruit}`);
//     i++;
// }

//entries() -> function
for (const item of fruits.entries()) {
    console.log(...item);
}
