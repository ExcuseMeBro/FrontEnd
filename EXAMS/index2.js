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
person
