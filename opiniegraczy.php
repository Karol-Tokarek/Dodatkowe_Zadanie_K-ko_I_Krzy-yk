<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="css/fontello.css" type="text/css" />

    <title>KT Games</title>
</head>
<head profile="http://www.w3.org/2005/10/profile">
<link rel="icon" 
      type="image/png" 
      href="img/info.png">

<body>
	<header>	


						<div class="hamburger" id="#div1">
						</div>
						<div class="logo">
							<p>
							KT Games
						</p>
						</div>
							<div class="login">
						<a href="login.php"><i class="icon-user"></i></a>
						<div class="user">
							<p>
						<?php

	session_start();
	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		$x = $_SESSION['login'];
		echo $x;
	}


?> </p>
</div>
					</div>
	</header>

<div class="menu">

<ul>

<li><a href="index.php">Home</a></li>
<li><a href="opiniegraczy.php">Opinie graczy</a></li>
<li><a href="gry.php">Gry online</a></li>
<li><a href="statistic.php">Statystyki</a></li>



</ul>



</div>



<h1>Opinie graczy</h1>

<p class="description">
Tutaj możesz podzielić się swoją opinią na temat platformy. Pamiętaj, że musisz być zalogowany, aby napisać opinię oraz posiadać odpowiedni staż na platformie. Pamiętaj, że rzetelne opinie pomagają twórcom.

</p>

<h2 style="text-align: center;"> Najnowsze opinie: </h2>

<div class="opinions">


<?php


	


	require_once "connect.php";
$conn = @new mysqli($host, $db_user, $db_password, $db_name);
	
	if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{
//echo "<p class='green' style='color:green; font-weight:bold; margin:20px; border:solid 3px darkgreen; width: 200px; padding:20px'>Pomyślnie połączono z bazą danych!</p>";



$query = "SELECT * FROM opinie_uzytkownikow WHERE deleted=0 ORDER BY data_wystawienia DESC LIMIT 10;";

$result = mysqli_query($conn, $query);


		



    

    $tablica[1] = "Nickname:";
     $tablica[2] = "Tresc opinii:";
     $tablica[3] = "Data:";
     $tablica[4] = "Rodzaj:";

// $tablica[3] = "Data zlecenia:";

// $tablica[4] = "Status wykonania:";

// $tablica[5] = "Rodzaj usługi do wykonania:";

// $tablica[6] = "Numer telefonu:";

// $tablica[7] = "Email:";

// $tablica[8] = "Planowana data zakończenia:";

// $tablica[9] = "Treść zamówienia / uwagi:";



$i = 0;

while($row = mysqli_fetch_row($result)){ 

echo "<table class='tableopinion' id='tablenr$row[0]'>";



 echo "<tr>";
		for($i=1; $i<6; $i++){
			// if($i==6)
			// {
			// 	if($row[$i] === 1){
			// 	echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b>POZYTYWNA</td> " ;
			// 	}
			// }
			
			if($row[$i] !== NULL){
			// 	if($row[$i] == 1 ){
			// echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b> Pozytywna </td> " ;
			// }
			// if($row[$i] == 0){
			// 			echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b> Negatywna </td> " ;
			// 		}
					if($i == 4)
					{
							if($row[$i] == "Pozytywna"){
							echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b> <span style='color:green;'>$row[$i]</span> </td> " ;
						}		
						else{
							echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b> <span style='color:red;'>$row[$i]</span> </td> " ;
						}
					}
					else
					{
					echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b> $row[$i] </td> " ;
					}
					}
		
	
	
}
 echo "</tr>";
 echo "</table>";




}
echo "<style>";

echo "table tr{
	background-color: white;

	text-align:center;
}
	table{
			background-color: white;

		padding:10px;
				border-radius:2px;

		margin:20px;
		border:solid 2px black;
		margin-left:auto;
		margin-right:auto;
	}

	table td{

		width:300px;
			margin-left:auto;
	margin-right:auto;
		text-align:center;

	}
	@media (max-width: 700px) {
	table td{
		margin:10px;
		display:block;
}
	}

";

echo "</style>";

// echo "<br>";
// echo "<table class='tableadmin' id='tablenr$row[0]'>";
		
// 		echo "<tr>";
// 		for($i; $i<10; $i++){
// 			if($row[$i] == NULL){
// 				$row[$i] == "xd";
// 			}
// 			else{
// 					$id = $row[0];

// 		echo "<td style=' margin:0px; padding-top:5px;'> <b>$tablica[$i] </b> $row[$i]</td>" ;
			
// 		}

// 		echo "</tr>";
// 	}	
// 	echo "<button id='d$id' class='delbtn'>Usuń zamówienie numer <b>$id</b></button>";
// 	echo "<button id='s$id' class='statusbtn'>Zmień status wykonania</button><input type='text' class='statusinput inputshow' placeholder='Wpisz status' id='i$id'/> <button id='c$id' class='changestatusbtn inputshow'>ZATWIERDŹ NOWY STATUS</button>";
// 	echo "<button id='p$id' class='datechange'>Zmień planowaną datę zakończenia</button> <input id='b$id' type='date' class='datechangecalendar dateshow'/> <button id='f$id' class='changecalendarbtn dateshow'>ZATWIERDŹ DATĘ</button>";
// 	echo "<style>";
// 	echo "button{
// 			margin:10px;
// 			border:solid 2px darkorange;
// 			border-radius:20px;
// 			padding:15px;
// 			background-color:white;
// 			font-size:19px

// 			}
// 			button:hover{
// 			background-color:orange;
// 			transition:2s;
// 			text-decoration:underline;
// 			cursor:pointer;
// 			}
// 				.statusinput{
// 			margin:10px;
// 			border:solid 2px darkorange;
// 			border-radius:20px;
// 			padding:17px;
// 			width:239px;
// 			background-color:white;
// 			font-size:25px
// 			outline:none;
// 			transition:5s;

// }
// 		.statusinput:hover, .statusinput:focus{
				
// 				outline:none;
				
// 		}
// 				";
// 		echo "</style>";
	


// 		$i = 0;

		

// echo "</table>";

// }
// }


}
?>
</div>

		<?php

	
	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		
		echo "<FORM METHOD='GET' ACTION='sendopinion.php' class='Formik'>

<label for='textarea'> Wpisz treść opinii (max 500 znaków): </label>
<br><br>

<textarea required id='textarea' rows='10' cols='60' name='textarea' ></textarea>
<br><br>
 <label for='kind'>Wybierz rodzaj opinii:</label>

			<select name='kind' id='kind' REQUIRED>
  			<option value='Pozytywna'>Pozytywna</option>
  			<option value='Negatywna'>Negatywna</option>

			</select> 
			<br>
						<br>

<button class='btnsend'>WYŚLIJ OPINIĘ</button>


</FORM>";
	}


?>

<!-- <FORM METHOD="GET" ACTION="sendopinion.php" class="Formik">

<label for="textarea"> Wpisz treść opinii: </label>
<br><br>
<textarea id="textarea" rows="10" cols="50"> </textarea>
<br><br>
<button class="btnsend">WYŚLIJ OPINIĘ</button>


</FORM> -->


<footer>
@Wszelkie prawa zastrzeżone 2021

</footer>	

    <link rel="stylesheet" type="text/css" href="style.css"/>


 <script src="script_opinie.js" type="text/javascript"></script>



 
</body>
</html>