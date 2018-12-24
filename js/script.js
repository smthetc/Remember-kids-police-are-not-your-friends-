var br = "</br>";

function portal() {
    var name = document.forms.frm.name.value;
    var number = document.forms.frm.nmbr.value;
    var message = name + br + number;
    document.getElementById("result").innerHTML = message;
}



function square() {
    var a = document.forms.math.a.value;
    var b = document.forms.math.b.value;
    var c = document.forms.math.c.value;
    if (/\D/.test(a), /\D/.test(b), /\D/.test(c)) {
        let result = "ОШИБКА, САМОУНЧИТОЖЕНИЕ ЧЕРЕЗ ДЕСЯТЬ СЕКУНД";
        document.getElementById("mathresult").innerHTML = result;
    }
    console.log(a,b,c);
    var d = b * b - 4 * a * c;
    if (d < 0) {
        let result = "ОШИБКА, САМОУНЧИТОЖЕНИЕ ЧЕРЕЗ ДЕСЯТЬ СЕКУНД";
        document.getElementById("mathresult").innerHTML = result;
    }
    console.log(d);
    var d = Math.sqrt(d);
    console.log(d);

    if (d > 0) {
        let x1 = (-b + d) / (2 * a);
        let x2 = (-b - d) / (2 * a);
        let result = "уравнение имеет два корня" + br + "x1=" + x1 + br + "x2=" + x2;
        document.getElementById("mathresult").innerHTML = result;
    }
    else if (d == 0) {
        let x = (b * -1) / (2 * a);
        let result = br + "уравнение имеет один корень=" + x;
        document.getElementById("mathresult").innerHTML = result;
    }
    else if (d < 0) {
        var result = "уравнение не имеет корней";
        document.getElementById("mathresult").innerHTML = result;
    }
}