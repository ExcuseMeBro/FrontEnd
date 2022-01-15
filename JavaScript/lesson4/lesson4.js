/* let person = {
    name: "Mark",
    age: 15,
    isActive: true
}
console.log(person); */
// OBJECTS
const Person = {
    firstName: "Bek",
    lastName: "Edison",
    age: 23,
    gender: "male"
}
let nameKey = "Name"
console.log(Person.age);
console.log(Person['age']);
console.log(Person['first' + nameKey]);
console.log(Person['last' + nameKey]);

// Loops (Takrorlanuvchi jarayonlar)
// For
for (let a = 1; a <= 10; a++){
    // console.log(a);
}

let studentsList = ["Mark", "Tom", "Lewis", "Bob"];
for (let i = 0; i < studentsList.length; i++){
    // console.log(studentsList[i]);
}
// TODO: Teskari sanoq dasturini tuzing

// While
let i = 1;
while (i <= 10) {
    // console.log(i);
    i++;
}

let a = 1;
while (a <= 10){
    if (a % 2 == 0) {
        console.log(a);
    }
    a++;
}

for (let a = 1; a <= 10; a++){
    if (a % 2 == 0) {
        console.log(a);
    }
}