/* document.getElementById("show-loader").onclick = function (){

    document.getElementById("spinner-loader").style.display = "block";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    },5000)

}

 */

/* var fps = 10;
var xEscenario = 0;

function moverEscenario(){
    xEscenario++;
    console.log(xEscenario);
}

function principal(){
    moverEscenario();
}

setInterval(moverEscenario,1000/fps);
 */


/* window.setInterval(function(){
    console.log(contador);
    contador++;
},2000); */
/* var contador = 0;
var timeInterval = window.setInterval(function(){
    console.log(contador);
    contador++;
    if(contador > 5){
        window.clearInterval(timeInterval);

    }
},2000) */
function formato(numero){
    if(numero < 10){
        return "0" + numero.toString();
    }else{
        return numero.toString();
    }
}

window.setInterval(function(){
var tiempoActual = new Date();
var horas = tiempoActual.getHours();
var minutos = tiempoActual.getMinutes();
var segundos = tiempoActual.getSeconds();

document.getElementById("hours").innerHTML = formato(horas);
document.getElementById("minutes").innerHTML = formato(minutos);
document.getElementById("seconds").innerHTML = formato(segundos);
},1000)


