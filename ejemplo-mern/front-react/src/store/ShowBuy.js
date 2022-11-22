import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { u, u2 } from "../module/urlModule";

const URI = u;
const URI2 = u2;

const CompShowBuy = ()=>{
    const [buys, setBuys] = useState([]);

    const navigate = useNavigate();
    let s;

    useEffect(()=>{
        getBuys();
    })

    const getBuys = async ()=>{
        const res = await axios.get(URI2);
        setBuys(res.data);
        //la sumatoria de la cuenta
        let suma = 0;
        res.data.map((r, index)=>{
            suma += parseInt(r.precio);
        })
        document.getElementById('resultado').innerHTML = suma;
    }

    //borrar productos del carrito
    const deleteBuy = async(id)=>{
        await axios.delete(URI2+id);
        getBuys();
    }

    const pagar = async()=>{
        const res = await axios.get(URI2);
        res.data.map((t)=>{
            s = t.stock;
            res.data.map((w)=>{
                if (w.idProduct == t.idProduct){
                    s -= 1;
                }
                restarProducto(w.idProduct);
                deleteBuy(w._id);
            })
        })
        alert("Gracias por su compra!")
        navigate('/store');
    };

    const restarProducto = async(id)=>{
        await axios.put(URI+id, {stock:s})
    };

    return(
        <div className="container">
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
                                buys.map((buy, index)=>(
                                    <tr key={index}>
                                        <td>{buy.nombre}</td>
                                        <td>{buy.precio}</td>
                                        <td>
                                            <button onClick={()=>deleteBuy(buy._id)} className="btn btn-outline-danger"><i className="fa-solid fa-trash"></i></button>
                                        </td>

                                    </tr>
                                ))
                            }
                            <tr>
                                <td>Total</td>
                                <td><label id="resultado"></label></td> 
                            </tr>
                        </tbody>
                        </table>
                    </div>
                <div className="justify-content-center">
                    <button onClick={()=>pagar()} className="btn btn-outline-primary px-3"><i className="fa-solid fa-bag-shopping"></i> Pagar</button>

                </div>

                </div>
        </div>
    )

}

export default CompShowBuy;