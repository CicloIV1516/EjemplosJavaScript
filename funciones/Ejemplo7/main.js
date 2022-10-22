//funciones autoinvocadas -> recursivas
(function(){
    alert('Función autoinvocada');
})()

//función autoinvocada con parámetros
//que muestre Esta es la función 2
let n = 2;
(function(num){
    alert('Esta es la función ' + num);
})(n)

//funciones dentro de otras funciones
function fuera(num1){ 
    function dentro(num2){
        return num1*num2;
    }
    function dentro2(num2){
        return num1 + num2;
    }
    //llamar la función de adentro
    let dato;
    dato = window.prompt("Ingrese 1 o 2","");
    if (dato == 1){
        return dentro(6);
    }
    else{
        return dentro2(6);
    }    
}
//llamar la función
document.write(fuera(5))

