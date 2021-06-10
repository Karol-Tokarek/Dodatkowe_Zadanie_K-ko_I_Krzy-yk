

<?php

	session_start();

	require_once "connect.php";

	$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);
	$textarea = $_GET['textarea'];
$login = $_SESSION['login'];
$kind = $_GET['kind'];

 if(!isset($textarea) || trim($textarea) == '' || $textarea == " "){
 		header('Location: index.php');

 }
	if ($polaczenie->connect_errno!=0)
	{
		echo "Error: ".$polaczenie->connect_errno;
	}
	else
	{






//echo "<p class='green' style='color:green; font-weight:bold; margin:20px; border:solid 3px darkgreen; width: 200px; padding:20px'>Pomyślnie połączono z bazą danych!</p>";



//$query2 = "SELECT id FROM orders WHERE email = '$email'; ";

//$result2 = mysqli_query($polaczenie, $query2);

if(strlen($textarea) < 501){

$query = "INSERT INTO opinie_uzytkownikow (nickname_wystawiajacego, tresc_opinii, data_wystawienia, rodzaj )
VALUES ('$login', '$textarea', NOW(), '$kind') ";

##$query = "INSERT INTO orders (imie, nazwisko, data, status, nr_tel, email, planowana_data_zakonczenia, tresc, deleted)
##VALUES ($imie, $nazwisko2,  NOW(), 'Oczekuje na akceptację...' , $phone, $email2, NULL, $textarea, '0') LIMIT 1;  ";


//$_SESSION['alert'] = 'Twoje zamówienie zostało dodane do naszej bazy danych!';




$result = mysqli_query($polaczenie, $query);


	header('Location: afteropinion.php');

	}

else
{
		header('Location: opiniegraczy.php');

}
}		
	
?>

