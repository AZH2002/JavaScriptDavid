var Canvas;
var contexto;
var FPS = 60;
var imgPersonaje;

var protagonista = function(x,y){
    this.x = x;
    this.y = y;
    var velocidad = 20;

    this.dibuja=function(){
        contexto.drawImage(imgPersonaje, this.x, this.y,100,100)
    }
    this.izquierda =function(){
        this.x-= velocidad;
    }
    this.abajo =function(){
        this.y+= velocidad;
    }
    this.derecha =function(){
        this.x+= velocidad;
    }
    this.arriba =function(){
        this.y-= velocidad;
    }
    this.texto = function(){
        contexto.font = "50px impact";
        contexto.fillStyle ="red";
        contexto.fillText(" X:" + this.x + " Y:" + this.y,40,40)
    }
    /* this.mover = function(velocidad){
        if (this.derecha == true){
            if (this.x < 750){
                this.x+= velocidad;
            }else{
                this.derecha = false;
            }
        }else{
            if(this.x > 0){
                this.x-=velocidad;
            }else{
                this.derecha = true
            }
        }
    } */
}


var personaje = function(x,y){
    this.x = x;
    this.y = y;
    var derecha = true;
    var velocidad;
    this.dibuja=function(){
       /*  contexto.fillStyle = "#0505ff" Cambiar el color*/
        contexto.fillRect(this.x,this.y,50,50)
    }
    /* Hacer que el objeto se mueva a la derecha */
    this.mover = function(velocidad){
        if (this.derecha == true){
            if (this.x < 750){
                this.x+= velocidad;
            }else{
                this.derecha = false;
            }
        }else{
            if(this.x > 0){
                this.x-=velocidad;
            }else{
                this.derecha = true
            }
        }
    }
        
        
    }
    /* this.moveleft = function(){
        this.x--;
    }
    this.moveup = function(){
        this.y++;
    }
    this.movedown = function(){
        this.y--;
    } */


function iniciar(){
    canvas = document.getElementById("canvas");
    contexto = canvas.getContext("2d");
    imgPersonaje = new Image();
    imgPersonaje.src = "img/red.png"
    setInterval(function(){
        principal();

    },1000/FPS)
}

function borrarCanvas(){
    canvas.width = 800;
}

function principal(){
    borrarCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();
    prota.dibuja();
    prota.texto();

    per2.mover(10);
    per3.mover(5);
    per1.mover(2);
    prota.mover(10);
}

var per1 = new personaje(200,200);
var per2 = new personaje(0,0);
var per3 = new personaje(500,300)
var prota = new protagonista(50,50);

document.addEventListener("keydown",function(tecla){
    if(tecla.keyCode == 37){
        prota.izquierda();

    }
    if(tecla.keyCode == 38){
        prota.arriba();
        
    }
    if(tecla.keyCode == 39){
        prota.derecha();
    }
    if(tecla.keyCode == 40){
        prota.abajo();
        
    }
})