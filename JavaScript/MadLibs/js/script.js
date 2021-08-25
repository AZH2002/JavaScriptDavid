document.addEventListener('DOMContentLoaded', function(){ 
    if (document.getElementById("Button")) {
        document.getElementById("Button").onclick = function(){
          var username = document.getElementById("Nombre").value;
          var userRelacion = document.getElementById("Pareja").value;
          var userYear = document.getElementById("Año").value;
          var userVerbPast = document.getElementById("VerboPasado").value;
          var userGrito = document.getElementById("Grito").value;
          var userAdjetivo = document.getElementById("Adjetivo").value;
          var userSustanPlural = document.getElementById("SustantivoPlural").value;
          var userVerb = document.getElementById("Verbo").value;
          var userVerbDos = document.getElementById("VerboDos").value;
          var userVerbTres = document.getElementById("VerboTres").value;
          var userVerCuatro = document.getElementById("VerboCuatro").value;
          var userSustantivo = document.getElementById("Sustantivo").value;
          var userVerbCinco = document.getElementById("VerboCinco").value;
          var userSustanDos = document.getElementById("SustantivoDos").value;

          document.getElementById("Mensaje").innerHTML = " Mi Nombre es " + username + " He concido a el/la " + userRelacion + " desde " +
          userYear +".Cuando me entere que Mariana y Oscar estaban comprometidos para casarse, yo "+ userVerbPast+" y luego grité "+
          userGrito+"! les deseo a la feliz Pareja "+userAdjetivo+" "+userSustanPlural+" por muchos, muchos años por venir. "+
          " MI BRILLANTE CONSEJO ES...No se olviden de "+userVerb+" antes y despues de "+userVerbDos+" y especialmente despues de que "+
          userVerbTres+". Mariana, siempre debes "+userVerCuatro+" el / la "+userSustantivo+"  de Oscar. y Oscar, siempre debes "+
          userVerbCinco+" el / la "+userSustanDos+" de Mariana!"
      };
  }
  }, false);
