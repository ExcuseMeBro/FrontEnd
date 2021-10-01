function calc() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let amal = document.getElementById("amal").value;
    // console.log(a, b, amal);
    if (a && b) {
        if (amal == "+") {
            document.getElementById("res").value = a + b;
        }
    } else {
        alert("Iltimos faqat son kiriting!")
    }
}
function reset(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("amal").value = '';
    document.getElementById("res").value = '';
}