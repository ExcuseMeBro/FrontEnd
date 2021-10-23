const user = {
    name: "Mark",
    age: 45,
    email: "mark@example.com"
}
console.log(Object.keys(user));
// console.log(...Object.keys(user));

let userKeys = Object.keys(user);

userKeys.forEach(key => console.log(key));

userKeys.map(key => console.log(key));

for (let i of userKeys){
    console.log(i);
}

let aa = 0;
while (aa < userKeys.length){
    console.log(userKeys[aa]);
    aa++;
}

for (let i = 0; i < userKeys.length; i++){
    console.log(userKeys[i]);
}
/* 
name
age
email */
// console.log(Object.keys(user));

