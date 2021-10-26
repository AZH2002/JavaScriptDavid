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

document.getElementById("phones").onchange = function(){


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