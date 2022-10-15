let mensaje = "";
let m = 0;

let entrada;
entrada = window.prompt("Ingresa el número a multiplicar", "0");
let num;
num = `${entrada}`;
mensaje = "Tabla del " + num + "</br>";

//ciclo while
let i = 1;
while (i<11){
    m = i*num;
    //5 * 1 = 5 ....
    mensaje += num + " * " + i + " = " + m + "</br>";
    i++;
}

let info = document.getElementById("tablas");
info.innerHTML = mensaje;
