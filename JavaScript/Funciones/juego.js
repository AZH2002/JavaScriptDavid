//function sum_numbers(){
  //  var num1 = 5;
   // var num2 = 2;
    //var suma = num1 + num2;
//}
//console.log(suma);

//function sum_args(num1, num2){
  //  var sum = num1 + num2;
    //return sum;;
//}
/* document.getElementById("sum_result").innerHTML=sum_args */ç
var vida = 100;
var ataque = 10;
var pocion = 20;

function muestraVida(nombreAtaque){
    console.log("Has sido atacado con: "+ nombreAtaque)
    console.log("vida: " + vida)
}

function ataqueEnemigo(potencia, nombreAtaque){
    vida -= potencia;
    muestraVida(nombreAtaque);
    
}

function bebePocion (){
    vida += pocion;
    muestraVida();
}