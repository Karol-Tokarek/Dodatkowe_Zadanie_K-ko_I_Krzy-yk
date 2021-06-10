
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


<h1>Witaj na stronie startowej</h1>

<article>

<div class="imgs">
<img src="img/chess.jpg" alt="chess" class="imgchanging"/>
<img src="img/kostkis.jpg" alt="chess" class="imgchanging"/>
<br/>
<img src="img/tic tac toe.jpg" alt="chess" class="imgchanging"/>
<img src="img/darts.jpg" alt="chess" class="imgchanging"/>

</div>

<h1> Krótko o witrynie </h1>

<p class="description">


Witryna jest tworzona przez początkującego programistę. Będą na niej umieszczane proste różnego rodzaju gry oraz mechanizmy wykonane w języku JavaScript, które w miarę możliwości i posiadania czasu będą ulepszane i dopracowywane.

<div style="margin-top:200px;">
</div>


</article>










<footer>
@Wszelkie prawa zastrzeżone 2021 @KT Games

</footer>	






 
</body>
 <script src="script2.js"></script>
</html>