

<?php

	//session_start();

	require_once "connect.php";

	$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);
	


	if ($polaczenie->connect_errno!=0)
	{
		//echo "Error: ".$polaczenie->connect_errno;
	}
	else
	{




//echo "<p class='green' style='color:green; font-weight:bold; margin:20px; border:solid 3px darkgreen; width: 200px; padding:20px'>Pomyślnie połączono z bazą danych!</p>";



//$query2 = "SELECT id FROM orders WHERE email = '$email'; ";

//$result2 = mysqli_query($polaczenie, $query2);

	//	echo "1";

$query = "TRUNCATE zajete_pola; ";

##$query = "INSERT INTO orders (imie, nazwisko, data, status, nr_tel, email, planowana_data_zakonczenia, tresc, deleted)
##VALUES ($imie, $nazwisko2,  NOW(), 'Oczekuje na akceptację...' , $phone, $email2, NULL, $textarea, '0') LIMIT 1;  ";


//$_SESSION['alert'] = 'Twoje zamówienie zostało dodane do naszej bazy danych!';




$result = mysqli_query($polaczenie, $query);

	header('Location: kolkoikrzyzykmulti.php');

	//header('Location: afteropinion.php');

	}
	
	
?>

