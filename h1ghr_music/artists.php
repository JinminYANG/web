<?php

$at_na = $_POST['user_id'];

$db_host = 'localhost';
$db_user = 'yangjinmin';
$db_passwd = 'aa7594609*';
$db_name = 'yangjinmin';
$db_conn = mysqli_connect( $db_host, $db_user, $db_passwd, $db_name );

mysqli_set_charset( $db_conn, 'utf8' );
$pageDom = new DomDocument();
$searchPage = mb_convert_encoding( $htmlUTF8Page, 'HTML-ENTITIES', 'UTF-8' );
@$pageDom->loadHTML( $searchPage );
mysqli_query( $db_conn, 'set session character_set_connection=utf8;' );
mysqli_query( $db_conn, 'set session character_set_results=utf8;' );
mysqli_query( $db_conn, 'set session character_set_client=utf8;' );
$db_sql = 'SELECT * FROM albums;';
$db_result = mysqli_query( $db_conn, $db_sql );
while( $db_row = mysqli_fetch_array( $db_result ) ) {
    echo '<table class="list_table"><tbody><tr><td>' . $db_row[ 'ab_name' ] . '</td><td>' . $db_row[ 'date' ] . '</td></tr></tbody></table>';
    
    $members = array(
		'jay-park'=>array('ab'=>$db_row[ 'ab_name' ], 'da'=>$db_row[ 'date' ])
	);
    
    echo '{"user_id":"}'.$user_id.'","user_ab": "'.$members[$user_id]['ab'].'"}';
}
//$members = array(
//		'sik-k'=>array('ab'=>$db_row[ 'ab_name' ], 'da'=>$db_row[ 'date' ])
//	);
?>