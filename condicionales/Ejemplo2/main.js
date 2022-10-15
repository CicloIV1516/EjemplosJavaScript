//verificar si una persona es o no mayor de edad
let nombre = "Luisa";
let edad;
let mensaje = "";

//ingresar por teclado
let entrada;
entrada = window.prompt("Ingrese la edad: ", "");
edad = `${entrada}`;  //con alt+96

//if else igualito que en java
if (edad>=18){
    mensaje = nombre + " es mayor de edad";
}
else{
    mensaje = nombre + " es menor de edad";
}
//otra manera de mostrar información -> la más utilizada!!!!
let mostrar = document.getElementById("datos");
mostrar.innerHTML = mensaje;