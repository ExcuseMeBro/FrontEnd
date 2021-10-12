const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
console.log(modal);
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
      open();
  });
}
function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
btnCloseModal.addEventListener("click", function () {
  close();
});
overlay.addEventListener("click", function () {
  close();
});
// let person = {
//     name: "Bob",
//     age: 13
// }
document.addEventListener("keyup", function (klavish) {
  // console.log(klavish.key);
  if (klavish.key === "Escape") {
    close();
  }
  if (klavish.key === "Enter") {
      open();
  }
});
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
// TODO Codeni optimallashtiring
// TODO Esc klavishini bosganda modalni yoping!
