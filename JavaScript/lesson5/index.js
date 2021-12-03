let a = new Date();
// console.log(a);
// console.log(a.getDate());
// console.log(a.getDay());
// console.log(a.getFullYear());
// console.log(a.getHours());
// console.log(a.getMonth());
// console.log(a.getTime());
// console.log(a.getSeconds());

// TODO: Date formats
// 1. 2021-03-30
console.log(a.getFullYear() + "-" + (a.getMonth()+ 1) + "-" + a.getDay());
// 2. 03/30/2021
month = Array("","Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
// 3. Mart 30 2021 yoki 30 mart 2021
console.log(month[(a.getMonth()+ 1)] + " " + a.getDate() + " " + a.getFullYear());

// Math
// Constantalar
console.log(Math.E);
console.log(Math.PI);
//Sonni darajaga ko`tarish yoki ixtiyoriy ildiz ostidan chiqarish
console.log(Math.pow(2, 3));
// sonni yaxlitlash (Matemetikadagidan farq qiladi)
// console.log(Math.ceil(2.23));
// sonning modulini topish
// console.log(Math.abs(-45));
// trigonometrik funksiyalar
// console.log(Math.sin(30/180*Math.PI));
// console.log(Math.cos(15));
// console.log(Math.tan(15));
// min max funksiyalari
// console.log(Math.min(12, 54, 84, 897, 897, 4, 984, 5));
// console.log(Math.max(12, 54, 84, 897, 897, 4, 984, 5));
// console.log(Math.sqrt(81));
// sonning butun qismini olish
// console.log(Math.trunc(1.888886));
// console.log(Math.round(1.46));
// Random
// console.log(Math.random()); // 0 1 orasida kars sonni random qilish
// TODO: 1 va 10 orasida ixtiyoriy kars sonni chiqarish dasturini tuzing
// TODO: 1 va 10 orasida ixtiyoriy butun sonni chiqarish dasturini tuzing
