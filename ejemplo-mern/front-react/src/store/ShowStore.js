import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { u, u2 } from "../module/urlModule";

const URI = u;
const URI2 = u2;

//crear el componente visual
const CompShowStore = ()=>{
    //configuramos hooks
    const [products, setProducts] = useState([]);
    const [cars, setCars] = useState([]);

    let nombre;
    let precio;
    let stock;
    let idProduct;

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getProducts();
    });


    //mostrar los productos
    const getProducts = async()=>{
        const res = await axios.get(URI);
        setProducts(res.data);
        getCars();
    };

    //buscar un producto para agregar al carrito
    const getCarById = async(id)=>{
        console.log(id);
        const res = await axios.get(URI+id);
        nombre = res.data.nombre;
        precio = res.data.precio;
        stock = res.data.stock;
        idProduct = res.data._id;
        createCars();
    };

    //método para crear y guardar un producto en el carrito
    const createCars = async ()=>{
        await axios.post(URI2, {nombre:nombre,precio:precio, stock:stock, idProduct:idProduct});
        getProducts();
        getCars();
    }

    //muestre todos los productos del carrito
    const getCars = async ()=>{
        const res = await axios.get(URI2);
        setCars(res.data)
        //la sumatoria de la cuenta
        let suma = 0;
        res.data.map((r, index)=>{
            suma += parseInt(r.precio);
        })
        document.getElementById('resultado').innerHTML = suma;
    }

    //borrar productos del carrito
    const deleteCar = async(id)=>{
        await axios.delete(URI2+id);
        getProducts();
    }


    return(
        <div className="container">
            <div className="row justify-content-center my-2 gap-4">
                <div className="col-7 border rounded-3 my-auto">
                    <table className="table">
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
                                        <button onClick={()=>getCarById(product._id)} className="btn btn-outline-primary"><i className="fa-sharp fa-solid fa-cart-plus"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col border rounded-3 my-4">
                    <div className="col">
                        <h3>Tu carrito de Compras</h3>
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope='col'>Producto</th>
                                <th scope='col'>Precio</th>
                                <th scope='col'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map((car, index)=>(
                                    <tr key={index}>
                                        <td>{car.nombre}</td>
                                        <td>{car.precio}</td>
                                        <td>
                                            <button onClick={()=>deleteCar(car._id)} className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                                        </td>

                                    </tr>
                                ))
                            }
                            <tr>
                                <td>Total</td>
                                <td><label id="resultado"></label></td>
                                <td>
                                    <Link to="/buy/" className="btn btn-warning"><i className="fa-regular fa-credit-card"></i></Link>
                                </td>
                                
                            </tr>
                        </tbody>

                        </table>
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
    )
};

export default CompShowStore;