// THIS kalit so`zi
/* index.html faylida tushuntirilgan! */

// High - order function
const greeting = function(greet){
    return function(name){
        console.log(greet, name);
    }
}
// greeting("Hello")("Bob");

// Arrow fuction ko`rinishi
const greetingArrow = greet => name => console.log(greet, name);
// greetingArrow("Hello")("Angela");

// High - order fuction in object
const person = {
    name: "Mark",
    age: 45,
    info: [],
    sample(job){
        // console.log(`He name is ${this.name}. He is ${job}.`);
        this.info.push(`He name is ${this.name}. He is ${job}.`);
    }
}
person.sample("Doctor");
person.sample("Driver");
person.sample("Programmer");

console.log(person.info);
// TODO. Yuqoridagi funksiyani 2 parametr qabul qiladigan qilib yozing.
// (ism va yoshini qabul qilsin va userAbout degan polyaga 
// "Mening ismim Mark. Yoshim 25 da!" ko`rinishida yozing)

// Closures
const follower = function(){
    let following = 0;
    return function(){
        following++
        console.log(`${following} followers`);
    }
}

const follow = follower();

follow();
follow();
follow();
follow();

/* ------------------------------------- */
let arr = [1,2,65,461,665,46,54]; 
// SLICE
console.log("SLICE");
console.log("-".repeat(25));
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log("-".repeat(25));
// SPLICE
console.log("SPLICE");
console.log("-".repeat(25));
console.log(arr.splice(2));
console.log(arr.splice(-2));
console.log("-".repeat(25));

// Ichma - ich joylsahgan arraylarni 1 array qilish
const multiArray1 = [1, [1, 2], [45, 8], 15];
console.log(multiArray1.flat());

const multiArray2 = [1,[1,2, [2, 1], [1,2]], [45], 15];
console.log(multiArray2.flat());

console.log(multiArray2.flat(1));
console.log(multiArray2.flat(2));
// flatMap()
const test = [[12,54,5,454,2],[15,454,54,84,54,5]];
console.log(test.flatMap(item => item * 2));
console.log(test.flatMap(item => item + "hello"));


