console.log("Witam :)");

let images = document.querySelectorAll(".imgchanging");

let tab = ["img/chess.jpg", "img/kostkis.jpg", "img/tic tac toe.jpg", "img/darts.jpg"];


for(let i=0; i<images.length; i++)
{
  images[i].addEventListener("click", function()
  {
    let wylosowane = Math.random()*images.length;
    wylosowane = parseInt(wylosowane);
    let aktualne_foto = images[i].getAttribute("src");
    //console.log(aktualne_foto);
    while(aktualne_foto === tab[wylosowane]){
      wylosowane = Math.random()*images.length;
      wylosowane = parseInt(wylosowane);
    }

    images[i].setAttribute("src", tab[wylosowane]);




  });






}



console.log(images);


