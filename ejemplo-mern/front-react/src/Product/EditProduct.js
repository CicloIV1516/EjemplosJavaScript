import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3001/products/';

//creamos el componente de edición
const CompEditProducts = ()=>{
    //configuramos los hooks
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');

    const navigate = useNavigate();

    //como necesitamos el id del elemento que vamos a editar, usamos el params que viene de la palabra parámetros
    const {id} = useParams();

    //procedimiento para actualizar
    const update = async (e)=>{
        e.preventDefault();
        await axios.put(URI+id, {nombre:nombre, descripcion:descripcion, precio:precio, stock:stock });
        navigate('/');
    };

    //Aquí busco el producto con el id, esto se ejecuta antes del procedimiento de actualzar
    useEffect( ()=>{
        getProductById();
    },[])

    const getProductById = async ()=>{
        const res = await axios.get(URI+id);
        setNombre(res.data.nombre);
        setDescripcion(res.data.descripcion);
        setPrecio(res.data.precio);
        setStock(res.data.stock);       
    };

    return(
        <div>
            <h1>Editar Productos</h1>
            <form onSubmit={update}>            
                <div className="row mb-2 justify-content-center">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Nombre</label>
                    <div className="col-sm-4">
                        <input
                        value={nombre}
                        onChange={ (e)=>setNombre(e.target.value)}
                        type="text"
                        className="form-control form-control-sm"
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
                        <button className="btn btn-info px-3 py-3" type="submit" ><i className="fa-solid fa-wrench"></i> Actualizar</button>
                    </div>
                </form>
        </div>

    )

};

export default CompEditProducts;