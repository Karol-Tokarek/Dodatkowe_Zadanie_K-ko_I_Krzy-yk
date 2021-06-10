<?php
require_once "connect.php";

	$conn = @new mysqli($host, $db_user, $db_password, $db_name);
	// $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 1)
// 		{
// 			if($row[$i + 1] == 1)
// 			{
// 				echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X";				echo "<div class='krzyzyk'></div>";


// 			}
// 		}
// 	}
// }

$result = mysqli_query($conn, "SELECT * FROM zajete_pola;");
 
$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}
 
echo json_encode($data);
exit();