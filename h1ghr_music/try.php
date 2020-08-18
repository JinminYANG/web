<?php
$db_host = "localhost"; 
$db_user = "yangjinmin";
$db_passwd = "aa7594609*";
$db_name = "yangjinmin";
$db_conn = mysqli_connect($db_host,$db_user,$db_passwd,$db_name);

if (mysqli_connect_errno($conn)) {
echo "데이터베이스 연결 실패: " . mysqli_connect_error();
} else {
echo "데이터베이스 연결 성공";
$db_sql = "SELECT * FROM albums";
$db_result = mysqli_query( $db_conn, $db_sql );
$rowCount= mysqli_num_rows($db_result);

echo'<ul>';
while( $db_row = mysqli_fetch_array( $db_result ) ) {
    //echo '<p>' . $db_row[ 'id' ] . $db_row[ 'at_name' ] . $db_row[ 'ab_name' ] . $db_row[ 'date' ] . $db_row[ 'ab_src' ] . '</p>';
        echo '<li>' . $db_row[ 'id' ] . $db_row[ 'at_name' ] . $db_row[ 'ab_name' ] . $db_row[ 'date' ] . $db_row[ 'ab_src' ] . '</li>';
    }
echo'</ul>';

}
mysqli_close($db_conn);
?>