const myCountry = "Hello     World!";
// Stringdan ixtiyoriy bir harfni idex orqali chaqirib olish
console.log(myCountry[0]);
console.log(myCountry[myCountry.length - 1]);
// Stringdagi ixtiyoriy bir belgini indexini aniqlash
console.log(myCountry.indexOf('l'));
console.log(myCountry.lastIndexOf('l'));
console.log(myCountry.lastIndexOf('World'));
// Stringdan biror bir qismini ajratib olish
console.log(myCountry.slice(6));
console.log(myCountry.slice(0, 6));
/* TODO: Satr beriladi satrdagi birinchi so`zni chiqaruvchi dastur tuzing*/
console.log(myCountry.slice(-2));
// Substring - son olmaydi, har doim 2 ta son berish shart
console.log(myCountry.substring(1,3));
// Stringdan berilgan indexdan o`ngdagi qismini olish
console.log(myCountry.substr(3));
// Stringdan berilgan indexdan boshlash ma`lum belgini olish
console.log(myCountry.substr(1, 3));
// Stringdagi ortiqcha probellardan hamda belgilardan tozalash
console.log(myCountry.trim());
// Stringni <sup></sup> tegiga o`rash
console.log(myCountry.sup());
// Stringni <sub></sub> tegiga o`rash
console.log(myCountry.sub());

// TEXT transform
let hi = "hello!"
console.log(hi.toLowerCase());
console.log(hi.toUpperCase());

/* TODO: Ixtiyoriy ko`rinishda davlat nomi beriladi uni to`g`ri formatda chiqaring */

/* TODO: Ikkita email address beriladi, shu email addresslar bir biriga teng yoki teng emasligini tekshiring! */

/* TODO: Ikkita login beriladi, shu loginlar bir biriga teng yoki teng emasligini tekshiring! */

/* TODO: USA dollari beriladi shuni UZB so`miga convertatsiya qiluvchi dastur tuzing! */

// Stringdagi ixtiyoriy elementni boshqasiga almashtirish
console.log(hi.replace("h", "W"));
// Stringni berilgan son marta takrorlash
console.log(hi.repeat(5));
// Stringda biror bir belgi yoki belgilar to`plami bor yoki yo`qligini tekshirish
console.log(hi.includes("l"));
// Stringni biror bir belgidan bo`lish
console.log(myCountry.split(" "));
// Satr qaysi belgidan yoki belgilar to`plamidan boshlanganini tekshirish
console.log(hi.startsWith("h"));
// Satr qaysi belgidan yoki belgilar to`plamidan tugaganini tekshirish
console.log(hi.endsWith("!"));
// Arraydan String hozil qilish
let a = ["apple", "orange", "lemon"]
console.log(a.join('|'));
// Stingni oldidan bo`sh joy qoldirish
console.log(hi.padStart(10, "*"));
console.log(hi.padEnd(10, "*"));

// Berilgan so`zni stringdan qidirish
console.log(hi.search("ll"));

/* TODO: Hackerrank staircase topshiriqini ishlash
https://www.hackerrank.com/challenges/staircase/problem?h_r=internal-search */
/* 
input => 4
output =>
   #
  ##
 ###
#### */

/* TODO: Karta raqami beriladi shuni CLICK dasturidagidek 
ko`rinishga keltiring! */
/* 8600**********12
   9615**********45 */ 




