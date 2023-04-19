<?php

if($_SERVER['REQUEST_METHOD']=="POST"){
    
    $email = $_POST['email'];
 

    require_once('../model/claseconexion.php');
    $obj = new Conection();
    $obj = $obj->login($email);

    echo json_encode(["estado" =>$obj]);
}
