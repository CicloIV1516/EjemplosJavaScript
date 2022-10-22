//creamos una función declarada normalita
//sumar dos números
function suma(a, b){
    let s = a + b;
    return s;
}

let dato1 = window.prompt("Ingrese un número","");
let dato2 = window.prompt("Ingrese un número","");

//llamamos con un call
var resultadoSuma = suma.call(resultadoSuma, parseInt(dato1), parseInt(dato2));
document.write(resultadoSuma + '</br>');

//llamamos con un Apply
var resultadoSuma2 = suma.apply(resultadoSuma2,[parseInt(dato1), parseInt(dato2)]);
document.write(resultadoSuma2 + '</br>');