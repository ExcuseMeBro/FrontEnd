const DATA = document.querySelector("#data");
const ADD = document.querySelector("#add");
const DISPLAY = document.querySelector("#display");
const RESULT = document.querySelector("#natija");

let s = "<ol>";
function add() {
  if (DATA.value) {
    s += `<li>${DATA.value}</li>`;
    output();
  } else {
    alert("Iltimos input maydoniga ma'lumot kiriting!");
  }
}
function output() {
  RESULT.innerHTML = s + "</ol>";
}
