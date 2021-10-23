// Text yozish uchun ishlatiladi
// document.querySelector('.number').textContent = 20;
// document.querySelector('.message').textContent = 20;
// document.querySelector('.score').textContent = 45;
// document.querySelector('.high-score').textContent = 45;
// console.log(document.querySelector('.number').textContent);
// Inputga ma'lumot chiqarish va inputdan ma'lumot olish
// document.querySelector('.enter-number').value = 15;
// console.log(document.querySelector('.enter-number').value);

// Handling click event!  

let highScore = 0;
function game() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  let score = 20;
  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".enter-number").value);
    if (!guess) {
      document.querySelector(".message").textContent = "Son kiriting!";
    } else if (score > 1) {
      if (guess == secretNumber) {
        document.querySelector(".message").textContent = "To`g`ri javob!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#0f0";
        if (score > highScore) {
          highScore = score;
        }
        document.querySelector(".high-score").textContent = highScore;
      } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "katta";
        score--;
      } else {
        document.querySelector(".message").textContent = "kichik";
        score--;
      }
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Mag`lubiyat!";
      document.querySelector("body").style.backgroundColor = "#f00";
    }
    again(highScore);
  });
}
game();
function again(hhh) {
  document.querySelector(".again").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".enter-number").value = "";
    document.querySelector(".message").textContent = "Start Guessing.....";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".high-score").textContent = hhh;
    game();
  });
}


// TODO again (o`yinni boshidan boshlash) buttoni uchun fuksiya yarating!
// TODO yuqori natijani tabloga yozing!
// TODO Dasturni DRY (Don't Repeat YourSelf) qoidasiga ko`ra optimal
// holatga olib kelishga harakat qiling!

