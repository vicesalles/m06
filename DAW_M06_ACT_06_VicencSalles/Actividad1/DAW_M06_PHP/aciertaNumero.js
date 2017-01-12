document.addEventListener('DOMContentLoaded', function () {

    //Conectamos los elementos del DOM que nos interesan
    var inicioXML = document.querySelector('#inicioXML');
    var inicioJSON = document.querySelector('#inicioJSON');
    var checkAjaxXML = document.querySelector('#checkAjaxXML');
    var checkAjaxJSON = document.querySelector('#checkAjaxJSON');
    var encontrado = document.querySelector('#encontrado');
    var mensaje = document.querySelector('#mensaje');
    var numero = document.querySelector('#numero');
    var okSpan = document.querySelector('#aciertos');
    var koSpan = document.querySelector('#fallos');

    //Listeners
    inicioXML.addEventListener('click', xmlRq, false);
    checkAjaxXML.addEventListener('click', xmlRqNum, false);
    inicioJSON.addEventListener('click', jsonRq, false);
    checkAjaxJSON.addEventListener('click', jsonCheckRq, false);

    //Variables globales
    var aciertos = 0;
    var fallos = 0;


    //Funciones

    //Inicio XML
    function xmlRq() {
        //console.log('Creación request');
        var http = new XMLHttpRequest();
        var url = 'aciertaNumeroXML.php?inicio=si';

        //Abro la conexión
        http.open("GET", url, true);
        //console.log('Cabecera');
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        //Esperamos cambio de estado
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                //console.log('Respuesta recibida: '+ http);
                procesaRespuesta(http.responseXML);
            }
        }

        http.send(null);
    }
    //Respuesta Inicio XML
    function procesaRespuesta(res) {

        //La respuesta es un conjunto de nodos que debo procesar. Pero como se que mi nodo solo tiene un child no Itero...    
        var resultado = res.getElementsByTagName('inicio')[0].childNodes[0].nodeValue;
        console.log('Número generado: ' + resultado);

        imprimirMensaje('se ha generado un nuevo número');

    }

    //Check Ajax XML
    function xmlRqNum() {

        var http = new XMLHttpRequest();
        var num = numero.value;
        console.log('num: ' + num);
        var url = 'aciertaNumeroXML.php?numero=' + num;

        //Abro la conexión
        http.open("GET", url, true);
        //console.log('Cabecera');
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        //Esperamos cambio de estado
        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                //console.log('Respuesta recibida: '+ http);
                procesaRespuestaNum(http.responseXML);
            }
        }

        http.send(null);

    }

    //Respuesta Check Ajax XML
    function procesaRespuestaNum(res) {

        //Accedo a los valores de respuesta
        var encontrado = res.getElementsByTagName('encontrado')[0].childNodes[0].nodeValue;
        var mensaje = res.getElementsByTagName('mensaje')[0].childNodes[0].nodeValue;

        console.log(encontrado);
        //Actualización del marcador
        if (encontrado === "si") {
            acierto();
        } else {
            fallo();
        }

        //Los añado al DOM
        imprimirEncontrado(encontrado);
        imprimirMensaje(mensaje);

    }


    //Inicio JSON
    function jsonRq() {

        var http = new XMLHttpRequest();
        var url = "./aciertaNumeroJSON.php?inicio=1";

        http.open('GET', url, true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                //console.log('Respuesta recibida: '+ http);
                respuestaJSON(http.responseText);
            }
        };

        http.send(null);

    }

    //Respuesta Inicio JSON
    function respuestaJSON(res) {

        var jres = JSON.parse(res);
        console.log('Número generado: ' + jres.inicio);

        imprimirMensaje('se ha generado un nuevo número');

    }

    //Check Ajax JSON

    function jsonCheckRq() {
        var http = new XMLHttpRequest();
        var num = numero.value;
        var url = "./aciertaNumeroJSON.php?numero=" + num;

        http.open('GET', url, true);
        http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                //console.log('Respuesta recibida: '+ http);
                respuestaCheckJSON(http.responseText);
            }

        };

        http.send(null);

    }

    //Respuesta Check Ajax JSON
    function respuestaCheckJSON(res) {

        var jres = JSON.parse(res);
        var encontrado = jres.encontrado;
        var mensaje = jres.mensaje;

        console.log(encontrado);
        //Actualización del marcador
        if (encontrado === "si") {
            acierto();
        } else {
            fallo();
        }

        imprimirEncontrado(encontrado);
        imprimirMensaje(mensaje);

    }

    //Esta función muestra en el DIV 'mensaje' cualquier STRING que le pasemos.
    function imprimirMensaje(mes) {

        mensaje.innerHTML = mes;

    }

    //Esta función muestra en el DIV 'encontrado' cualquier STRING que le pasemos.
    function imprimirEncontrado(mes) {

        encontrado.innerHTML = mes;

    }

    //Actualiza la puntuación de aciertos
    function acierto() {
        aciertos++;
        okSpan.innerHTML = aciertos;
    }

    //Actualiza la puntuación de aciertos
    function fallo() {        
        fallos++;
        koSpan.innerHTML = fallos;       
    }

});