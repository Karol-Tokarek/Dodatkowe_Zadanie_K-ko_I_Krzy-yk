<?php
$conn = mysqli_connect("localhost", "root", "", "mtsklep");
$result = mysqli_query($conn, "SELECT * FROM opinie_uzytkownikow WHERE deleted=0 ORDER BY data_wystawienia DESC LIMIT 10;");
 
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
 
echo json_encode($data);



	exit();
