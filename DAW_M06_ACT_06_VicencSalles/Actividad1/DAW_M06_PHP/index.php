<!DOCTYPE html>
<html lang="es">

    <head>
        <meta charset="UTF-8">
        <title>M06: AJAX y JQUERY - Actividad 1 - Vicenç Sallés</title>
        <script type="text/javascript" src="./aciertaNumero.js"></script>
        <link rel="stylesheet" href="estilo.css"/>
    </head>

    <body>
        <main>
            <section>
                <div class="clk" id="inicioXML">INICIO XML</div>
                <div class="clk" id="inicioJSON">INICIO JSON</div>
                <input type="text" id="numero" placeholder="introduce un número" value=""/>
                <div class="clk" id="checkAjaxXML"> CHECK AJAX XML</div>
                <div class="clk" id="checkAjaxJSON"> CHECK AJAX JSON</div>
            </section>
            <section id="marcador">
                <div id="encontrado"></div>
                <div id="mensaje"></div>
            </section>            
        </main>
        <footer>
            <div>ACIERTOS <span id="aciertos" class="puntos"> 0</span></div>
            <div>FALLOS <span id="fallos" class="puntos"> 0</span></div>
        </footer>
    </body>

</html>
