function b() {
    var h = document.getElementById("h").value;
    var w = document.getElementById("w").value;
    let bmi = w/ (h*h);
    check(bmi);
}
function check(bmi){
    if(bmi< 18.5){
        document.getElementById("o").innerHTML = "YOUR bmi is low";
        document.getElementById("l").innerHTML = "bmi"+ bmi
    }
    else if (bmi>18.5 && bmi<=24.9){
        document.getElementById("o").innerHTML = "YOUR bmi is normaL";
        document.getElementById("l").innerHTML = "bmi"+ bmi
    }
    else if (bmi>=25 && bmi<=29.9){
        document.getElementById("o").innerHTML = "YOUR bmi is high";
        document.getElementById("l").innerHTML = "bmi"+ bmi
    }
    else if (bmi>=30){
        document.getElementById("o").innerHTML = "YOUR bmi is too high";
        document.getElementById("l").innerHTML = "bmi"+ bmi
    }
    else {
        document.getElementById("o").innerHTML = "YOUR bmi is not determined";
        document.getElementById("l").innerHTML = "bmi is "+ bmi
    }
}
