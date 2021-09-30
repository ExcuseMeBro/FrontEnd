function calc() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let amal = document.getElementById("amal").value;
    // console.log(a, b, amal);
    if (a && b) {
        if (amal == "+") {
            document.getElementById("res").innerHTML = a + b;
        }
    } else {
        alert("Iltimos faqat son kiriting!")
    }
}