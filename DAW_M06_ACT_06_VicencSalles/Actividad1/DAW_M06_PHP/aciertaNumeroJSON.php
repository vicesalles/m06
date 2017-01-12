<?php
session_start();
$resp = "{";

if (isset($_GET['inicio'])) {     //se ha indicado iniciar un nuevo juego
    $numeroAleatorio = rand(0, 10); //seleccionamos un numero aleatorio entre 0 y 10
    $_SESSION['numeroOculto'] = $numeroAleatorio;
    $resp .= "\"inicio\":\"" . $_SESSION['numeroOculto'] . "\""; //retornamos el numero generado
} else {

    $numeroUsuario = $_GET['numero'];
    $numeroOculto = $_SESSION['numeroOculto'];

    if ($numeroUsuario > $numeroOculto) {
        $resp .= "\"encontrado\":\"no\"," . "\n";
        $resp .= "\"mensaje\":\"Has introducido un valor demasiado alto\"" . "\n";
    } else {
        if ($numeroUsuario < $numeroOculto) {
            $resp .= "\"encontrado\":\"no\"," . "\n";
            $resp .= "\"mensaje\":\"Has introducido un valor demasiado bajo\"" . "\n";
        } else {
            $resp .= "\"encontrado\":\"si\"," . "\n";
            $resp .= "\"mensaje\":\"Exacto!\"" . "\n";
        }
    }
}
//finalizamos la estructura XML
$resp .= "}" . "\n";

//insertamos la respuesta XML
echo($resp);
?>