let num = prompt("Iltimos ixtiyoriy son kiriting:");
console.log(num);
// if (num == 1) {
//   console.log("Dushanba");
// } else if (num == 2) {
//   console.log("Seshanba");
// } else if (num == 3) {
//   console.log("Chorshanba");
// } else if (num == 4) {
//   console.log("Payshanba");
// } else if (num == 5) {
//   console.log("Juma");
// } else if (num == 6) {
//   console.log("shanba");
// } else if (num == 7) {
//   console.log("Yakshanba");
// } else {
//   console.log(`${num} - bunday hafta kuni yo'q!`);
// }

n = Number(num);
switch (n) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshanba");
    break;
  default:
    console.log(`${num} - bunday hafta kuni yo'q!`);
}
