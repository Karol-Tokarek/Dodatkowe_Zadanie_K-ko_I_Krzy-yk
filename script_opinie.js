// console.log("Witam opinie :)");

// var btnsend = document.querySelector(".btnsend");

// if(btnsend !== null){
// btnsend.addEventListener("click", function(event)
// {
//   event.preventDefault();

// var ajax = new XMLHttpRequest();
//     ajax.open("POST", "data2.php", true);
//     ajax.send();
//   });
// }
// if(btnsend !== null){
// btnsend.addEventListener("click", function(event)
// {
// event.preventDefault();

// var ajax = new XMLHttpRequest();
//     ajax.open("GET", "data.php", true);
//     ajax.send();

//     document.querySelector(".opinions").innerHTML = '';
 
//     ajax.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText);
//             console.log(data);
 
//             for(var a = 0; a < data.length; a++) {
//                 var nick = data[a].nickname_wystawiajacego;
//                 var tresc = data[a].tresc_opinii;
//                 var data_wystawienia = data[a].data_wystawienia;
//                 var rodzaj = data[a].rodzaj;
//                 if(rodzaj == "Pozytywna"){            var html = "";

//                  html += "<table class='tableopinion' id='tablenr'>";
                
//                 html += "<tr>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Nickname</b>:" + nick + "</td>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Tresc opinii:</b>" + tresc + "</td>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Data:</b>" + data_wystawienia + "</td>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Rodzaj:</b><span style='color:green;'>" + rodzaj + "</span></td>";

//                 html += "</tr>";
//                 html += "</table>";
            

//             html += "<link rel='stylesheet' type='text/css' href='style2.css'/>"
//        }
//        else
//        {var html = "";
//  html += "<table class='tableopinion' id='tablenr'>";
                
//                 html += "<tr>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Nickname</b>:" + nick + "</td>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Tresc opinii:</b>" + tresc + "</td>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Data:</b>" + data_wystawienia + "</td>";
//                     html += "<td style=' margin:0px; padding-top:5px;'> <b>Rodzaj:</b><span style='color:red;'>" + rodzaj + "</span></td>";

//                 html += "</tr>";
//                 html += "</table>";
            

//             html += "<link rel='stylesheet' type='text/css' href='style2.css'/>"



//           }


//             document.querySelector(".opinions").innerHTML += html;
//        }
//         }
//     };


// });
// }

// let images = document.querySelectorAll(".imgchanging");

// let tab = ["img/chess.jpg", "img/kostkis.jpg", "img/tic tac toe.jpg", "img/darts.jpg"];


// for(let i=0; i<images.length; i++)
// {
//   images[i].addEventListener("click", function()
//   {
//     let wylosowane = Math.random()*images.length;
//     wylosowane = parseInt(wylosowane);
//     let aktualne_foto = images[i].getAttribute("src");
//     //console.log(aktualne_foto);
//     while(aktualne_foto === tab[wylosowane]){
//       wylosowane = Math.random()*images.length;
//       wylosowane = parseInt(wylosowane);
//     }

//     images[i].setAttribute("src", tab[wylosowane]);




//   });






// }



// console.log(images);


