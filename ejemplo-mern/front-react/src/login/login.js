import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//creamos el componente
const CompLogin = ()=>{
    //configuramos los hooks
    const [usuario, setUsuario] = useState('');
    
    const navigate = useNavigate();

    //método de redireccionamiento
    const elegir = (e)=>{
        e.preventDefault();
        if (usuario == 'admin'){
            navigate('/view')
        }
        else{
            navigate('/store')
        }
    };


    return(
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col border rounded-3 my-auto mx-auto">
                    <form className="form-control-lg" onSubmit={elegir}>
                        <button type="submit" className="btn btn-outline-primary mx-3 p-5" onClick={(e)=>setUsuario('admin')} ><i className="fa-solid fa-hammer fa-xl"></i> Administrador</button>
                        <button type="submit" className="btn btn-outline-warning mx-3 p-5" onClick={(e)=>setUsuario('client')}><i className="fa-solid fa-user fa-xl"></i> Cliente</button>
                    </form>
                </div>
            </div>            
        </div>
    )
};

export default CompLogin;