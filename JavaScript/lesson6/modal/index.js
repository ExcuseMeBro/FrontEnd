const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
// console.log(modal.classList);
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// for (let i = 0; i < btnsShowModal.length; i++) {
//   btnsShowModal[i].addEventListener("click", function () {
//       open();
//   });
// }

btnsShowModal.forEach((btn) => {
  btn.addEventListener("click", () => {
      open();
  });
});

function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", () => {
  close();
});

overlay.addEventListener("click", () => {
  close();
});
// let person = {
//     name: "Bob",
//     age: 13
// }
/* keyup -  */
/* keydown -  */
/* keypress -  */
document.addEventListener("keydown", (klavish) => {
  // console.log(klavish.key);
  if (klavish.key === "Escape") {
    close();
  }
  if (klavish.key === "Enter") {
    open();
  }
});
// TODO Codeni optimallashtiring
// TODO Esc klavishini bosganda modalni yoping!
