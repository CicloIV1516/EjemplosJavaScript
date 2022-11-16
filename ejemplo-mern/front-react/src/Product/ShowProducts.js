import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//vamos a hacer referencia al END-Point que creamos en node
const URI = 'http://localhost:3001/products/';

//creamos la función para los componenetes que vamos
//a implementa, tengamos en cuenta que TODO EL CÓDIGO
//QUEDA DENTRO DE DICHA FUNCIÓN

const CompShowProducts = ()=>{
    //usamos los hooks
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    //creamos la función getProducts para que vaya al back
    const getProducts = async()=>{
        //el res es la respuesta que espera el front del back
        const res = await axios.get(URI);
        //vamos a mostrar los datos que trae dicha respuesta
        setProducts(res.data);
    };

    //enseguida hacemos el delete
    const deleteProduct = async(id)=>{
        axios.delete(`${URI}${id}`);
        //una vez borre el registro, que me vuelva a mostrar los que quedan
        getProducts();
    }

    //retornemos la respuesta al HTML utilizando jsx
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>Producto</th>
                                <th scope='col'>Descripción</th>
                                <th scope='col'>Precio</th>
                                <th scope='col'>Stock</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product)=>(
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=>deleteProduct(product.id)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default CompShowProducts;