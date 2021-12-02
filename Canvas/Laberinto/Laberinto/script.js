var Canvas;
var contexto;
var FPS = 60;
var imgPersonaje;

var anchoF = 50;
var altoF = 50;

var cesped = "#1e963e";
var agua = "#1597ed";
var tierra = "#ab6b46";
var puerta = "#262624"
var llave = "#f5f502"
var vida = 100;
var mina = 60;
var pocion = 10;
var Cmina = "#a3adad"
var Cpocion = "#1ce662"

var protagonista;

var Escenario = [
    [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
    [0,0,2,2,2,2,2,1,2,2,2,6,1,2,2,2],
    [0,0,2,2,2,0,0,1,1,2,1,1,1,2,0,2],
    [0,0,0,0,2,2,2,2,2,2,2,1,1,2,0,5],
    [0,1,1,1,1,2,2,1,2,0,1,1,4,2,0,2],
    [0,1,2,6,1,0,2,1,2,0,1,0,0,0,0,2],
    [0,1,2,0,1,1,2,2,2,2,2,2,2,2,2,2],
    [0,1,2,2,2,2,2,0,6,1,1,0,0,0,0,0],
    [0,1,1,1,2,0,0,0,1,1,1,2,2,2,5,0],
    [0,1,1,1,2,2,2,2,2,2,2,2,1,1,3,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
    
]

function dibujaEscenario(){
    var color;
    for (let y = 0; y < Escenario.length; y++ ){
        for (let x = 0; x < Escenario[0].length; x++){
            if(Escenario[y][x] == 1)
                color = agua;
            if(Escenario[y][x] == 0)
                color = cesped;
            if(Escenario[y][x] == 2)
                color = tierra;
            if(Escenario[y][x] == 3)
                color = puerta;
            if(Escenario[y][x] == 4)
                color = llave;
            if(Escenario[y][x] == 5)
                color = Cmina;
            if(Escenario[y][x] == 6)
                color = Cpocion;

            contexto.fillStyle = color;
            contexto.fillRect(x *anchoF, y*altoF, anchoF,altoF)
        }
    }
}


var jugador = function(){
    this.x = 2;
    this.y = 1;
    this.color ="#ff0f00"
    this.llave = false;
    this.puerta = false;

    this.dibuja = function(){
        contexto.fillStyle = this.color
        contexto.fillRect(this.x*anchoF, this.y*altoF, anchoF,altoF)
        
    }

    this.margenes = function(x,y){
        var colision = false;
        if(Escenario[y][x] == 0 || Escenario[y][x] == 1 ){
            colision = true;
        }
        return(colision);
    

    }
    
    this.izquierda =function(){
        if(this.margenes(this.x-1, this.y) == false)
        this.x--;
        this.obtenerObjeto();
        this.abrirPuerta();
    }
    this.abajo =function(){
        if(this.margenes(this.x, this.y+1) == false)
        this.y++;
        this.obtenerObjeto();
        this.abrirPuerta();
    }
    this.derecha =function(){
        if(this.margenes(this.x+1, this.y) == false)
        this.x++;
        this.obtenerObjeto();
        this.abrirPuerta();
    }
    this.arriba =function(){
        if(this.margenes(this.x,this.y-1)==false)
        this.y--;
        this.obtenerObjeto();
        this.abrirPuerta();
    }
    this.texto = function(){
        contexto.font = "50px impact";
        contexto.fillStyle ="red";
        contexto.fillText(" X:" + this.x + " Y:" + this.y,40,40)
    }

    this.obtenerObjeto = function (){
        var objeto = Escenario[this.y][this.x];
        if(objeto == 4){
            this.llave = true;
            Escenario[this.y][this.x] = 2;
            console.log("Tienes la vacuna contra el virus T!!!!!");
        }
    }

    this.abrirPuerta = function(){
        var puerta = Escenario[this.y][this.x];
        if(puerta == 3 && this.llave == true){
            this.puerta = true;
            Escenario[this.y][this.x] = 2;
            alert("Has salido de los laboratorios de Umbrella!!!!!");
            
        }   
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


/* var personaje = function(x,y){
    this.x = x;
    this.y = y;
    var derecha = true;
    var velocidad;
    this.dibuja=function(){
       /*  contexto.fillStyle = "#0505ff" Cambiar el color*/
  /*       contexto.fillRect(this.x,this.y,50,50)
    } */
    /* Hacer que el objeto se mueva a la derecha */
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
        
        
    /* } */
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

    tileMap = new Image();
    tileMap.src ="img/tilemap___8261a820243e726___.png"

    //Creamos el protagonista
    protagonista = new jugador();
    document.addEventListener("keydown",function(tecla){
        if(tecla.keyCode == 37){
            protagonista.izquierda();
    
        }
        if(tecla.keyCode == 38){
            protagonista.arriba();
            
        }
        if(tecla.keyCode == 39){
            protagonista.derecha();
        }
        if(tecla.keyCode == 40){
            protagonista.abajo();
            
        }
    })

   
    
    /* imgPersonaje = new Image();
    imgPersonaje.src = "img/red.png" */
    setInterval(function(){
        principal();

    },1000/FPS)
}

function borrarCanvas(){
    canvas.width = 800;
    canvas.height = 550;
}

function principal(){
    borrarCanvas();
    dibujaEscenario();
    protagonista.dibuja();
   /*  per1.dibuja();
    per2.dibuja();
    per3.dibuja();
    prota.dibuja();
    prota.texto();

    per2.mover(10);
    per3.mover(5);
    per1.mover(2);
    prota.mover(10); */
    
    
}

/* var per1 = new personaje(200,200);
var per2 = new personaje(0,0);
var per3 = new personaje(500,300)
var prota = new protagonista(50,50); */

