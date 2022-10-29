import { useState } from "react";
import Objetos from "./objetos";

import '../styles/objetos.css';

export default function ObjetosApp() {
    //useState es un hook para crear un estado
    //etiqueta sería un getter
    //setEtiqueta sería el setter
    const [etiqueta, setEtiqueta] = useState('');
    const [precio, setPrecio] = useState('');
    const [cuerpo, setCuerpo] = useState([]);

    function handleEnviar(e) {
        //deshabilito sus funciones por defecto
        e.preventDefault();
        //escribo lo que yo deseo que se ejecute en ese evento
        if (etiqueta === '' || precio ===''){
            alert("El campo no debe estar vacío");
        }
        else{
            //creamos un nuevo elemento de la lista para mi caso un producto de la tienda
            const newObjeto = {
                //crypto es un API que nos proporciona claves o identificadores aleatorios y que no se repiten
                //estos sería los atributos de este nuevo elemento
                id: crypto.randomUUID(),
                etiqueta: etiqueta, 
                stock: false,
                precio: precio          
            };        
            
            //adicionar al cuerpo de la página los productos que he venido creando
            const copia = [...cuerpo];
            console.log(cuerpo);
            //lo ubico al principio del arreglo
            copia.unshift(newObjeto);
            //pongo en el cuerpo todos los elementos creados
            setCuerpo(copia);
            //borro la información de la etiqueta para que el input quede en blanco
            setEtiqueta('');
            setPrecio('');
            //para visualizar los productos creados por consola Nota: Se puede quitar una vez probado
            //la variable copia crea el JSON
            console.log(copia);
        }        
    };

    function handleCambios(e){
        const value = e.target.value;
        setEtiqueta(value);
    };
    function handleCambiosPrecios(e){
        const value = e.target.value;
        setPrecio(value);
    }

    function handleActualizar(id, value, value2){
        console.log(value);
        if (value === ''){
            alert("El campo no puede estar vacío");
        }
        else{
            const copia = [...cuerpo];
            const item = copia.find(item => item.id === id);
            item.etiqueta = value;
            item.precio = value2;
            setCuerpo(copia);
        }
        
    };

    function handleEliminar(id){
        //se compara con un valor diferente para que lo oculte, más no para eliminarlo
        const copia = cuerpo.filter(item => item.id !== id);
        setCuerpo(copia);
    };
//todo lo que sea className es CSS
    return (
        <div className='objContenedor'>
        <div className='objTitulos'>
            <span>Nombre del producto</span>
            <span>Precio</span>
        </div>
            <form 
            className='objFormulario'
            //onSubmit es un evento del formulario, que indica que es un form de envío de datos
            onSubmit={handleEnviar}
            >
                <input
                    className='objInput'
                    //onChange es un evento del input que actualiza en tiempo real lo que se escribe allí
                    onChange={handleCambios} 
                    value={etiqueta}               
                />
                <input
                className='objInput'
                //onChange es un evento del input que actualiza en tiempo real lo que se escribe allí
                onChange={handleCambiosPrecios} 
                value={precio}
                />
                <input
                    //onClick es un evento de hacer click, ¿qué pasa si hago click?
                    onClick={handleEnviar}
                    className='objBoton'
                    type="submit"
                    value="Crear Objeto"
                />                              
            </form>
            
            <div className='cuerpoContenedor'>
                {
                    //map es similar a un ciclo for, que se itera automáticamente con los items que tiene
                    cuerpo.map(item =>(
                        <Objetos
                        //key controla el identificador, por si algún dato se repite
                        key={item.id}
                        item={item}
                        actualizarDatos={handleActualizar}
                        onEliminar={handleEliminar}
                        />
                    ))
                }
            </div>

        </div>
    );
}