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
var enemigo =[];
var  tileMap;
var ImgAntorcha =[];

var protagonista;

var Escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,2,2,2,2,1,2,2,2,6,1,2,2,0],
    [0,0,2,2,2,0,0,1,1,2,1,1,1,2,0,0],
    [0,0,0,0,2,2,2,2,2,2,2,1,1,2,0,0],
    [0,2,0,0,0,2,2,1,2,0,1,1,3,2,0,0],
    [0,2,2,2,1,0,2,1,2,0,1,0,0,0,0,0],
    [0,2,2,0,1,1,2,2,2,2,2,2,2,2,2,0],
    [0,2,2,2,2,2,2,0,6,1,1,0,0,0,0,0],
    [0,2,2,2,2,0,0,0,1,1,1,2,2,2,5,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
    
]

function dibujaEscenario(){
    var color;
    for (let y = 0; y < Escenario.length; y++ ){
        for (let x = 0; x < Escenario[0].length; x++){
            var tile = Escenario[y][x];
            contexto.drawImage(tileMap,tile*32,0,32,32, anchoF*x,anchoF*y,anchoF,altoF);
            /* if(Escenario[y][x] == 1)
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
                color = Cpocion; */

           /*  contexto.fillStyle = color;
            contexto.fillRect(x *anchoF, y*altoF, anchoF,altoF) */
        } 
    }
}

var Antorcha =function(x,y){
    this.x=x;
    this.y=y;
    this.retraso = 10;
    this.Fotograma = 0;
    this.contador = 0;

    this.cambiaFotoframa = function(){
        if(this.Fotograma < 3){
            this.Fotograma++;
        }else {
            this.Fotograma=0;
        }
    }

    this.dibuja = function(){
        if(this.contador <this.retraso){
            this.contador++;
        }else{
            this.cambiaFotoframa();
            this.contador = 0;
        }
        contexto.drawImage(tileMap,this.Fotograma*32,64,32,32, anchoF*x,anchoF*y,anchoF,altoF);

    }
    

}

var malo = function (x,y){
    this.x=x;
    this.y=y;

    this.dibuja=function(){
        contexto.drawImage(tileMap,0,32,32,32, this.x*anchoF,this.y*altoF,anchoF,altoF);

    }
   
}

var jugador = function(){
    this.x = 2;
    this.y = 1;
    this.color ="#ff0f00"
    this.llave = false;
    this.puerta = false;
    this.vida = 100;

    this.dibuja = function(){
        /* contexto.fillStyle = this.color
        contexto.fillRect(this.x*anchoF, this.y*altoF, anchoF,altoF) */
        this.dibuja=function(){
            contexto.drawImage(tileMap,32,32,32,32, this.x*anchoF,this.y*altoF,anchoF,altoF);

        }
        
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
        this.PisaMina();
        this.TomaPocion();
    }
    this.abajo =function(){
        if(this.margenes(this.x, this.y+1) == false)
        this.y++;
        this.obtenerObjeto();
        this.abrirPuerta();
        this.PisaMina();
        this.TomaPocion();
    }
    this.derecha =function(){
        if(this.margenes(this.x+1, this.y) == false)
        this.x++;
        this.obtenerObjeto();
        this.abrirPuerta();
        this.PisaMina();
        this.TomaPocion();
    }
    this.arriba =function(){
        if(this.margenes(this.x,this.y-1)==false)
        this.y--;
        this.obtenerObjeto();
        this.abrirPuerta();
        this.PisaMina();
        this.TomaPocion();
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

    this.PisaMina = function (){
        var mina = Escenario[this.y][this.x];
        if (mina == 5){
            Escenario[this.y][this.x] = 2;
            this.vida-=60
            alert("Has pisado una mina, tu vida es de: "+ this.vida)

        }
    }

    this.TomaPocion = function(){
        var pocion = Escenario[this.y][this.x]
        if (pocion == 6){
            Escenario[this.y][this.x] = 2;
            this.vida += 30
            alert("Has tomado una poción, tu vida es de: " + this.vida)
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

    //Creamos antorcha
    ImgAntorcha.push(new Antorcha(1,5));
    ImgAntorcha.push(new Antorcha(1,4));
    ImgAntorcha.push(new Antorcha(1,6));
    ImgAntorcha.push(new Antorcha(1,7));
    ImgAntorcha.push(new Antorcha(1,8));
    ImgAntorcha.push(new Antorcha(1,9));
    ImgAntorcha.push(new Antorcha(2,9));
    ImgAntorcha.push(new Antorcha(2,8));
    ImgAntorcha.push(new Antorcha(3,8));
    ImgAntorcha.push(new Antorcha(3,9));

    //Creamos ENEMIGO
    enemigo.push(new malo())

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
    canvas.height = 800;
}

function principal(){
    borrarCanvas();
    dibujaEscenario();
    protagonista.dibuja();
    for(let index = 0; index < enemigo.length; index++){
        enemigo[index].dibuja();
    }
    
    for(let index = 0; index < ImgAntorcha.length; index++){
        ImgAntorcha[index].dibuja();
    }

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

