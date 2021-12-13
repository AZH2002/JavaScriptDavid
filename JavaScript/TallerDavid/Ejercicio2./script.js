document.addEventListener('DOMContentLoaded', function(){ 
    if (document.getElementById("Button")) {
      document.getElementById("Button").onclick = function(){
          var username = document.getElementById("Name").value;
          var userLastName = document.getElementById("LastName").value;
          var userDate = document.getElementById("Date").value;
          var userAge = 2021-userDate;
  
          document.getElementById("Mensaje").innerHTML = "Hola, mi nombre es " +username+ " " +userLastName+ " tengo "+ userAge +" años y estoy aprendiendo JavaScript "+"!"
      };
  }
  }, false);

