<?php
 
//header('constant-Type:text/html; charset=utf-8');
header("Content-Type: text/html; charset=UTF-8");
 
 
//  $_GET는 정해진 방식 그리고 []인 이유는 index에 넘겨준 값이 두개 이상으므로
    $name = $_GET['name'];
    $msg = $_GET['msg'];
// ""를 사용하면 안에 변수를 구별 가능
    echo "Name : $name <br/>";
    // echo 'Name : ' .$name; //''를 사용하면 이렇게 사용함.
    echo "Message : $msg";
 
?>