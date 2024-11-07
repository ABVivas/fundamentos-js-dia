/*metodo mas usado*/
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";

/*salidad de datos */
window.alert(5+2);
console.log(6+2);

/*Declaracion */
let a, b, c;
a = 5;
b = 6;
c = a + b;
window.alert(c);
document.getElementById("demo").innerHTML = c;

/*Variables */
let p, q, r;
const m = 8;
p = 5;
q = 7;
r = p + q + m;
document.getElementById("demo1").innerHTML = r; 

/* Tipos de datos */
let num = 24; //numero entero
let name = "Angie"; //cadena
let km = 14.5; //numero decimal
let isColombiano = true; //booleano
let obj = {firstname: "Juan", lastname: "Perez"} // objeto 

let y = 17 + "POO";
let unir = "17" + "POO";
window.alert(y);
window.alert(unir);

/* definicion de funcion */
function myFunction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}