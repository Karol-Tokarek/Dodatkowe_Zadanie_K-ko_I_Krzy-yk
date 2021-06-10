



<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="css/fontello.css" type="text/css" />

    <title>KT Games - Rejestracja</title>
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


<article>
<h1>Panel logowania</h1>



	<div class="logadmin">
		<FORM ACTION="registerme.php" METHOD="POST">
	<INPUT TYPE="TEXT" NAME="LOGIN" ID="LOGIN" placeholder="LOGIN" REQUIRED/>
	<INPUT TYPE="PASSWORD" NAME="PASS" ID="PASS" placeholder="PASSWORD" REQUIRED/>
	<INPUT TYPE="PASSWORD" NAME="PASSS" ID="PASSS" placeholder="PASSWORD AGAIN" REQUIRED/>
	<INPUT TYPE="TEXT" NAME="EMAIL" ID="EMAIL" placeholder="ADRES EMAIL" REQUIRED/>
		<INPUT TYPE="TEXT" NAME="TEL" ID="TEL" placeholder="NUMER TELEFONU*"/>

		<INPUT TYPE="submit" NAME="logbtn" ID="logbtn" VALUE="ZAREJESTRUJ" REQUIRED/>
	</FORM>
	<br>
	

</div>
<!-- <div class="info"> <p> </p>
	</div> -->
</article>

<footer>
@Wszelkie prawa zastrzeżone 2021

</footer>	



 


 
</body>
</html>




