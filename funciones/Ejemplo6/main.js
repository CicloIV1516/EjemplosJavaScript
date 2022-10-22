//estructura lógica de las funciones
let nombre = 'Carlos';
function mostrar(){
    //vamos a mostrar código html en js
    document.body.innerHTML = '<h3>El nombre del cliente es ' + nombre + ' alias "El loco" </h3>';
}
//llamar la función
mostrar();

//función anónima: la idea es poderla llamar en un momento determinado sin necesidad de declarla
let info = function(){
    return "Curso JavaScript </br>";
}
//llamo la función
document.write(info());

//función flecha: Relacionan funciones dentro de funciones, es el uso más adecuado Arrow
let info2 = (n)=>{
    return "Hola " + n + "</br>";
}
//llamo la función
document.write(info2("Luis"));
//funciones predefinidas
let numero ="14";
//error de funcionamiento
let suma = numero + 5;
document.write(suma);
//solución
suma = parseInt(numero) + 5;
document.write(suma);

