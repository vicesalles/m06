
window.onload = function () {

    resetTextArea();
    //Lista de elementos a los que quiero asignar un listener.
    var form = document.getElementById('miForm');
    var nombre = form['nProducto'];
    var codigo = form['codigo'];
    var mes = form['mes'];
    var any = form['any'];
    var dia = form['dia'];
    var oferta = form['oferta'].options.selectedItem;


    //Declaro totos los listeners
    form.addEventListener('submit', envia, false);
    nombre.addEventListener('keyup', checkNombre, false);
    codigo.addEventListener('keyup', checkCodigo, false);
    dia.addEventListener('keyup', checkDia, false);
    mes.addEventListener('keyup', checkMes, false);
    any.addEventListener('keyup', checkAny, false);

    function envia(e) {

        e.preventDefault();

        //Reseteo la textArea
        resetTextArea();

        if (checkNombre() && checkCodigo() && checkTipo() && checkDia() & checkMes() && checkAny() && checkData()) {
            //Guardo les cookies
            guardarCookies();
            alert('se ha mandado el mensaje con éxito');
            //.options.selectedIndex

        } else {



            alert('hay errores en el formulario');

        }



    }


    //Esta función valida el nombre
    function checkNombre(e) {

        resetTextArea();

        if (e == undefined) {

            con = nombre.value;
            console.log(con);

        } else {

            //detecto el contenido generado por el usuario
            var con = e.target.value;

        }


        if (isNaN(con.charAt(0))) {

            textArea(con);


        } else {

            errorTextArea("El primer carácter de nombre no puede ser un número");
            return false;

        }

        if (con.length >= 3 && con.length <= 20) {

            textArea(con);
            correcto();
            return true;

        } else {

            errorTextArea("El nombre debe tener entre 3 y 20 carácteres");
            return false;
        }


    }

    //Esta función valida el código
    function checkCodigo(e) {

        resetTextArea();
        var con;

        if (e == undefined) {

            con = codigo.value;

        } else {

            //detecto el contenido generado por el usuario
            con = e.target.value;

        }

        textArea(con);

        if (con.length !== 13) {

            errorTextArea("el código debe estar formado por 13 números.");
            return false;
        } else {
            correcto();
            textArea(con);
            return true;
        }

    }

    //esta función comprueva si se ha seleccionado un tipo

    function checkTipo(e) {

        resetTextArea();

        var tipo = document.querySelector('.tipo:checked');

        if (tipo === null) {

            errorTextArea("No se ha podido enviar el formulario pq debes seleccionar un tipo");
            return false;

        } else {

            textArea(tipo.value);
            return true;
        }


    }

    //LAS FUNCIONES QUE SIGUEN SE OCUPAN DEL APARTADO DE LA FECHA

    function checkDia(e) {

        resetTextArea();
        var dia;

        if (e == undefined) {

            var form = document.getElementById('miForm');
            dia = form['dia'].value;


        } else {

            dia = e.target.value;

        }

        dia = parseInt(dia);

        if (isNaN(dia)) {

            errorTextArea('hay que introducir un numero a dia');
            return false;

        } else {

            if (dia >= 1 && dia <= 31) {
                correcto();
                textArea(dia);
                return true;
            } else {
                errorTextArea('el dia debe ser un numero entre 1 y 31');
                return false;
            }

        }

    }

    function checkMes(e) {

        resetTextArea();

        var mes;

        if (e == undefined) {

            var form = document.getElementById('miForm');
            mes = form['mes'].value;

        } else {

            mes = e.target.value;

        }

        mes = parseInt(mes);

        if (isNaN(mes)) {

            errorTextArea('hay que introducir un numero a mes');
            return false;
        } else {

            if (mes >= 1 && mes <= 12) {
                correcto();
                textArea(mes);
                return true;
            } else {
                errorTextArea('el mes debe ser un numero entre 1 y 12');
                return false;
            }

        }

    }

    function checkAny(e) {

        resetTextArea();
        var any;

        if (e == undefined) {

            var form = document.getElementById('miForm');
            any = form['any'].value;

        } else {

            any = e.target.value;

        }

        any = parseInt(any);

        if (isNaN(any)) {
            errorTextArea('hay que introducir un numero a año');
            return false;
        } else {

            if (any >= 2016 && any <= 3000) {
                correcto();
                textArea(any);
                return true;
            } else {
                errorTextArea('el año debe ser un numero entre 2016 y 3000');
                return false;
            }

        }

    }

    function checkData() {

        var form = document.getElementById('miForm');
        var mes = form['mes'].value;
        var any = form['any'].value;
        var dia = form['dia'].value;

        var d = new Date(any, mes, dia);
        console.log("data:" + d);
        var ds = "" + d;
        if (ds == "Invalid Date") {
            errorTextArea('La fecha debe ser correcta');
            return false;
        } else {
            return true;
        }

    }


    //Funciones para escribir cosas a la textArea

    function textArea(texto) {

        var t = document.querySelector('#ta');

        t.value = texto;

    }



    //Funciones para modificar la estética de la textArea

    function resetTextArea() {
        //Borro los contenidos
        var t = document.querySelector('#ta');
        t.value = "";
        t.className = "buit";
        //borro los estilos


    }

    function errorTextArea(textoError) {

        var t = document.querySelector('#ta');
        var res = t.value + " " + textoError;
        t.value = res;
        t.className = "error";

    }

    function correcto() {

        var t = document.querySelector('#ta');
        t.className = "bien";

    }

    //reinicio los contenidos del form
    function reset() {
        nombre.value = "";
        codigo.value = "";
        resetTextArea();
    }





};





//FUNCIONES DE COOKIES

function guardarCookies() {


    //Siento hacer esto así pero el poco tiempo que em queda no me permite lidiar con el scope. És feo, lo siento.
    var form = document.getElementById('miForm');
    var nombre = form['nProducto'];
    var codigo = form['codigo'];
    var mes = form['mes'];
    var any = form['any'];
    var dia = form['dia'];
    var oferta = document.getElementById('oferta').value;
    var tipo = document.querySelector('.tipo:checked');

    setCookie('nombre', nombre.value, 300);
    setCookie('codigo', codigo.value, 300);
    setCookie('dia', dia.value, 300);
    setCookie('mes', mes.value, 300);
    setCookie('any', any.value, 300);
    setCookie('oferta', oferta, 300);
    setCookie('tipo', tipo.value, 300);

}

function cargar() {

    //Siento hacer esto así pero el poco tiempo que em queda no me permite lidiar con el scope. És feo, lo siento.
    var form = document.getElementById('miForm');
    var nombre = form['nProducto'];
    var codigo = form['codigo'];
    var mes = form['mes'];
    var any = form['any'];
    var dia = form['dia'];
    var oferta = document.getElementById('oferta');
    var tipo = getCookie('tipo');
    console.log(getCookie('tipo'));
    document.getElementById(tipo).checked = true;

    nombre.value = getCookie('nombre');
    codigo.value = getCookie('codigo');
    dia.value = getCookie('dia');
    mes.value = getCookie('mes');
    any.value = getCookie('any');
    console.log(getCookie('oferta'));
    oferta.value = getCookie('oferta');


}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}