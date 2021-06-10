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



<h1>KÓŁKO I KRZYŻYK</h1>
<h3> Aktualny symbol w grze: <output class="symbol"></output> </h3>

<div class="plansza">



<div class="kratka" id="1"><p></p></div>
<div class="kratka" id="2"><p></p></div>
<div class="kratka" id="3"><p></p></div>
<div class="kratka" id="4"><p></p></div>
<div class="kratka" id="5"><p></p></div>
<div class="kratka" id="6"><p></p></div>
<div class="kratka" id="7"><p></p></div>
<div class="kratka" id="8"><p></p></div>
<div class="kratka" id="9"><p></p></div>

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



 


<script src="script.js" type="text/javascript"></script>
 
</body>
</html>