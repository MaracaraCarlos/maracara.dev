<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

$formcontent="
  Nombre: $nombre \n
  Correo electrónico: $correo \n
";

$recipient = "maracaracarlos2017@gmail.com";

$subject = "Consulta vía web de $nombre";

$header = "From: $correo \r\n";
$header .= "Content-Type: text/plain; charset=UTF-8";
mail($recipient, $subject, $formcontent, $header) or die("Error");
header("Location: index.html");

?>