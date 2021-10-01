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
