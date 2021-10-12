// ARRAY
let a = [0, 2, 8, 5];
let b = [1, 5, 4];
// TODO 2 arrayni qo`shib array hosil qiling!
// ... (Spread operator) -> operatori
// Iteratsiyalar (Collection): Arrays, strings, maps, sets
const firstName = "Mark";
let n = [...firstName];
console.log(n);
// ... -> operatori yordamida Array hosil qilish
function qoshish(...numbers) {
  console.log(numbers);
}
qoshish(5, 2, 1, 7, 4, 6);

// Mantiqiy operatorlar
//TODO Falsy qiymatlarni nechta va ular qaysilar?
console.log("------ OR ------");
console.log(23 || "Mark");
console.log("" || "Mark");
console.log(true || 0);
console.log("" || 0);
console.log(undefined || null);

// TODO Mantiqiy ifodaning natijasini aniqlang!
console.log(undefined || 0 || false || "Hello" || 13 || null);
console.log(undefined || 0 || false || "" || "13" || null);

console.log("------ AND ------");
console.log(23 && "Mark");
console.log(true && 0);
console.log(undefined && null);

// TODO Mantiqiy ifodaning natijasini aniqlang!
console.log(undefined && 0 && false && "Hello" && 13 && null);
console.log(undefined && 0 && false && "" && "13" && null);

// Nullish values (null and undefined) {0 va '' -> bundan mustasno!}
number = 0;
console.log(0 || 10);
// Check nullish value operator -> ??
console.log("----- Not Nullish ------");
console.log(0 ?? 10);
console.log('' ?? 10);
console.log(false ?? 10);
console.log("----- Nullish -----");
console.log(null ?? 10);
console.log(undefined ?? 10);

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

// New method using loops with Array -> "of" <- key words
for (const item of fruits) {
  console.log(item);
}

// TODO Arrayning barcha elementlarini quyidagi ko`rinishda consolega chiqaring!
/* 
0.apple
1.banana
2.cherry
n...... */

//.entries() -> function
for (const item of fruits.entries()) {
  console.log(item);
}
// New look
for (const [index, meva] of fruits.entries()) {
  console.log(`${index + 1}.${meva}`);
}

// Optional chaining operator (?.)
// TODO: Sizga users nomli Array beriladi. Arrayning 1-elementida name kaliti bo`lsa uning qiymatini,
// aks holda "Foydalanuvchilar ro`yhati bo`sh!" yozuvini chiqaring!
const users = [
  {
    name: "Mark",
    age: 45,
    email: "mark@gmail.com",
  },
];

let result = users[0]?.name ?? "Foydalanuvchilar ro`yhati bo`sh!";
console.log(result);
// SETS

// MAPS

// STRING

// Strong password generator yasang!
// Parolda kamida 1 ta katta harf, 1 ta kichik harf, 1 ta son hamda
// 1 ta maxsus belgi va 8 ta belgidan kam bo`lmasligi kerak
// AAAssds@!@312234