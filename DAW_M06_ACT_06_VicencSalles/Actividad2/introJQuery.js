//Esta función se dispara cuando todos los elementos del DOM se han cargado correctamente.

$(document).ready(function () {

    //El Div #divMobil se volverà azul sólo empezar.
    $('#divMobil').css('background-color', 'blue');

    //Cuando passemos el cursor por encima, #divMobil se pondrá azul. En salir, se pondrá naranja.
    $('#setBlueColor').hover(function () { $('#divMobil').css('background-color', 'green') }, function () { $('#divMobil').css('background-color', 'orange') });

    //Cuando cliquemos, #divMobil cambiará a color azul
    $('#setBlueColor').click(function () { $('#divMobil').css('background-color', 'blue') });

    //Cuando cliquemos, #divMobil cambiará a color rojo
    $('#setRedColor').click(function () { $('#divMobil').css('background-color', 'red') });

    //En clicar, #divMobil desaparecerá
    $('#setInvisible').click(function () { $('#divMobil').fadeOut() });

    //En clicar, #divMobil reaparecerá
    $('#setVisible').click(function () { $('#divMobil').fadeIn() });

    //Al clicar, #divMobil aparecerá o desaparecerá según su estado.
    $('#toggleVisible').click(function () { $('#divMobil').fadeToggle() });

    //La altura de #divMobil se incrementa en 50px en 1.5 segundos al hacer click
    $('#incSize').click(function () { $('#divMobil').animate({ height: "+=50px" }, { duration: 1500 }) });

    //La altura de #divMobil disminuye en 50px en 2 segundos al hacer click
    $('#decSize').click(function () { $('#divMobil').animate({ height: "-=50px" }, { duration: 2000 }) });

    //En clicar, aumentamos la distancia a la izquierda de #divMobil en 50px. La animación dura 1.5segundos
    $('#incRight').click(function () { $('#divMobil').animate({ left: "+=50px" }, { duration: 1500 }) });

    //En clicar, aumentamos la distancia a la derecha de #divMobil en 50px. La animación dura 1.5segundos
    $('#decRight').click(function () { $('#divMobil').animate({ left: "-=50px" }, { duration: 1500 }) });

    //Al poner el ratón encima la imagen, #infoImg crecerà hasta 100% al salir volverà a 30%, siempre con una animación de 1 segundo de durada
    $('.contentImg').hover(function () { $('#infoImg').animate({ height: "100%" }, { duration: 1000 }) }, function () { $('#infoImg').animate({ height: "30%" }, { duration: 1000 }) });

    //Al estar .toggle(func,func) deprecated desde la versión 1.9 de jquery, utilizo un enfoque distinto:
    var anim = 0;
    //Al clicar iniciamos una animación continua. 
    $('#movContinuo').click(function () {
        if (anim === 0) {
            animaMob();
            anim = 1;
        } else {
            $('#divMobil').stop();
            anim = 0;
        }

    });

    //Esta función anima el div #divMobil
    function animaMob() {
        $('#divMobil').animate({ left: '100%' },
            {
                duration: 4000, complete: function () {
                    $('#divMobil').animate({ left: '0%' }, {
                        duration: 4000, complete: animaMob()
                    });
                }

            });
    }

});