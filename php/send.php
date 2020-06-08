<?php
    //llenada de campos
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $producto = $_POST['producto'];

    //datos para el correo
    $destinatario = "santiago3tovar@gmail.com";
    $asunto = "Contacto desde la Web";

    // .= es para concatenar con el carta anterior
    $carta = "De: $nombre \n ";
    $carta .= "Telefono: $telefono \n";
    $carta .= "Correo: $correo \n";
    $carta .= "Producto: $producto";

    // enviando mensaje
    mail($destinatario, $asunto, $carta);
    header('location:../enviado.html');
?>