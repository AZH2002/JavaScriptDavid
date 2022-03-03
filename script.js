//Ejercicio 1

function suma(){
    var num1 = document.getElementById("Num1").value;
    var num2 = document.getElementById("Num2").value;
    var text;
    var resultado = parseFloat(num1) + parseFloat(num2);
    text = resultado;
    //return resultado;
    document.getElementById("result").innerHTML = text;
     
    
}

function resta (num1,num2){
    var num1 = document.getElementById("Num1").value;
    var num2 = document.getElementById("Num2").value;
    var text;
    var resultado = parseFloat(num1) - parseFloat(num2);
    text = resultado;
    //return resultado;
    document.getElementById("result").innerHTML = text;
}

function multiplicacion (num1,num2){
    var num1 = document.getElementById("Num1").value;
    var num2 = document.getElementById("Num2").value;
    var text;
    var resultado = parseFloat(num1) * parseFloat(num2);
    text = resultado;
    //return resultado;
    document.getElementById("result").innerHTML = text;
}

function division (num1, num2){
    var num1 = document.getElementById("Num1").value;
    var num2 = document.getElementById("Num2").value;
    var text;
    var resultado = parseFloat(num1) / parseFloat(num2);
    text = resultado;
    //return resultado;
    document.getElementById("result").innerHTML = text;
}

//Ejercicio 3

function promedio (){
    var nombre = document.getElementById("nombre").value;
    var nota1 = parseFloat(document.getElementById("Nota1").value);
    var nota2 = parseFloat(document.getElementById("Nota2").value);
    var nota3 = parseFloat(document.getElementById("Nota3").value);
    var nota4 = parseFloar(document.getElementById("Nota4").value);
    var promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    if(promedio < 3){
        document.getElementById("promedio").innerHTML = " Buenas " + nombre + "su nota final es: " + promedio + " y su estado final es reprobado."
    }else{
        document.getElementById("promedio").innerHTML = " Buenas " + nombre + "su nota final es: " + promedio + " y su estado final es aprobado."

    }

}

//Ejercicio 4
	var camisas = {
    	    'camisaSinLogo': {
    	        'nombre': 'Camiseta sin logos',
    	        'precio': 10,
    	        'moneda': 'US$',
    	        'imageUrl': "https://i.pinimg.com/originals/ae/f8/6f/aef86f950e19c4c0bcc7560ae70b1ff4.jpg"
    	    },
    	    'camisaSuper': {
    	        'nombre': 'Camiseta con tu super heroe favorito',
    	        'precio': 15,
    	        'moneda': 'EUR',
    	        'imageUrl': "https://www.copiacopia.es/wp-content/uploads/2019/02/camiseta-2.jpg"
    	    },
    	    'camisaProgramadores': {
    	        'nombre': 'Camiseta para programadores',
    	        'precio': 60000,
    	        'moneda': 'COP$',
    	        'imageUrl': "https://ih1.redbubble.net/image.2475258133.2056/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg"
    	    }
	};

    var radioItems = document.getElementsByName("product");

    for (var a =0; a<radioItems.length; a++){
        radioItems[a].onchange = function(){
            for(var b =0; b<radioItems.length; b++){
                if(radioItems[b].checked){
                    var selectRadio = radioItems[b].value;
                    console.log(selectRadio);
                    document.getElementById("shirt_name").innerHTML = camisas[selectRadio].nombre;
                    var doble = (camisas[selectRadio].moneda) + camisas[selectRadio].precio.toFixed(2);
                    document.getElementById("shirt_price").innerHTML = doble;
                    document.getElementById("shirt_image").src = camisas[selectRadio].imageUrl;
                    
                }
            }
        }
    }
    


