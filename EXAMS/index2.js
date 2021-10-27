function task13(){
    let array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
    // let aa = []
    // for (i = 0; i < array.length; i++) {
    //     if (array[i]) {
    //         aa.push(array[i]);
    //     }
    // };
    console.log(array.filter(item => item ? item : ""));
}

function task15(){
    color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    o = ["th", "st", "nd", "rd"];
    let i = 1;
    color.map(item => {
        if (i < 4) {
            console.log(`${i}${o[i]} choice is ${item}`);
        } else {
            console.log(`${i}${o[0]} choice is ${item}`);
        }
        i++;
    });
}
// task15();
function task40(a, b){
    let i = 0;
    let j = a;
    let aaa = [];
    while (i < b){
        aaa.push(j);
        j++;
        i++;
    }
    console.log(aaa);
}
// task40(1, 4);
let person = {
    name: "bobo",
    age: 12,
    phone: 152165
}

let personKeys = String(Object.keys(person));
console.log(personKeys);

let len = Object.keys(person).length;
console.log(len);


function task22(a, b){
    b.forEach(element => {
        if (!a.includes(element)){
            a.push(element);
        }
    });
    console.log(a);
}
// task22([1,2,3], [1,3,10,100]);

function task23(a, b){
    b.forEach(element => {
        if (a.includes(element)){
            a[a.indexOf(element)] = 0;
            b[b.indexOf(element)] = 0;
        }
    });
    let c = [...a, ...b];
    console.log(c.filter(item => item != 0).map(item => String(item)));
}
// task23([1,2,3], [1,3,10,100]);

function task42(a, b){
    b.forEach(element => {
        if (!a.includes(element)){
            a.push(element);
        }
    });
    console.log(a.map(item => String(item)));
}
// task42([1,2,3], [1,3,10,100]);
