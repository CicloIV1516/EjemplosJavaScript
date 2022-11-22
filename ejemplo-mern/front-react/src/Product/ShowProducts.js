import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { u } from "../module/urlModule.js";

//vamos a hacer referencia al END-Point que creamos en node
const URI = u;



//creamos la función para los componenetes que vamos
//a implementa, tengamos en cuenta que TODO EL CÓDIGO
//QUEDA DENTRO DE DICHA FUNCIÓN

const CompShowProducts = ()=>{
    //usamos los hooks
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const navigate = useNavigate();

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
            <div className='row justify-content-center gap-3 my-2'>
                <div className='col-7 border rounded-3 my-auto'>
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
                            {products.map((product, index)=>(
                                <tr key={index}>
                                    <td>{product.nombre}</td>
                                    <td>{product.descripcion}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link to={`/edit/${product._id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='col border rounded-3 my-0'>
                    <div className='col'>
                        <h3>Crear nuevo producto</h3>
                        <Link to="/create" className='btn btn-primary mt-2 mb-4'><i className="fa-solid fa-plus"></i></Link>
                        <p>Haga clic en el botón para ingresar un nuevo producto,
                            luego ingrese los datos en la ventana que aparece a continuación.</p>
                    </div>
                </div>
            </div>

            <footer>
                <div className='container'>
                    <div className='row justify-content-center my-5'> {/* linea 36 para cambios paso 46 */}
                        <div className='col border rounded-3 my-auto mx-auto'>
                            <form className="form-control-lg" >
                                <button type="submit" className="btn btn-outline-warning mx-3 p-3" onClick={(e)=>navigate('/')}><i className="fa-solid fa-igloo fa-xl"></i> Inicio</button>
                            </form>
                        </div>                
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default CompShowProducts;