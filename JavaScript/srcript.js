//document.getElementById("mostrar").onclick = function(){
    //var campoSeleccionado = document.getElementById("options");
    //var opcionSeleccionada = campoSeleccionado.options.selectedIndex;
    //var valorSeleccionado = campoSeleccionado.options[opcionSeleccionada].innerHTML;

    //document.getElementById("opcion_seleccionada").innerHTML = valorSeleccionado;
//}
/*  
document.getElementById("education_level").onchange=function(){
    var selectField = document.getElementById("education_level");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption].innerHTML;

    document.getElementById("opcion_seleccionada").innerHTML = selectedValue;
      */
    //var radio = document.getElementsByName("genero");
    /*  
    var check = document.getElementsByName("genero");

    for (var a = 0; a< check.length; a++){
        if(check[a].checked){
            check_seleccionado = check[a].value;
            document.getElementsById("opcion_seleccionada").innerHTML += "<li>" + check[a].value + "<li>"
        }
    }
      */

   //for (var a = 0; a< radio.length; a++){
   //     if(radio[a].checked){
   //         radio_seleccionado = radio[a].value;
   //         console.log(radio_seleccionado)
   //     }
   // }
    //document.getElementById("opcion_seleccionada").innerHTML = radio_seleccionado;
/*}  */
var check = document.getElementsByName("comida")

for (var a =0; a < check.length; a++){
    check[a].onchange = function(){
        document.getElementById("opcion_seleccionada").innerHTML="";
        for (var b=0; b< check.length; b++){
            if(check[b].checked){
                document.getElementById("opcion_seleccionada").innerHTML += "<li>" + check[b].value + "</li>";
            }
        }
    }
}





