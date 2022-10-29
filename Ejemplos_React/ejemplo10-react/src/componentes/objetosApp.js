import { useState } from "react";
import Objetos from "./objetos";

import '../styles/objetos.css';

export default function ObjetosApp() {
    //useState es un hook para crear un estado
    //etiqueta sería un getter
    //setEtiqueta sería el setter
    const [etiqueta, setEtiqueta] = useState('');
    const [precio, setPrecio] = useState(0);
    const [cuerpo, setCuerpo] = useState([]);

    function handleEnviar(e) {
        e.preventDefault();
        const newObjeto = {
            id: crypto.randomUUID(),
            etiqueta: etiqueta, 
            stock: false,
            precio: 0          
        };        

        const copia = [...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
        setEtiqueta('');
        console.log(copia);
    };

    function handleCambios(e){
        const value = e.target.value;
        setEtiqueta(value);
    };

    function handleActualizar(id, value){
        const copia = [...cuerpo];
        const item = copia.find(item => item.id === id);
        item.etiqueta = value;
        setCuerpo(copia);
    };

    function handleEliminar(id){
        //se compara con un valor diferente para que lo oculte, más no para eliminarlo
        const copia = cuerpo.filter(item => item.id !== id);
        setCuerpo(copia);
    };

    return (
        <div className='objContenedor'>
            <form 
            className='objFormulario'
            onSubmit={handleEnviar}
            >
                <input
                    className='objInput'
                    onChange={handleCambios} 
                    value={etiqueta}               
                />
                <input
                    onClick={handleEnviar}
                    className='objBoton'
                    type="submit"
                    value="Crear Objeto"
                />                              
            </form>

            <div className='cuerpoContenedor'>
                {
                    cuerpo.map(item =>(
                        <Objetos
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