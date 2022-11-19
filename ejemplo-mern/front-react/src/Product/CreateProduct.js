import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:3001/products/';

//creamos el componente para crear nuevos productos
const CompCreateProducts = ()=>{
    //vamos a configurar los hooks
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    //configuramos el navegador
    const navigate = useNavigate();

    //vamos a crear el procedimiento para guardar un nuevo producto
    const nuevo = async (e)=>{
        e.preventDefault();
        await axios.post(URI, {nombre:nombre, descripcion:descripcion, precio:precio, stock:stock});
        navigate('/');
    }

    return(
        <div>
            <h1>Crear Productos</h1>
            <form onSubmit={nuevo}>
                <div className="row mb-2 justify-content-center">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Nombre</label>
                    <div className="col-sm-4">
                        <input
                            value={nombre}
                            onChange={(e)=>setNombre(e.target.value)}
                            type='text'
                            className='form-control form-control-sm'
                        />
                    </div>
                </div>
                <div className="row mb-2 justify-content-center">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Descripción</label>
                    <div className="col-sm-4">
                        <textarea
                            value={descripcion}
                            onChange={(e)=>setDescripcion(e.target.value)}
                            type='text'
                            className='form-control form-control-sm'
                        />
                    </div>
                </div>
                <div className="row mb-2 justify-content-center">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Precio</label>
                    <div className="col-sm-4">
                        <input
                            value={precio}
                            onChange={(e)=>setPrecio(e.target.value)}
                            type='number'
                            className='form-control form-control-sm'
                        />
                    </div>
                </div>
                <div className="row mb-2 justify-content-center">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Stock</label>
                    <div className="col-sm-4">
                        <input
                            value={stock}
                            onChange={(e)=>setStock(e.target.value)}
                            type='number'
                            className='form-control form-control-sm'
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary px-3 py-3" type="submit"><i class="fa-solid fa-cloud"></i>  Guardar</button>

                </div>
            </form>
        </div>
    )

};

export default CompCreateProducts;