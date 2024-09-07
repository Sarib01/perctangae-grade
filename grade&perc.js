
function percGrade() {

    let name = prompt("Enter your name")

    let stdTm_Marks = document.getElementById("tm1").value;

    let stdObt_Marks = document.getElementById("obt1").value;

    let res = (stdObt_Marks / stdTm_Marks) * 100;

        if (res >= 90) {
            document.getElementById("res").innerHTML = `Congratulations ${name},you have got it ${res}% with A+ Grade`
        }
        else if (res >= 80) {
            document.getElementById("res").innerHTML = `Congratulations ${name},you have got it ${res}% with A Grade`
        }else if (res >= 70) {
            document.getElementById("res").innerHTML = `Congratulations ${name},you have got it ${res}% with B+ Grade`
        }else if (res >= 60) {
            document.getElementById("res").innerHTML = `Congratulations ${name},you have got it ${res}% with B Grade`
        }else if (res >= 50) {
            document.getElementById("res").innerHTML = `Congratulations ${name},you have got it ${res}% with C Grade`
        }else if (res >= 33) {
            document.getElementById("res").innerHTML = `Congratulations ${name},you have got it ${res}% with D Grade`
        }else if (res< 33) {
            document.getElementById("res").innerHTML = `Opps You Failed This... Better Luck Next Time`
        }

}