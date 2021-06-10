<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="css/fontello.css" type="text/css" />

    <title>KT Games - MULTIPLAYER</title>
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
	
	if ((!isset($_SESSION['zalogowany'])) && !($_SESSION['zalogowany']==true))
	{
		header('Location: login.php');	
	}	

	if ((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==true))
	{
		$x = $_SESSION['login'];
		echo $x;
	}	

	require_once "connect.php";

	$conn = @new mysqli($host, $db_user, $db_password, $db_name);



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



<h1>KÓŁKO I KRZYŻYK  - WERSJA MULTIPLAYER</h1>
<h3> Zaczynają niestandardowo "iksy" (X). W razie wystąpienia błędu użyj buttona "refresh". Jeśli chcecie zacząć od nowa kliknijcie: "Resetuj planszę". Powodzenia ! <output class="symbol">  </output> </h3>
<?php 	

	//echo $_POST['data2']; 
	 ?>
<div class="plansza">



<div class="kratka" id="1"><p> <?php


	
	if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
else{

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


}


      ?> </p></div>
<div class="kratka" id="2"><p> <?php  
// $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 2)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X";
// 				echo "<div class='krzyzyk'></div>";

// 			}
// 		}
// 	}
// }    ?></p></div>
<div class="kratka" id="3"><p><?php //$query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 3)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X";				echo "<div class='krzyzyk'></div>";


// 			}
// 		}
// 	}
// }        ?></p></div>
 <div class="kratka" id="4"><p><?php 
// $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 4)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X"; 				echo "<div class='krzyzyk'></div>";


// 			}
// 		}
// 	}
// }        ?></p></div>
<div class="kratka" id="5"><p><?php  
// $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 5)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X";				echo "<div class='krzyzyk'></div>";


// 			}
// 		}
// 	}
// }       ?></p></div>
<div class="kratka" id="6"><p><?php
//   $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 6)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X"; 				echo "<div class='krzyzyk'></div>";


// 			}
// 		}
// 	}
// }       ?></p></div>
<div class="kratka" id="7"><p><?php  
//   $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 7)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X"; 				echo "<div class='krzyzyk'></div>";


// 			}
// 		}
// 	}
// }     ?></p></div>
<div class="kratka" id="8"><p><?php 
// $query = "SELECT id_pola, rodzaj_kliku FROM zajete_pola;";

// $result = mysqli_query($conn, $query);
// while($row = mysqli_fetch_row($result)){ 
// for($i=0; $i<1; $i++){
	
// 	if($row[$i] == 8)
// 		{
// 			if($row[$i + 1] == 1)
// 			{

// echo "<div class='kolo clicked'></div>";
// 			}
// 			else{
// 				echo "X"; 				echo "<div class='krzyzyk'></div>";

 
// 			}
// 		}
// 	}
// }        ?></p></div>
<div class="kratka" id="9"><p><?php  
	//  	    ?></p></div>

</div>
<div class="info">
	<FORM method="GET" ACTION="kolkoikrzyzykmulti.php">
	<button class="refreshbtn" style="width:300px; height:50px">REFRESH</button>
</FORM>
<BR><BR><BR>
	<FORM method="GET" ACTION="kasuj.php">
<button class="delbtn" style="width:300px; height:50px;">RESETUJ PLANSZĘ!</button>
</FORM>
</div>

<div class="info">
	<img src="img/info.png" alt=""/>

<p>
	Aby wygrać, musisz posiadać 3 kółka albo krzyżyki w jednej linii. Grając, zgadzasz się na gromadzenie statystyk. Możesz podejrzeć swoje dane w odpowiedniej zakładce.
</p>

</div>

<br>

<div class="reported">

<p>
	Chcesz zgłosić błąd? Kliknij <br><a href="reported.php">TUTAJ</a>
</p>
	</div>



<footer>
@Wszelkie prawa zastrzeżone 2021

</footer>	



 


<script src="script_multi.js" type="text/javascript"
></script>
 
</body>
</html>