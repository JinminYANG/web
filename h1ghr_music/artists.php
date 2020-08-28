<?php
//header( 'Content-Type: application/json' );

$at_name = $_POST['at_name'];

//$members = array('jay_park'=>array( 'album'=>'안녕하세요 저는 양진민 입니다.',    'da'=>'2020-08-25' ));

//$members = array( 'album'=>'안녕하세요 저는 양진민 입니다.', 'da'=>'2020-08-25' ));


//$members += array( 'jay_park'+=>
//array(
//    'album'+=>'왜 안될까',
//    'da'+=>'2020-08-26'. )
//);

$albums = [];
$dates = [];
array_push($albums, "안녕하세요.", "Hello World!", "Goodbye World!");
array_push($dates, "2020-08-12", "2020-08-15", "2020-08-26");

//$albums += ["안녕하세요"], ["Hello World!"], ["Goodbye World!"]; XXX
//echo $families['Smith']['dad']; // 'Bob'

for($i = 0; $i < count($albums); $i++) {
//    echo '{"ab_name" : "'.$albums[$i].'" }';
//    echo '{"ab_name" : "'.$albums[$i].'", "date" : "'.$dates[$i].'"}' ;
//    echo $dates[$i];
//    echo '{ "date" : "'.$dates[$i].'"}';
//    $list[] = array("abs"=>$)

}

//echo '{"ab_name" : "'.$albums[0].'" }';
//echo '{"ab_name" : "'.$albums[1].'" }';


//
//echo '{ "at_name" : "'.$at_name.'" ,
//    "ab_name" : "'.$members[$at_name]['album'].'",
//    "date" : "'.$members[$at_name]['da'].'" }';

$db_host = 'localhost';
$db_user = 'yangjinmin';
$db_passwd = 'aa7594609*';
$db_name = 'yangjinmin';
$db_conn = mysqli_connect( $db_host, $db_user, $db_passwd, $db_name );

$db_sql = "SELECT * FROM albums WHERE at_name = '{$at_name}';";
//$db_sql = "SELECT * FROM albums;";


$db_result = mysqli_query( $db_conn, $db_sql );
//while( $db_row = mysqli_fetch_row( $db_result ) ) {
    //    $members += array( 'jay_park'=>
    //        array(
    //            'album'=>'왜 안될까',
    //            'da'=>'2020-08-26'. )
    // );
    
//    $list[] = array("ab_name" =>$db_row['ab_name'], "date" =>  $db_row['date']);
//    array_push($albums,$db_row['ab_name']);
//    array_push($dates,$db_row['date']);
//}
for($k=0; $db_row = mysqli_fetch_row( $db_result ); $k++ ){
//    array_push($result, array('name'=>$row[0],'yearmonthday'=>$row[1],'age'=>$row[2],'address'=>$row[3]));
    array_push($albums, array('ab_name'=>$db_row[0]));

    array_push($albums, ".{$db_row['ab_name']}.");
    array_push($dates, ".{$db_row['ab_name']}.");
    echo '{"ab_name" : "'.$albums[$k].'", "date" : "'.$dates[$k].'"}' ;
//    echo '{"ab_name" : "'.$db_row['ab_name'][$k].'", "date" : "'.$db_row['ab_name'][$k].'"}' ;

    
//   echo $albums[$k];
//  echo $dates[$k];
//  $list[] = array("ab_name" => $db_row[ab_name], "date" => $db_row[date]);
}

echo json_encode(array("result"=>$result),JSON_UNESCAPED_UNICODE);

//echo $list;
//echo '{ "at_name" : "'.$at_name.'" ,
//    "ab_name" : "'.$members[$at_name]['album'].'",
//    "date" : "'.$members[$at_name]['da'].'" }';
?>