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
    if (a && b) {
        if (amal == "-") {
            document.getElementById("res").value = a - b;
        }
    } else {
        alert("Iltimos faqat son kiriting!")
    } 
    if (a && b) {
        if (amal == "/") {
            document.getElementById("res").value = a / b;
        }
    } else {
        alert("Iltimos faqat son kiriting!")
    }
     if (a && b) {
        if (amal == "*") {
            document.getElementById("res").value = a * b;
        }
    } else {
        alert("Iltimos faqat son kiriting!")
    }
}

function plus(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    if (a && b) {
            document.getElementById("res").value = a + b;   
    } else {
        alert("Iltimos faqat son kiriting!")
    }
}

function ildiz(){
    let a = parseInt(document.getElementById("num1").value);
    if (a) {
            document.getElementById("res").value = a**(1/2);   
    } else {
        alert("Iltimos faqat son kiriting!")
    }
}

function kvadrat(){
    let a = parseInt(document.getElementById("num1").value);
    if (a ) {
            document.getElementById("res").value = a**2;   
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