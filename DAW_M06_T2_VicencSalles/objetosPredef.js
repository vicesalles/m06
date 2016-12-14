window.onload = function () {
    //EJERCICIO 2
    console.log("Una vez cargada la web");
    //EJERCICIO 3
    document.getElementById('div1').innerHTML = "nuevo contenido <span  style='color:blue;'>Nuevo</span>";

    //EJERCICIO 4
    //M'ho organitzo així pq és més fàcil de visualitzar.
    var llista = "";
    var continguts = [
        "Valor máximo que puede tener un número en JavaScript: " + Number.MAX_VALUE,
        "Valor mínimo que puede tener un número en JavaScript " + Number.MIN_VALUE,
        "Anchura total de la pantalla: " + window.screen.width,
        "Altura de la página web: " + window.innerHeight,
        "Anchura de la página web: " + window.innerWidth,
        "URL de la página web: " + window.location.href,
        "Nombre de la página web con su extensión " + window.location.pathname,
        "Un valor aleatorio entre 0 y 200: " + Math.floor(Math.random() * 200),
        "Sistema operativo del ordenador: " + navigator.platform,
    ];

    for (i = 0; i < continguts.length; i++) {
        llista += "<li>" + continguts[i] + "</li>";
    }

    document.getElementById('listapropiedades').innerHTML = "<ul>" + llista + "</ul>"

    //EJERCICIO 5

    console.log("cookies: " + document.cookie);

    if (document.cookie == "") {
        username = prompt("Introduce un nombre de usuario");
        document.cookie = "nombre_usuario=" + username;
        //Per veure si ha funcionat
        console.log(document.cookie);
    }
    //EJERCICIO 6

    var titol = "";

    while (titol == "" || titol == null) {

        titol = prompt('Introduce un títol para la pàgina');

    }

    titol.toUpperCase;
    document.title = titol;

    //EJERCICIO 7
    var input = "";
    var minimo;
    var maximo;

    while (input == "" || input == null) {

        input = pide();

    }


};

//Función pide que reclama dos numeros al usuario

function pide() {

    var res = prompt('Introduce 2 numeros separados por una coma');

    //Buscamos una coma
    var coma = res.indexOf(',');
    console.log(coma);

    //Hay coma?
    if (coma == -1) {

        alert('No se ha detectado ninguna coma');
        res = pide();

    } else {

        valors = res.split(',');

        //Son numeros?
        if (sonNumeros(valors[0]) && sonNumeros(valors[1])) {

            minimo = valors[0];
            maximo = valors[1];

            if (rango(minimo) && rango(maximo)) {

                var a = aleatorio(minimo, maximo);
                var b = aleatorio(minimo, maximo);
                window.open("ventana.html", "", "location=no, menubar=no, status=no, toolbar=no,width=" + a + ",height=" + b);


            } else {
                alert('Los numeros deben estar entre 200 y 800');
                res = pide();
            }

        } else {
            alert('Debes introducir números');
            res = pide();

        }

    }

    return res;

}

//Detecta si los contenidos de un array son numeros
function sonNumeros(arrayN) {

    var res = true

    for (i = 0; i < arrayN.length; i++) {

        try {
            parseInt(arrayN[i]);
            console.log(parseInt(arrayN[i]));
        }
        catch (err) {
            console.log('No són números');
            res = false;
        }

    }
    return res;

}

//Comprueva si un valor está entre 200 i 800

function rango(numero) {

    var res = false;

    if (numero >= 200 && numero <= 800) {
        res = true;
    }

    return res;

}


//Genera un numero aleatorio entre dos valor
function aleatorio(valA, valB) {

    var res;
    var max = Math.max(valA, valB);
    var min = Math.min(valA, valB);
    res = Math.floor(Math.random() * (max - min + 1) + min);
    
    return res;

}


//Genera un aviso de cargada
var alertaCarga = function () {
     document.getElementById('alerta').innerHTML="Cargando...";
}
