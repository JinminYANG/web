<?php
    $at_name = $_POST['at_name'];

    $db_host = 'localhost';
    $db_user = 'yangjinmin';
    $db_passwd = 'aa7594609*';
    $db_name = 'yangjinmin';
    $db_conn = mysqli_connect( $db_host, $db_user, $db_passwd, $db_name );

    mysqli_query($db_conn, "set session character_set_connection=utf8;");
    mysqli_query($db_conn, "set session character_set_results=utf8;");
    mysqli_query($db_conn, "set session character_set_client=utf8;");

    $jb_sql = "SELECT * FROM albums WHERE at_name = '{$at_name}'";

    $jb_result = mysqli_query( $db_conn, $jb_sql );
    while( $jb_row = mysqli_fetch_array( $jb_result ) ) {
        echo '<tr><td>' . $jb_row[ 'ab_name' ] . '</td><td>' . $jb_row[ 'date' ] . '</td></tr>';
    }
?>