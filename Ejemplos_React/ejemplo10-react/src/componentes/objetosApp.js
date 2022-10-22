import { useState } from "react";
import Objetos from "./objetos";


export default function ObjetosApp() {
    //useState es un hook para crear un estado
    //etiqueta sería un getter
    //setEtiqueta sería el setter
    const [etiqueta, setEtiqueta] = useState('');

    const [cuerpo, setCuerpo] = useState([]);

    function handleEnviar(e) {
        e.preventDefault();
        const newObjeto = {
            id: crypto.randomUUID(),
            etiqueta: etiqueta
           
        };
        

        const copia = [...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
        setEtiqueta('');
        //console.log(copia);
    }
   

    /*
    function handleClic(e) {
        e.preventDefault();
        setEtiqueta("Cambios");
    }
    */

    function handleCambios(e){
        const value = e.target.value;
        setEtiqueta(value);
    }

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
                    //onClick={handleClic}
                    onClick={handleEnviar}
                    className='objBoton'
                    type="submit"
                    value="Crear Objeto"
                />
                {/*
                {etiqueta}
                */
                }                
            </form>

            <div className='cuerpoContenedor'>
                {
                    cuerpo.map(item =>(
                        //<div>{item.id}</div>
                        <Objetos
                        key={item.id}
                        item={item}
                        />
                    ))
                }
            </div>

        </div>
    );
}