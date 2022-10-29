import {useState} from "react"

export default function Objetos({item, actualizarDatos, onEliminar}){
    //creamos los estados adicionales

    const [isEditar, setIsEditar] = useState(false);

    function FormEditar(){
        const [newValor, setNewValor] = useState(item.etiqueta);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValor(value);
        }

        function handleClicActualizarObjeto(){
            actualizarDatos(item.id, newValor);
            setIsEditar(false);
        }


        return(
            <form className='objActualizarForm' onSubmit={handleSubmit}>
                <input
                type="text"
                className='objInput'
                onChange={handleChange}
                value={newValor}
                />
                <button
                className='objBotonEditar'
                onClick={handleClicActualizarObjeto}
                >Actualizar</button>
            </form>
        );
    };

    function ObjetosIndividuales(){
        return (
            <div className='ObjetosInfo'>
                <span className='objEtiqueta'>{item.etiqueta}</span>
                <button className='botonActualizar' onClick={()=> setIsEditar(true)}>Editar</button>
                <button className='botonEliminar' onClick={()=> onEliminar(item.id)}>Eliminar</button>
            </div>
        );
    };

    return(
        <div className='objObjetos'>
        {isEditar ? <FormEditar/> : <ObjetosIndividuales/>}   
        </div>    
    );
}