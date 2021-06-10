<?php

// $login = $_POST['LOGIN'];
// echo $login;
// $password = $_POST['PASS'];
// echo $password;
?>

<?php

	session_start();
	
function filtruj($zmienna)
    {
      
        return $zmienna;
    }
    

   
	require_once "connect.php";

	$polaczenie = @new mysqli($host, $db_user, $db_password, $db_name);
	
	if ($polaczenie->connect_errno!=0)
	{
		echo "Error: ".$polaczenie->connect_errno;
	}
	else
	{

		  //    $login = filtruj($_POST['login']);
    //     $haslo1 = filtruj($_POST['haslo1']);
    //     $haslo2 = filtruj($_POST['haslo2']);
    //     $email = filtruj($_POST['email']);
    //     $ip = filtruj($_SERVER['REMOTE_ADDR']);
        
    //     // sprawdzamy czy login nie jest już w bazie
    //     if (mysql_num_rows(mysql_query("SELECT login FROM uzytkownicy WHERE login = '".$login."';")) == 0)
    //     {
    //         if ($haslo1 == $haslo2) // sprawdzamy czy hasła takie same
    //         {
    //             mysql_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `email`, `rejestracja`, `logowanie`, `ip`)
    //                 VALUES ('".$login."', '".md5($haslo1)."', '".$email."', '".time()."', '".time()."', '".$ip."');");
                
    //             echo "Konto zostało utworzone!";
    //         }
    //         else echo "Hasła nie są takie same";
    //     }
    //     else echo "Podany login jest już zajęty.";
    // }

		$login = filtruj($_POST['LOGIN']);
		$haslo = filtruj($_POST['PASS']);
				$haslo2 = filtruj($_POST['PASSS']);
		$email = filtruj($_POST['EMAIL']);
				$tel = filtruj($_POST['TEL']);

										$_SESSION['login'] = $_POST['LOGIN'];

		 if (mysqli_num_rows(mysqli_query($polaczenie, "SELECT login FROM users WHERE login = '".$login."';")) == 0)
        {
            if ($haslo == $haslo2) // sprawdzamy czy hasła takie same
            {
                mysqli_query($polaczenie, "INSERT INTO `users` (`login`, `pass`, `actived`, `data_zalozenia`, `nr_tel`, `email`, `czy_admin`)
                    VALUES ('".$login."', '".$haslo."', '1', NOW(), '".$tel."', '".$email."', '0');");
                
                echo "Konto zostało utworzone!"; header('Location: login.php');
     	}
				else echo "Hasła nie są takie same";header('Location: login.php');	
    }
    else echo "PODANY LOGIN ZAJĘTY";  header('Location: login.php');
}

		
		//$polaczenie->close();
	
	
?>



