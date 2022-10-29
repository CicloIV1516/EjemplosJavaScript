import {useState} from "react"

export default function Objetos({item, actualizarDatos, onEliminar}){
    //creamos los estados adicionales
    //este hook me cambia de estado, entre: ver los elementos o editar los elementos
    const [isEditar, setIsEditar] = useState(false);
    //cuando isEditar esté en false, veo la función objetosIndividuales
    //cuando isEditar esté en true, veo la función FormEditar

    //esta función me permite editar los campos
    function FormEditar(){
        const [newValor, setNewValor] = useState(item.etiqueta);
        const [newPrecio, setNewPrecio] = useState(item.precio);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValor(value);
        }
        // el parámetro e, es la variable interna del componente cuando quiere ejecutar un evento
        function handleChangePrecio(e){
            const value = e.target.value;
            setNewPrecio(value);
        }

        function handleClicActualizarObjeto(){
            actualizarDatos(item.id, newValor, newPrecio);
            //me envía a ver la lista porque pone el isEditar en false
            setIsEditar(false);
        }


        return(
            <form className='objActualizarForm' onSubmit={handleSubmit}>
                
                <input
                //muestra el input para cambiar el nombre del producto
                type="text"
                className='objInput'
                onChange={handleChange}
                //cambiar el nombre del producto
                value={newValor}
                />

                <input
            //muestra el input para cambiar el precio

                type="text"
                className='objInput'
                onChange={handleChangePrecio}
                //cambiar el precio
                value={newPrecio}
                />


                <button
                className='objBotonEditar'
                onClick={handleClicActualizarObjeto}
                >Actualizar</button>
            </form>
        );
    };
    //esta función muestra los datos, pero no me deja editarlos, o sea, sale la lista
    function ObjetosIndividuales(){
        return (
            <div className='ObjetosInfo'>
                <span className='objEtiqueta'>{item.etiqueta}</span>
                <span className='objEtiqueta'>{item.precio}</span>
                {/*me envía a editar los campos porque pone el isEditar en true*/}
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