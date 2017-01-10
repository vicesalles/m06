document.addEventListener('DOMContentLoaded', function () {

    console.log('DOM Cargado');

    //Conectamos los elementos del DOM que nos interesan
    const inicioXML = document.querySelector('#inicioXML');
    const inicioJSON = document.querySelector('#inicioJSON');
    const checkAjaxXML = document.querySelector('#checkAjaxXML');
    const checkAjaxJSON = document.querySelector('#checkAjaxJSON');
    const encontrado = document.querySelector('#encontrado');
    const mensaje = document.querySelector('#mensaje');
    const numero = document.querySelector('#numero');

    //Listeners
    numero.addEventListener('change', function (e) { console.log('change: ' + e.target.value) }, false);
    inicioXML.addEventListener('click', xmlRq, false);

    //Funciones
    function xmlRq() {
        console.log('inicio request');
        let req = new XMLHttpRequest();
        const url = './aciertaNumeroXML.php?inicio=si';

        //Abro la conexión
        req.open('GET', url, true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        //Esperamos cambio de estado
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log('Respuesta recibida: '+req);
                procesaRespuesta(req.responseXML);
            } else {
                console.log('Vaya, parece que falla algo...');
            }

        }
    }

    function procesaRespuesta(res) {
        console.log('el número aleatorio es: '+res);
    }

});