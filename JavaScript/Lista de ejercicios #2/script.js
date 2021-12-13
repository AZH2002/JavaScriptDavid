/* Ejercicio1 */
var celsius1 = parseInt(document.getElementById("celsius_1").innerHTML);
var celsius2 = parseInt(document.getElementById("celsius_2").innerHTML);
var celsius3 = parseInt(document.getElementById("celsius_3").innerHTML);


/* Fórmula para convertir grados celsius a farenheit = (9 * C / 5) + 32 */

function conversion (celsius){
    var conver = (9 * celsius / 5) + 32;
    return conver;
}
document.getElementById("fahr_1").innerHTML = conversion(celsius1);
document.getElementById("fahr_2").innerHTML = conversion(celsius2);
document.getElementById("fahr_3").innerHTML = conversion(celsius3);

/* Ejercicio2 */
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
// document.getElementById("best_students").innerHTML = classification.slice(3,);
document.getElementById("best_students").innerHTML = `${classification[3]}, ${classification[4]}, ${classification[5]}`;


/* Ejercicio3 */
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
    
}
function porcentaje(){
    var totalReviews = course["5_stars_reviews"] + course["4_stars_reviews"] + course["3_stars_reviews"] + course["2_stars_reviews"] + course["1_stars_reviews"];
    //return totalReviews;
    //var fivePercentage = (course["5_stars_reviews"] * 100) / totalReviews;
    //return fivePercentage;
}

document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories.slice(0,1);
document.getElementById("reviews_5_stars").innerHTML;

/* Ejercicio4 */
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

shoppingList.pop();
console.log(shoppingList);
shoppingList.unshift("Chocolate")
console.log(shoppingList);
shoppingList.push("Queso")
shoppingList.push("Huevos")
console.log(shoppingList);
            
