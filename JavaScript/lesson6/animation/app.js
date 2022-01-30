const box = document.querySelector(".box");
const stand = document.querySelector(".stand");
const walking = document.querySelector(".walking");

document.addEventListener("keydown", (klavish) => {
    if (klavish.key === "d" || klavish.key === "ArrowRight") {
        stand.classList.add("hidden");
        walking.classList.remove("hidden");
        box.classList.add("right");
        setTimeout(() => {
            stand.classList.remove("hidden");
            walking.classList.add("hidden");
        }, 6000);
    }
});