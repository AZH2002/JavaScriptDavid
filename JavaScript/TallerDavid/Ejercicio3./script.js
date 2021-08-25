
document.addEventListener('DOMContentLoaded', function(){ 
    if (document.getElementById("Button")) {
      document.getElementById("Button").onclick = function(){
        var userNum1 = document.getElementById("Num1").value;
        var userNum2 = document.getElementById("Num2").value;
        userSuma = parseFloat(userNum1) + parseFloat(userNum2);
        userResultado= userSuma / 2;
        document.getElementById("Mensaje").innerHTML = "El resultado es: "+userResultado+"!"
      };
  }
  }, false);