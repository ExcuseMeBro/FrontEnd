document.getElementById("memo").addEventListener("keyup", function (klavish) {
  /* Shartni oxiriga yetiring! */
    s = document.getElementById("memo").value;
    document.getElementById("score").innerHTML = "Kiritilgan belgilar soni: " + s.length;
});
