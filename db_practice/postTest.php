<?php
 
    header("Content-Type: text/html; charset=UTF-8");
 
    $name= $_POST['name'];
    $message= $_POST['msg'];
 
    echo "Name : $name <br/>";
    echo "Message : $message <br/>";
 
?>
