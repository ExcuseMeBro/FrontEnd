let a = [5, 7, 15, 35, 55, 21, 37, 50];
function task1() {
  console.log("----------map---------");
  // 1 - usul
  a.map((son) => (son % 3 == 0 ? console.log(son) : ""));
  console.log("---------forEach----------");
  // 2 - usul
  a.forEach((son) => (son % 3 == 0 ? console.log(son) : ""));
  console.log("---------For Loop----------");
  // 3 - usul
  for (let index = 0; index < a.length; index++) {
    if (a[index] % 3 == 0) {
      console.log(a[index]);
    }
  }
}
// task1();

function task2() {
  for (let index = 0; index < a.length; index++) {
    if ((index < a.length - 1) && (a[index] + a[index + 1]) % 2 == 0) {
      console.log(`${a[index]},${a[index + 1]}`);
    }
  }
  console.log("---------Task2 map----------");
  a.map(
      son =>
        ((a.indexOf(son) < a.length - 1) && (son + a[a.indexOf(son) + 1]) % 2 == 0)? console.log(`${son},${a[a.indexOf(son) + 1]}`): ""
      );
}
// task2();

