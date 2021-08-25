document.addEventListener("DOMContentLoaded" ,function(){
    if (document.getElementById("button")){
        document.getElementById("button").onclick = function(){
            var userName = document.getElementById("input").value;

            if (!userName){
                userName = "Usuario desconocido"
            }

            document.getElementById("mensaje").innerHTML = "Bienveido" + userName + "!";
        } 
    }
},false);