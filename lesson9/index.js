// "sdfjhsdf" '152341'
let myCountry = "Hello World";
// console.log(typeof myCountry);
// console.log(myCountry[0]);
// console.log(myCountry[myCountry.length - 1]);
// console.log(myCountry.indexOf("o"));
// console.log(myCountry.lastIndexOf("o"));
// console.log(myCountry.indexOf("Wor"));
// console.log(myCountry.search("o"));

// console.log(myCountry.slice(6, 9) + "d");
// console.log(myCountry.slice(6));

// console.log(myCountry.slice(0,myCountry.indexOf(" ")));
// console.log(myCountry.slice(-3));
// console.log(myCountry.substring(3));
// console.log(myCountry.substr(6,3));
// console.log(myCountry.trim());
// console.log(myCountry.sup());
// console.log(myCountry.sub());

let hi = "hello!"
// console.log(hi.toUpperCase());
// console.log(hi.toLowerCase());

function normalCountryName(name){
    return name[0].toUpperCase() + name.substr(1).toLowerCase();
}
// console.log(normalCountryName("jdshfjksdhfSSSS"));

function verifyLogin(login1, login2){
    if (login1.toLowerCase() === login2.toLowerCase()){
        console.log("Already exists you login!");
    } else {
        console.log("Done!");
    }
}
// verifyLogin("Arash4567", "arash4567");

// console.log(hi.replace("h", "W"));
// hi = hi.replace("h", "W")
// console.log(hi);
// console.log(hi.repeat(3));

// let kk = "1,21,3215,465,465,465,45";
// console.log(kk.split(","));

// console.log(hi.startsWith("hel"));
// let hi = "hello!"
// console.log(hi.endsWith("hel"));

// let a = ["apple", "orange", "lemon"]
// console.log(a.join('|'));

// console.log(hi.padStart(10, " "));
// console.log(hi.padEnd(10, "*"));

function staircase(s){
    for (let i = 1; i <= s; i++){
        console.log("#".repeat(i).padStart(s, " "));
    }
}
// staircase(5);
function card(cardNumber){
    return cardNumber.slice(0,4) + "*".repeat(12) + cardNumber.slice(-2);
}
console.log(card("5555444433331111"));