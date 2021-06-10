console.log("Witam MULTIPLAYER :)");

let plansza = document.querySelector(".plansza");
let outp = document.querySelector(".symbol");
let delbtn = document.querySelector(".delbtn");

//console.log(delbtn);

//console.log(kafelki);


krzyze = [];
kola = [];
kombinacje = [];
klikniecia = [];
// let licznik=0;
// let tab2 = [];
// let kombinacje_koncowe = "";
// let biezaca_kombinacja = [];
const mozliwe_kombinacje = 
{
  a:[1, 2, 3], b:[4, 5, 6], c:[7, 8, 9], d:[1, 4, 7], e:[2, 5, 8 ], f:[3, 6, 9], g:[1, 5, 9], h:[3, 5, 7]
  
};


var poprzednie_dane = [];


let i = 0;

licznik = 0;
 
let zatrzymaj = false;

      var smb;

var dataa = [];

function asynchronius(id_pola)
{
 var kafelki = plansza.querySelectorAll(".kratka");

//  console.log(id_pola);

  if(kafelki[id_pola].querySelector(".krzyzyk") === null && kafelki[id_pola].querySelector(".kolo") === null)
  {
    return false;
  }
  else
  {
    return true;
  }


}


function kasacja()
{


 var kafelki = plansza.querySelectorAll(".kratka");
 if(zatrzymaj === false){
for(let i=0; i<kafelki.length; i++)
{

kafelki[i].remove();






}


for(let i=1; i<10; i++) //// ----------------------- TUTAJ MA KASOWAC TYLKO SRODEK KAFELKOW !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{
  //if(document.querySelector(".kratka clicked") !== null)

  var el = document.createElement("DIV");
  el.setAttribute("class", "kratka");
    el.setAttribute("id", i);

  var p = document.createElement("P");
  plansza.appendChild(el);
  el.appendChild(p);
  zatrzymaj = true;
  localStorage.setItem('cachedValued', zatrzymaj);
}
}
}
// }
// }


sprawdzamy_plansze();

///////////set timer XD
function sprawdzamy_plansze(){

var kratki = plansza.querySelectorAll(".kratka");

        klikniecia = [];
krzyze = [];
kola = [];
kombinacje = [];
var kafelki = plansza.querySelectorAll("div");



// for(let i=0; i<kafelki.length; i++)
// {

// kafelki[i].remove();






// }

// for(let i=1; i<10; i++)
// {
//   var el = document.createElement("DIV");
//   el.setAttribute("class", "kratka");
//     el.setAttribute("id", i);

//   var p = document.createElement("P");
//   plansza.appendChild(el);
//   el.appendChild(p);


// }
robkafelki();

 var ajaxx = new XMLHttpRequest();
    ajaxx.open("GET", "pobieraj_plansze.php", true);
    ajaxx.send();
 
    ajaxx.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           dataa = JSON.parse(this.responseText);
           // console.log(dataa.length);

              
 var kafelki = plansza.querySelectorAll(".kratka");
 var kratki = plansza.querySelectorAll(".kratka");
  //console.log(kratki);
           var html = "";
            for(var a = 0; a < dataa.length; a++) {
                var id_pola = dataa[a].id_pola;
                var click = dataa[a].rodzaj_kliku;
                var data2 = dataa[a].data;
                console.log(click);
                html += "<tr>";
                    html += "<td>, " + id_pola + ", </td>";
                    html += "<td>, " + click + ", </td>";
                    html += "<td>, " + data2 + ", </td>";
                html += "</tr>";
                //  console.log(a + " " + id_pola + " click: " + click); 
                for(let i=0; i<9; i++){ 
                if(id_pola == i)
                {
                  if(asynchronius(id_pola) == false){
                  //   for(let j=0; j<kafelki.length; j++){
                  // if(kafelki[j].querySelector(".krzyzyk") === null && kafelki[j].querySelector(".kolo clicked") === null){
                  if(click == 1)
                  {
                 // console.log(i);
                      let el = document.createElement("div");
    el.setAttribute("class", "kolo");
    kafelki[id_pola].classList.add("clicked");
    kafelki[id_pola].appendChild(el); 
                  }
                  else
                  {
                    //if(kafelki[i-1].querySelector("p") !== null){
 let el = document.createElement("div");
    el.setAttribute("class", "krzyzyk");
    kafelki[id_pola].classList.add("clicked");
    kafelki[id_pola].querySelector("p").textContent = "X";
    kafelki[id_pola].appendChild(el);
  }
                //  }
                }
            //   }
            // }
          }
              }






            }
           // document.querySelector(".plansza").innerHTML += html;

              
            }
          
          }




}



            


setInterval(() => {
   sprawdzamy_plansze();
  if(dataa.length === 0)
  {
    kasacja();
  }
  else{
    zatrzymaj = false;
  }
}, 1111);





// var symbol = 0; /// 0 = kolko, 1 = krzyzyk


function robkafelki(){
var kafelki = plansza.querySelectorAll("div");


outp.textContent = "";


for(let i=0; i<kafelki.length; i++)
{

  kafelki[i].addEventListener("click", function () {
      
    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "data_symbol_w_grze.php", true);
    ajax2.send();
 
    ajax2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            //console.log(data);
 
            var html = "";
            for(var a = 0; a < data.length; a++) {

                var id = data[a].id_pola;
                smb = data[a].rodzaj_kliku;
                var data2 = data[a].data;    
                            
                           //////////////WYCIĄGAM Z BAZY NAJNOWSZY REKORD ! JEŚLI JEST = 0 TO ZMIENIAM ŻEBY ROBIŁ X, JEŚLI JEST 1 = MA ROBIĆ CO INNEGO !
                          
              //  console.log(smb);

              }
                 if(smb == 0 )
                {                //console.log(smb);

                   if(kafelki[i].querySelector(".krzyzyk") == null && kafelki[i].querySelector(".kolo") == null){
  //  outp.textContent = "KRZYŻYK";
    let el = document.createElement("div");
    el.setAttribute("class", "kolo");
    kafelki[i].classList.add("clicked");
    kafelki[i].appendChild(el);
    kola.push(kafelki[i].id);  
    klikniecia.push(kafelki[i].id);
      sprawdzaj(kola, "koła", kafelki[i].id);
     //  symbol = 0;
var ajax3 = new XMLHttpRequest();
smb = 1;
    ajax3.open("POST", "wrzuckolko.php", true);
     xd = kafelki[i].id - 1;
           ajax3.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //po co to ? kto to wie ale działa
    ajax3.send("data="+xd + "&data2=" + smb);
           //symbol = 1;


  }
   
                }
    else
                  {
                            //        console.log(smb);

                   if(kafelki[i].querySelector(".krzyzyk") == null && kafelki[i].querySelector(".kolo") == null){
   // outp.textContent = "KOŁO";

    let el = document.createElement("div");
    el.setAttribute("class", "krzyzyk");
    kafelki[i].classList.add("clicked");
    kafelki[i].querySelector("p").textContent = "X";
    kafelki[i].appendChild(el);
    krzyze.push(kafelki[i].id);
          klikniecia.push(kafelki[i].id);
      // symbol =1;
smb = 0;

    sprawdzaj(krzyze, "krzyże", kafelki[i].id);
var ajax = new XMLHttpRequest();
    ajax.open("POST", "wrzuckolko.php", true);

        xd = kafelki[i].id - 1;
           ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //po co to ? kto to wie ale działa
    ajax.send("data="+xd + "&data2=" + smb);
     //  symbol = 0;

                }

                // html += "<tr>";
                //     html += "<td>" + id + ", </td>";
                //     html += "<td>" + smb + ", </td>";
                //     html += "<td>" + data2 + "</td>";
                // html += "</tr>";
            }
               // console.log(symbol);
              }
            }

             
           // document.querySelector(".plansza").innerHTML += html;
         
// var ajax = new XMLHttpRequest();
//     ajax.open("GET", "data.php", true);
//     ajax.send();
 
//     ajax.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var data = JSON.parse(this.responseText);
//             console.log(data);
 
//             var html = "";
//             for(var a = 0; a < data.length; a++) {
//                 var firstName = data[a].id;
//                 var lastName = data[a].login;
//                 var jobTitle = data[a].pass;
 
//                 html += "<tr>";
//                     html += "<td>" + firstName + "</td>";
//                     html += "<td>" + lastName + "</td>";
//                     html += "<td>" + jobTitle + "</td>";
//                 html += "</tr>";
//             }
//             document.getElementById("data").innerHTML += html;
//         }
//     };
    //console.log(kafelki[i].id);

    // if(symbol === 0){
//     if(kafelki[i].querySelector(".kolo") == null && kafelki[i].querySelector(".krzyzyk") == null){
//   //  outp.textContent = "KRZYŻYK";
//     let el = document.createElement("div");
//     el.setAttribute("class", "kolo");
//     kafelki[i].classList.add("clicked");
//     kafelki[i].appendChild(el);
//     kola.push(kafelki[i].id);  
//     klikniecia.push(kafelki[i].id);
//       sprawdzaj(kola, "koła", kafelki[i].id);

// var ajax = new XMLHttpRequest();
//     ajax.open("POST", "wrzuckolko.php", true);
//            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //po co to ? kto to wie ale działa
//            symbol = symbol +1;
//     ajax.send("data="+kafelki[i].id + "&data2=" + symbol);
    

  
//    }
    // }
    // else

    // {
//   if(kafelki[i].querySelector(".krzyzyk") == null && kafelki[i].querySelector(".kolo") == null){
//    // outp.textContent = "KOŁO";
//     let el = document.createElement("div");
//     el.setAttribute("class", "krzyzyk");
//     kafelki[i].classList.add("clicked");
//     kafelki[i].querySelector("p").textContent = "X";
//     kafelki[i].appendChild(el);
//     krzyze.push(kafelki[i].id);
//           klikniecia.push(kafelki[i].id);

//     sprawdzaj(krzyze, "krzyże", kafelki[i].id);
// var ajax = new XMLHttpRequest();
//     ajax.open("POST", "wrzuckolko.php", true);
//     symbol = symbol-1;
//            ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //po co to ? kto to wie ale działa
//     ajax.send("data="+kafelki[i].id + "&data2=" + symbol);


    // }

  








    // body...
  } );


}
}

robkafelki();

function wyczysc_plansze()
{




        klikniecia = [];
krzyze = [];
kola = [];
kombinacje = [];
var kafelki = plansza.querySelectorAll("div");


for(let i=0; i<kafelki.length; i++)
{

kafelki[i].remove();






}

for(let i=1; i<10; i++)
{
  var el = document.createElement("DIV");
  el.setAttribute("class", "kratka");
    el.setAttribute("id", i);

  var p = document.createElement("P");
  plansza.appendChild(el);
  el.appendChild(p);


}
robkafelki();

var ajax5 = new XMLHttpRequest();
    ajax5.open("POST", "kasuj.php", true);
    ajax5.send();





}




function sprawdzaj(tablica_do_sprawdzenia, zwyciezca, id_klikniete){

 tablica_do_sprawdzenia.sort();

// for(let key in mozliwe_kombinacje)
// {
  // kombinacje = mozliwe_kombinacje[key];
//console.log(kombinacje);

  // if(kombinacje.includes(parseInt(id_klikniete)) === true){
  //   console.log(kombinacje + " zawiera " + id_klikniete);

//     if(kombinacje.includes(parseInt(tablica_do_sprawdzenia[i]))){
//       console.log("kombinacje: " + kombinacje + " zawieraja: " + tablica_do_sprawdzenia[i]);

//       i++;
//       licznik++;
//     }
// // }


// }
// if(licznik === 3)
// {
//   alert("OK");
// }














              for(let key in mozliwe_kombinacje){

//  console.log("Klucz: ", key + " VAL: " + mozliwe_kombinacje[key] );


            let tab = tablica_do_sprawdzenia.toString();
               tab2 = tab.replace(/[^0-9\.]+/g, "");
              //console.log(tab2.length);

              //console.log(tab2);

              kombinacje = mozliwe_kombinacje[key];
              let kombinacje2 = kombinacje.toString();
              kombinacje_koncowe = kombinacje2.replace(/[^0-9\.]+/g, "");
            //  console.log(kombinacje_koncowe);
  ///przelatujemy wszystkie elementy w tablicach
  


 
   
     //console.log(tablica_do_sprawdzenia.indexOf(1) );
        
  



  
  //console.log(kombinacje_koncowe.length);


  // if(tab2.indexOf(kombinacje_koncowe) > -1)
  // {

  // }

  // if(tablica_do_sprawdzenia[i] == kombinacje_koncowe[i])
  // {
  //   licznik++;

  // }
  // else{
  //   i++;
  // }
  // if(licznik == 3) {

  // }      
 // console.log(kombinacje_koncowe);

 //---------------DZIAŁAJĄCE PONIŻEJ ALE W NIE W KAZDYM PRZYPADKU :) ------
  // if(tab2.includes(kombinacje_koncowe) && zatrzymaj === false)
  // {
  //        alert("WYGRAŁ SYMBOL: " + zwyciezca);
  //         zatrzymaj = true;
  //  }
  //  else
  //  {
  //    // console.log(tablica_do_sprawdzenia);



  //  } 1 5 7 9
   var x = 0;     
          // console.log("kombinacja: " + kombinacje + " zawiera: " + tablica_do_sprawdzenia[x]);

 //  console.log(kombinacje);
   if(kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+1])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+2])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+2])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+3])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+2])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+4])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+3])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+4])) ||    
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+1])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+3])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+1])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+4])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+1])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+2])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+3])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+1])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+3])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+4])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+1])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+2])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+4])) ||
       kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+2])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+3])) && kombinacje.includes(parseInt(tablica_do_sprawdzenia[x+4])) 


    )
      {
        console.log("Wygrana kombinacja: " + kombinacje);

       alert("WYGRAŁ SYMBOL: " + zwyciezca);
      //zatrzymaj = true;
      wyczysc_plansze();

      } 



       // let x = 0;

       //  if(kombinacje.indexOf(parseInt(tablica_do_sprawdzenia[x])) != -1 && kombinacje.indexOf(parseInt(tablica_do_sprawdzenia[x+1])) != -1 && kombinacje.indexOf(parseInt(tablica_do_sprawdzenia[x+2])) != -1  && zatrzymaj === false )
       // {
       //     console.log("kombinacja: " + kombinacje + " zawiera: " + tablica_do_sprawdzenia[x]);
       //     biezaca_kombinacja = kombinacje;
       //    // licznik++;
       //    alert("KONIEC :)");
       // }
       // else
       // {
       //  break;
       // }
     

   // for(let x=0; x<tablica_do_sprawdzenia.length; x++)
     // {
     //   if(kombinacje.indexOf(parseInt(tablica_do_sprawdzenia[x])) != -1 && zatrzymaj === false )
     //   {
     //      console.log("kombinacja: " + kombinacje + " zawiera: " + tablica_do_sprawdzenia[x]);
     //      biezaca_kombinacja = kombinacje;
     //      licznik++;
     //   }
     //   else
     //   {
     //    break;
     //   }

     // }
     // if(tablica_do_sprawdzenia.includes(biezaca_kombinacja[0]) && )
     // {
     //  alert("KONIEC");
     // }
//     for(let p=0; p<tablica_do_sprawdzenia.length; p++){
//   if(tablica_do_sprawdzenia.indexOf(biezaca_kombinacja[p]) != -1 && zatrzymaj === false)
//   {
//     licznik++;
//   } 
// }


   // if(kombinacje.indexOf(parseInt(tablica_do_sprawdzenia[i])) != -1 && zatrzymaj === false)
   // {
   //  console.log("kombinacje: " + kombinacje + " zawieraja: " + tablica_do_sprawdzenia[i]);
   //  licznik++; 
   //  winners[i] = tablica_do_sprawdzenia[i];
   //     i++;

  
   // } 
//    if(zatrzymaj === false){
//    for(let x=0; x<tablica_do_sprawdzenia.length; x++)
//    {
//     if(kombinacje.includes(parseInt(tablica_do_sprawdzenia[x])) && zatrzymaj === false)
//     {
//     winners[x] = tablica_do_sprawdzenia[x];
//     }
//     else
//     {

//     }


//    }
// }
   // if(winners.includes(kombinacje[i]) && zatrzymaj === false)
   // {
   //    licznik ++; 

   // }

   // if(kombinacje.includes(parseInt(tablica_do_sprawdzenia[i])) && zatrzymaj == false)
   // {
   //  console.log(kombinacje);
   // }



   // if(licznik === 3 && zatrzymaj === false)
   // {
   //  alert("XD WIN");
   //            zatrzymaj = true;

   // }

  


//   if(tab2 === kombinacje_koncowe)
//   {
//     alert("WYGRAŁ SYMBOL: " + zwyciezca);
//   }
//   else
//   {
//     console.log("TAB2 = " + tab2 + " KOMBINACJA:" + kombinacje_koncowe[0] + " " +  kombinacje_koncowe[1] + " " + kombinacje_koncowe[2] );
//   }
// }
// }

//   }

//   console.log(kombinacje);

//     if(kombinacje.indexOf(id_klikniete) != -1 ){
//       licznik++;
//       console.log("licznik:", licznik);
//     }



//     i++;


//   if(licznik === 3)
//     {
//       alert("WIN" + zwyciezca);
//     }
//   //console.log(kombinacje_koncowe);


//   //console.log(tablica_do_sprawdzenia.includes(mozliwe_kombinacje));
 
//   //console.log("2: " + mozliwe_kombinacje[key]);


//   //if (ip[0] >= parseInt(cls[key].from) && ip[0] <= parseInt(cls[key].to))
//     //return key;
//   //i++;
// }
x++;


}

if(klikniecia.length > 8){
  alert("NIKT NIE WYGRAŁ !");
        wyczysc_plansze();

}


}




