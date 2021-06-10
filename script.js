console.log("Witam :)");

let plansza = document.querySelector(".plansza");
let outp = document.querySelector(".symbol");



//console.log(kafelki);

robkafelki();

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


let i = 0;

licznik = 0;
 
let zatrzymaj = false;


function robkafelki(){
var kafelki = plansza.querySelectorAll("div");

outp.textContent = "KOŁO";

  var symbol = 0; /// 0 = kolko, 1 = krzyzyk

for(let i=0; i<kafelki.length; i++)
{

  kafelki[i].addEventListener("click", function () {


    //console.log(kafelki[i].id);

    if(symbol === 0){
    if(kafelki[i].querySelector(".kolo") == null && kafelki[i].querySelector(".krzyzyk") == null){
    outp.textContent = "KRZYŻYK";
    let el = document.createElement("div");
    el.setAttribute("class", "kolo");
    kafelki[i].classList.add("clicked");
    symbol = 1;
    kafelki[i].appendChild(el);
    kola.push(kafelki[i].id);  
    klikniecia.push(kafelki[i].id);
      sprawdzaj(kola, "koła", kafelki[i].id);
  
   }
    }
    else

    {
  if(kafelki[i].querySelector(".krzyzyk") == null && kafelki[i].querySelector(".kolo") == null){
    outp.textContent = "KOŁO";
    let el = document.createElement("div");
    el.setAttribute("class", "krzyzyk");
    kafelki[i].classList.add("clicked");
    symbol = 0;
    kafelki[i].querySelector("p").textContent = "X";
    kafelki[i].appendChild(el);
    krzyze.push(kafelki[i].id);
          klikniecia.push(kafelki[i].id);

    sprawdzaj(krzyze, "krzyże", kafelki[i].id);

    }
}
  








    // body...
  } );


}
}



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
      zatrzymaj = true;
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




