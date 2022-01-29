// TODO: 1 dan 10 gacha sonlarni ekranga 
// chiqaruvchi dastur tuzing.
// Natija:
/* 
1
2
3
4
5
6
7
8
9
10 */
// Loop - for, while
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// for(let i = 1; i <= 10; i++){
//     console.log("Hello world!");
// }
// for(let i = 2; i <= 9; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("-----------------------------");
// }

// for(let i = 1; i < 10; i++){
//     for(let j = 1; j <= 10; j++){
//         console.log("Hello");
//     }
// }

// let i = 1;
// while (i <= 9) {
//     i++;
//     console.log(i);
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

let notebooks = [notebook1, notebook2, notebook3, notebook4];

// notebooks.forEach(notebook => {
//     if (notebook.cpu == "i3"){
//         console.log(notebook.model);
//     }
// });
let prices = [];
notebooks.forEach(notebook => {
    prices.push(notebook.price);
});
let maxx = prices.sort()[prices.length - 1];
let minn = prices.sort()[0];
let model1 = "";
let model2 = "";
notebooks.forEach(notebook => {
    if (notebook.price == minn){
        model1 += notebook.model;
    }
    if (notebook.price == maxx){
        model2 += notebook.model;
    }
});
console.log(`${model2} ${model1}dan ${maxx - minn}$ qimmatroq!`);
/* HP Asusdan 600$ qimmatroq!*/

