var shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };
document.getElementById("shipments").onchange = function(){
    
    var selectedOption = document.getElementById("shipments").value;
    //var dias = shipments[selectedOption].leadTime;
    //var dolares = shipments[selectedOption].fee;
        //console.log(selectedValue);

    var ordDate = new Date();
    document.getElementById("order_date").innerHTML = ordDate.toISOString().slice(0,10);
    //console.log(ordDate);
    
    var delivDate = new Date();
    document.getElementById("delivery_date").innerHTML = delivDate.toISOString().slice(0,10);
    //console.log(delivDate);
    //delivDate = delivDate.getDay();

    var delivFee = shipments[selectedOption].fee;
    document.getElementById("delivery_fee").innerHTML = delivFee.toFixed(2);
    //console.log(selectedValue);

};



var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': 450,
                'currency': 'US$',
                'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574260319"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': 869,
                'currency': 'EUR',
                'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': 519,
                'currency': 'US$',
                'imageUrl': "https://ventaspop-images.s3-us-east-2.amazonaws.com/files/products/569/546/iphone8-plus-silver-select-2018.png"
            }
        };

var radioItems = document.getElementsByName("product");

for (var a =0; a<radioItems.length; a++){
    radioItems[a].onchange = function(){
        for(var b =0; b<radioItems.length; b++){
            if(radioItems[b].checked){
                var selectRadio = radioItems[b].value;
                console.log(selectRadio);
                document.getElementById("phone_name").innerHTML = phones[selectRadio].name;
                var doble = (phones[selectRadio].currency) + phones[selectRadio].price.toFixed(2);
                document.getElementById("phone_price").innerHTML = doble;
                document.getElementById("phone_image").src = phones[selectRadio].imageUrl;
                
            }
        }
    }
}

/* document.getElementById("phones").onchange = function(){


    for(var a = 0; a < selectedOption.length; a++){
        if (selectedOption[a].checked) {
            option_selected = selectedOption[a].value;
            console.log(option_selected)

        }
    }

    var selectedOption = document.getElementById("phones").value;
    var imagen = phones[selectedOption].imageUrl;
    document.getElementById("phone_image")

    var nombreCel = phones[selectedOption].name
    document.getElementById("phone_name")

    //var divisa = phones[selectedOption].currency
    //document.getElementById("")

    var precioCel = phones[selectedOption].price
    document.getElementById("phone_price")

}
 */
//var stopwatch = document.getElementById("stopwatch");
//var playPauseButton = document.getElementById("start_stop");
//var

var isRunning = false, starTime, currentTime, elapseTime=0 ,clockInterval , hours , minutes , seconds , remainder , formarttedTime;

function formato (numero){
    if (numero < 10 || numero < 100) {
        return "0" + numero.toString();
    }else{
        return numero.toString();
    }
}


document.getElementById("start_stop").onclick=function(){

    if (!isRunning){
        isRunning = true;
        if(elapseTime==0){
            starTime=new Date().getTime();
        }else{
            starTime=new Date().getTime()-elapseTime;
        }
        clockInterval = window.setInterval(function(){
            currentTime = new Date().getTime();
            elapseTime = currentTime-starTime;

            hours = Math.floor(elapseTime/3600000);
            remainder = elapseTime-(hours*3600000);

            minutes = Math.floor(remainder/60000);
            remainder = elapseTime-(minutes*60000);

            seconds = Math.floor(elapseTime/1000);
            remainder = elapseTime-(seconds*1000);

            formarttedTime=formato(hours)+":"+formato(minutes)+":"+formato(seconds)+":"+formato(remainder);

            document.getElementById("stopwatch").innerHTML=formarttedTime;

        },10);

    }else{
        window.clearInterval(clockInterval);
        isRunning = false;
    }
}
document.getElementById("reset").onclick=function(){
    starTime = new Date().getTime();
    if (!isRunning){
        document.getElementById("stopwatch").innerHTML="00:00:00 000";
    }
}