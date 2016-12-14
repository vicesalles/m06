document.addEventListener('DOMContentLoaded', function () {

    //Asigno los elementos del DOM a variables de JS.

    var domNodes = document.querySelector('#domNodes');
    var addDiv = document.querySelector('#addDiv');
    var addSpan = document.querySelector('#addSpan');
    var setContentPrev = document.querySelector('#setContentPrev');
    var delPrevNode = document.querySelector('#delPrevNode');
    var delNextNode = document.querySelector('#delNextNode');
    var addAttr = document.querySelector('#addAttr');
    var delAllType = document.querySelector('#delAllType');
    var replaceMeForFirst = document.querySelector('#replaceMeForFirst');

    //Preparo los listeners.
    addDiv.addEventListener('click', creaDiv);
    addSpan.addEventListener('click', creaSpan);
    setContentPrev.addEventListener('click', setPrev);
    delPrevNode.addEventListener('click', delPrev);
    delNextNode.addEventListener('click', delNextNo);
    addAttr.addEventListener('click', addAt);
    delAllType.addEventListener('click', delAll);
    replaceMeForFirst.addEventListener('click', replaceF);


    //Esta función crea un div dentro de domNodes
    function creaDiv() {

        var txt = pideTexto('Introduce un texto para el nuevo Div');
        creaNodo('div', 'addDiv', txt);

    }

    function creaSpan() {
        var txt = pideTexto('Introduce un texto para el nuevo Span');
        creaNodo('span', 'addSpan', txt);
    }

    //Ejercicio 2.3
    function setPrev() {

        creaNodo('div', 'setContentPrev', 'setContentPrev', '', 'inPrev(this)');

    }

    //Ejercicio 2.4
    function delPrev() {

        creaNodo('div', 'delPrevNode', 'Remove Preview', '', 'delPrev(this)');

    }

    //Ejercicio 2.5
    function delNextNo() {

        creaNodo('div', 'delNextNode', 'Remove Next', '', 'delNext(this)');

    }

    //Ejercicio 2.6
    function addAt() {

        creaNodo('div', 'delNextNode', 'Ad done Attr', '', 'addAtt(this)');

    }

    //Ejercicio 2.7
    function delAll() {

        creaNodo('div', 'delAllType', 'Delete All Of', '', 'delAllT()');

    }

    //Ejercicio 2.8
    function replaceF() {

        var txt = pideTexto();
        creaNodo('div', 'replaceMeForFirst', txt, '', 'mueveDiv(this)');

    }

    //Esta función crea nodos nuevos
    function creaNodo(tipo, clase, contenido, posicion, onclick) {

        var cnt;

        if (!onclick) {

            cnt = "<" + tipo + " class=\"" + clase + "\">" + contenido + "</" + tipo + ">";

        } else {

            cnt = "<" + tipo + " class=\"" + clase + "\" onClick=\"" + onclick + "\">" + contenido + "</" + tipo + ">";

        }

        //Si no se especifica posición, se inserta el nodo sin más.
        if (!posicion) {

            domNodes.insertAdjacentHTML('beforeend', cnt);

        } else {

            domNodes.insertAdjacentHTML(posicion, cnt);

        }


    }




});


//Inserta al nodo anterior
function inPrev(e) {
    var txt = pideTexto();
    if (e.previousElementSibling) {
        e.previousElementSibling.innerHTML = txt;
    } else {
        alert('primero debes crear un nodo hermano');
    }

}

//Borra nodo anterior
function delPrev(e) {

    if (e.previousElementSibling) {
        domNodes.removeChild(e.previousElementSibling);
    }

}

//Borra nodo siguiente
function delNext(e) {

    if (e.nextElementSibling) {
        domNodes.removeChild(e.nextElementSibling);
    }

}

//Esta función pide un texto al usuario
function pideTexto(pregunta) {
    if (!pregunta) {
        pregunta = 'introduce un texto';
    }
    var texto = prompt(pregunta);
    return texto;
}

//Esta funcion añade atributos a un nodo
function addAtt(e) {

    att = pideTexto('Introduce un atributo');
    val = pideTexto('Introduce un valor');
    e.setAttribute(att, val);


}

//Pone el div como primer child de un nodo
function mueveDiv(e) {

    domNodes.insertBefore(e, domNodes.children[0]);

}

//borra todos los elementos de un tipo determinado
function delAllT(e) {

    d = pideTexto('Introduce el tipo de elementos que quieres borrar');
    dl = domNodes.querySelectorAll(d);

    for (i = 0; i < dl.length; i++) {

        domNodes.removeChild(dl[i]);

    }


}