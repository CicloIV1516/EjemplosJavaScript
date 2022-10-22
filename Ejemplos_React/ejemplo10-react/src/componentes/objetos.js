import {usesState} from "react"

export default function Objetos({item}){
    //creamos los estados adicionales
    return(
        <div>
            {item.etiqueta}
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    )
}