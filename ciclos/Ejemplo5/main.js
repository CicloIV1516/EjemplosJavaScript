let mensaje = "";
let m = 0;

let entrada;
entrada = window.prompt("Ingresa el número a multiplicar", "0");
let num;
num = `${entrada}`;
mensaje = "Tabla del " + num + "</br>";

//ciclo Do while
let i = 1;

do{
    m = i*num;
    //5 * 1 = 5 ....
    mensaje += num + " * " + i + " = " + m + "</br>";
    i++;
}while (i<11);


let info = document.getElementById("tablas");
info.innerHTML = mensaje;
