<?php
$servername = "192.168.10.1";
$username = "root";
$password = "aa7485";
$dbport = "3306";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbport);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>