<?php
 
    $file=$_FILES['upload'];
 
    $fileName= $file['name'];
    $fileSize= $file['size'];
    $fileType= $file['type'];
    $fileTmpName= $file['tmp_name']; //tmp_name는 정해진 글자.
 
    echo "$fileName <br/>";
    echo "$fileSize <br/>";
    echo "$fileType <br/>";
    echo "$fileTmpName <br/>";
    
    $path= "uploads/";
    $dstName= date('Ymdhis').".png";
 
    $result=move_uploaded_file($fileTmpName, $path.$dstName);
    if($result) echo "success";
    else echo "fail";
 
?>
