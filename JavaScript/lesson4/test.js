let a = [5, 7, 15, 35, 55, 21, 37, 50];
function task1() {
  console.log("----------map---------");
  // 1 - usul
  a.map((son) => (son % 3 == 0 ? console.log(son) : ""));
  console.log("---------forEach----------");
  // 2 - usul
  a.forEach((son) => (son % 3 == 0 ? console.log(son) : ""));
  console.log("---------For Loop----------");
  // 3 - usul
  for (let index = 0; index < a.length; index++) {
    if (a[index] % 3 == 0) {
      console.log(a[index]);
    }
  }
}
// task1();

function task2() {
  for (let index = 0; index < a.length; index++) {
    if ((index < a.length - 1) && (a[index] + a[index + 1]) % 2 == 0) {
      console.log(`${a[index]},${a[index + 1]}`);
    }
  }
  console.log("---------Task2 map----------");
  a.map(
      son =>
        ((a.indexOf(son) < a.length - 1) && (son + a[a.indexOf(son) + 1]) % 2 == 0)? console.log(`${son},${a[a.indexOf(son) + 1]}`): ""
      );
}
// task2();

function task3(){
    // 1-usul
    // console.log(a.reverse());

    // 2-usul
    let b = [];
    for (let i = a.length - 1; i >= 0; i--){
        b.push(a[i]);
    }
    console.log(b);
}
// task3();

function task4(){
    for(let i = 1; i < a.length; i += 2){
        console.log(a[i]);
    }
}
// task4();

function task5(){
    let s = 0;
    a.map(son => s += son);
    console.log(s);
}
task5();


// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

const notebook1 = {
  model: "Acer",
  cpu: "i5",
  price: 500
}
const notebook2 = {
  model: "Asus",
  cpu: "i3",
  price: 300
}
const notebook3 = {
  model: "HP",
  cpu: "i7",
  price: 900
}
const notebook4 = {
  model: "Lenovo",
  cpu: "i3",
  price: 400
}

let notebookStore = [notebook1, notebook2, notebook3, notebook4];
// console.log(notebookStore);
// notebookStore.map(notebook => (notebook.price > )? console.log(notebook.model): "");
let a = notebookStore.map(notebook => notebook.price);
let b = notebookStore.filter(n => n.price == (a.sort()[a.length - 1]));
console.log(b[0].model);
let s = 0;
a.map(price => s += price);
console.log(s);
let c = notebookStore.filter(n => n.cpu == "i3");