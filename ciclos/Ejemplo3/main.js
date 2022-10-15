let mensaje = "";
let m = 0;

let entrada;
entrada = window.prompt("Ingresa el número a multiplicar", "0");
let num;
num = `${entrada}`;
mensaje = "Tabla del " + num + "</br>";

//ciclo for
for (let i=1; i<11; i++){
    m = i*num;
    //5 * 1 = 5 ....
    mensaje += num + " * " + i + " = " + m + "</br>";
}


let info = document.getElementById("tablas");
info.innerHTML = mensaje;
