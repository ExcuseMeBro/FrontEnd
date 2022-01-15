// Todo funksiya 2 dona son qabul qiladi
// Vazifa: Agar 1-son 2-sondan katta bo`lsa 1-sondan
// 2-sonni ayiring! Aks holda ikkala sonni qo`shing!

if ('') {
    console.log("A");
} else {
    console.log("B");
} // B

if (0) {
    console.log("A");
} else {
    console.log("B");
} // B

if (false) {
    console.log("A");
} else {
    console.log("B");
} // B

if (null) {
    console.log("A");
} else {
    console.log("B");
} // B

if (undefined) {
    console.log("A");
} else {
    console.log("B");
} // B

if (NaN) {
    console.log("A");
} else {
    console.log("B");
} // B

let a = [null, 0, 15, '', false, -22, undefined, 47, NaN];

let natija = a.map((qiymat) => {
    if (qiymat) return qiymat;
});

console.log(natija);