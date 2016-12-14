
//Aquí está el Objeto Coche.
function Coche(nombre, precio) {

    //ATRIBUTOS
    this.nombre = nombre;
    this.precio = precio;
    this.extras = [];

    //METODOS
    this.addExtra = function (extra) {

        this.extras.push(extra);
        //console.log('Extra añadido correctamente. En total, se han añadido ' + this.extras.length + ' extras.');
        return this.extras.length;
    }

    this.getExtra = function (nPos) {

        console.log(this.extras[nPos]);
        return this.extras[nPos];

    }

}

//Aquí está el objeto consecionario
function Concesionario(nombre, direccion) {

    //ATRIBUTOS
    this.nombre = nombre;
    this.direccion = direccion;
    this.comanda = [];

    //MÉTODOSs
    this.setNombre = function (n) {
        this.nombre = n;
        console.log('Genial, el Concesionario ahora se llama: ' + this.nombre);
    }

    this.setDireccion = function (d) {
        this.direccion = d;
        console.log('La nueva direcció del Concesionario es: ' + this.direccion);
    }

    this.addComanda = function (c) {
        this.comanda.push(c);
        console.log("Se ha añadido la nueva comanda correctamente");
        return this.comanda.length;
    }

}

//Creo múltiples extras para los coches

var extras = ["ABS", "Aire acondicionado", "Bluetooth", "GPS", "Tapiceria premium"];

//Esta función genera un número aleatorio entre 0 y el numero que le pasemos

function rnd(max) {

    return Math.floor(Math.random() * max);

}

//Esta función selecciona el índice de un Extra para coche de forma totalmente aleatoria

function extraRandom() {

    var n = extras.length;

    return rnd(n);

}

//A esta función le paso un coche y se le añaden 4 extras aleatorios

function selExtras(coche) {

    //Como hay que seleccionar 4 extras de 5 disponibles, lo que voy a hacer es 'sortear' qual de los 5 extras disponibles no tiene el coche:
    var noDisponible = extraRandom();
    //console.log("noDisponible " + noDisponible);

    for (i = 0; i < extras.length; i++) {

        if (i != noDisponible) {

            coche.addExtra(extras[i]);

        }

    }

}

//Creo el nuevo Concesionario
var nCon = new Concesionario("Yamabuki", "Vila del Pingüi c/Corb");

//Este array contendrà los coches nuevos
var nComanda = [];

//Ahora creo coches y los añado a mi array de coches nuevos
var a = new Coche("Mini", 13000);
nComanda.push(a);
var b = new Coche("Maxi", 3000);
nComanda.push(b);
var c = new Coche("Pajero", 6000);
nComanda.push(c);
var d = new Coche("Moco", 6000);
nComanda.push(d);

//Añadimos los extras a los coches y los coches al Concesionario;

for (l = 0; l < nComanda.length; l++) {

    selExtras(nComanda[l]);
    //console.log(nComanda[l]);
    nCon.addComanda(nComanda[l]);

}


//VAmos a añadir todo esto al DOM

window.onload = function () {

    var html = document.getElementById('myCon');
    var contingut = '<div class="linia"><h2>COMANDAS</h2></div>';
    contingut += '<div class="linia"><div>Nombre: ' + nCon.nombre + '</div><div>Direccion: ' + nCon.direccion + '</div></div>';
    contingut += '<div class="linia cap"><div>Posición</div><div>Nombre</div><div>Precio</div><div>Extras</div></div>';
    var nCotxes = "";
    for (k = 0; k < nCon.comanda.length; k++) {

        nCotxes += '<div class="linia item"><div>' + (k + 1) + '</div><div>' + nCon.comanda[k].nombre + '</div><div>' + nCon.comanda[k].precio + '</div>'
        nCotxes += '<div><ul>';

        for (j = 0; j < nCon.comanda[k].extras.length; j++) {


            nCotxes += '<li>' + nCon.comanda[k].extras[j] + '</li>';

        }

        nCotxes += '</div></ul>';
        nCotxes += '</div>';
    }

    contingut += nCotxes;
    contingut += '</div>';

    html.innerHTML = contingut;

};



//EJERCICIO 7

function Xextra(nombre, url) {

    this.nombre = nombre;
    this.url = url;

}



setTimeout(



    function () {


        var x1 = new Xextra('ABS', './img/a');
        var x2 = new Xextra('MP3', './img/b');
        var x3 = new Xextra('Wifi', './img/c');
        var x4 = new Xextra('Antirobo', './img/d');
        var x5 = new Xextra('Llantas', './img/e');

        extras = [x1, x2, x3, x4, x5];

        //sustituyo los extras antinguos por los nuevos

        //Añadimos los extras a los coches y los coches al Concesionario;

        for (o = 0; o < nCon.comanda.length; o++) {

            nCon.comanda[o].extras=[];
            selExtras(nCon.comanda[o]);
           
        }


        var html = document.getElementById('ej7');
        var contingut = '<div class="linia"><h2>COMANDAS (ejercicio7)</h2></div>';
        contingut += '<div class="linia"><div>Nombre: ' + nCon.nombre + '</div><div>Direccion: ' + nCon.direccion + '</div></div>';
        contingut += '<div class="linia cap"><div>Posición</div><div>Nombre</div><div>Precio</div><div>Extras</div></div>';
        var nCotxes = "";
        for (m = 0; m < nCon.comanda.length; m++) {

            nCotxes += '<div class="linia item"><div>' + (m + 1) + '</div><div>' + nCon.comanda[m].nombre + '</div><div>' + nCon.comanda[m].precio + '</div>'
            nCotxes += '<div><ul>';

            for (n = 0; n < nCon.comanda[m].extras.length; n++) {


                nCotxes += '<li>' + nCon.comanda[m].extras[n].nombre + ' <img src="' + nCon.comanda[m].extras[n].url + '.png"/></li>';

            }

            nCotxes += '</div></ul>';
            nCotxes += '</div>';
        }

        contingut += nCotxes;
        contingut += '</div>';

        html.innerHTML = contingut;

    }
    , 1000);