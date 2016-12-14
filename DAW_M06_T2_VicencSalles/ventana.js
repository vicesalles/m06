window.onload = function () {

    var parent = window.opener;
    parent.alertaCarga();
    var ck = parent.document.cookie.split("=");
    var usuario = ck[1];
    window.setTimeout(function () {

        var d = new Date();
        var h = d.getHours();
        var txt = "";

        if (h >= 6 && h <= 14) {

            txt = "Buenos días " + usuario;

        } else if (h >= 14 && h <= 20) {

            txt = "Buenas tardes " + usuario;

        } else {

            txt = "Buenas noches " + usuario;
        }


        document.getElementById('saludo').innerHTML = txt;

    }, 5000);

};

var enMarcha = false;
var iniciado = false;

function crono() {
    var tmp = 0;
    cr = setInterval(function () {
        document.getElementById('crono').innerHTML = tmp;
        tmp++;
    }, 1000);

    if (enMarcha == false) {
        enMarcha = true;
        iniciado = true;        
    } else if (enMarcha == false && iniciado == true) {
         window.clearInterval(cr);
         crono();
    } else {
        enMarcha = false;
        window.clearInterval(cr);
    }



}