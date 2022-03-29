import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import Api from '../api/api';
import logo from '../Spotify_Logo_Black.png';
import '../styles/Register.css';

const Register = () => {

const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    image:"",
    })

const [registerError, setregisterError] = useState (false)    

const handleChange = name => event => {
    setData(prevState => ({ ...prevState, [name]: event.target.value }));
}

const handleSubmit = (event) =>{
    event.preventDefault(); 
    Api.register(data)
    .then(response => {
        localStorage.setItem("token",response.headers.authorization)
        history.push("/home");
        })
        .catch(_ => setregisterError(true));
}
  
const history = useHistory();

const goLogin = () => {
    history.push("/login");
}

return(
    <div className='containerRegister'>
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0 Izq">   
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 Medio">
            <div className="register-form-container">
                <form onSubmit={handleSubmit}>
                    <div className='logoSpotify'>
                        <a title="logo" href="/"><img src={logo} className="logo" alt="logo"/></a> 
                    </div>
                    <div className='textRegister'>
                        <p>Regístrate gratis para escuchar</p>
                    </div>
                    <div className="form-content">  
                        <div className="form-group">
                            <h6>¿Cómo quieres que te llamemos?</h6>
                            <input className="form-control" type="text" name="name" value={data.name} onChange={handleChange("name")} placeholder="Pon tu nombre de usuario" required />
                        </div>
                        <div className="form-group">
                            <h6>¿Cuál es tu correo electrónico?</h6>
                            <input className="form-control" type="text" name="email" value={data.email} onChange={handleChange("email")} placeholder="Pon tu correo electrónico" required />
                        </div>
                        <div className="form-group">
                            <h6>Crea una contraseña</h6>
                            <input className="form-control" type="password" name="password" value={data.password} onChange={handleChange("password")} placeholder="Crea una contraseña" required />
                        </div>
                        <div className="form-group">
                            <h6>Coloca aqui tu imagen:</h6>
                            <input className="form-control" type="text" name="image" value={data.image} onChange={handleChange("image")} placeholder="Pon una imagen" required />
                        </div> 
                    </div>  
                    <div className="register-button">
                        <button type="submit" className="btn-btn btn-info">Registrarse</button>
                    </div>     
                </form>
                <form onSubmit={goLogin} className="login">
                    <div className="register-text-container-2"> 
                        <p>¿Ya tienes cuenta?</p>
                        <a title="link" href="/login"><p className='linkLogin'>Inicia Sesión</p></a> 
                    </div>
                </form> 
            </div>       
        </div>
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0 Der">
        </div>
    </div>
);

}

export default Register;