<?php
//Enviar datos del json al ts
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

$data=file_get_contents('notas.JSON');

$json=json_encode($data);

$json = json_decode($json);

echo $json;
