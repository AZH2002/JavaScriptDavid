
// Mobile Menu
document.getElementById("hamburguer-icon").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0px";
}
document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right ="-350px";
}

// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var opciones = document.getElementsByClassName("single-tab");


for (var a = 0; a < opciones.length; a++){
  opciones[a].onclick = function(){
    var seleccionado = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[seleccionado];
    for (var b = 0; b < opciones.length; b++){
      opciones[b].style['background-color']=unseletectedColor;
      opciones[b].style['font-weight']="normal";
    }
    this.style['background-color']=seletectedColor;
    this.style['font-weight']="bold";
  }
}










// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];






// Footer



  
   


   