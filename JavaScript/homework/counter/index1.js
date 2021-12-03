
document.querySelector("#memo").addEventListener("keyup", function () {
 document.querySelector("#score").textContent = " Kiritilgan belgilar soni:" + document.querySelector("textarea").textLength;     
});