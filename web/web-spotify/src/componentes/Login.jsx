import React, { useState } from 'react';
import Api from '../api/api';
import { useHistory } from "react-router-dom"
import logo from '../Spotify_Logo_Black.png';
import '../styles/Login.css';

const Login = () => {

const [data, setData] = useState({
    email: "",
    password: ""
})

const history = useHistory();

const [loginError, setLoginError] = useState (false)

const goRegister = () => {
    history.push("/register") ;
};

const handleChange = name => event => {
    setData(prevState => ({ ...prevState, [name]: event.target.value }));
};

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(data);
    Api.login(data)
    .then(response => {
        console.log("3");
        localStorage.setItem("token",response.headers.authorization)
        history.push("/home");
        })
    .catch(_ => setLoginError(true));
}

return(
    <div className='containerLogin'>
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0 Izq">   
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 Medio">
            <div className="register-form-container">
                <form onSubmit={handleSubmit}>
                    <div className='logoSpotify'>
                        <a title="logo" href="/"><img src={logo} className="logo" alt="logo"/></a> 
                    </div>
                    <div className="form-content">  
                        <div className="form-group">
                            <h6>Dirección de correo</h6>
                            <input className="form-control" type="text" name="email" value={data.email} onChange={handleChange("email")} placeholder="Pon tu correo electrónico" required />
                        </div>
                        <div className="form-group">
                            <h6>Contraseña</h6>
                            <input className="form-control" type="password" name="password" value={data.password} onChange={handleChange("password")} placeholder="Por aquí tu contraseña" required />
                        </div>
                    </div>  
                    <div className="register-button">
                        <button type="submit" className="btn-btn btn-info">Iniciar Sesión</button>
                    </div>     
                </form>
                <form onSubmit={goRegister} className="login">
                    <div className="register-text-container-2"> 
                        <p className='textLogin'>¿No tienes cuenta?</p>
                    </div>
                    <div className='buttonRegister'>
                        <button type="submit" className="btn-btn btn ">SUBSCRÍBETE A SPOTIFY</button>
                    </div>
                </form> 
            </div>       
        </div>
        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-0 Der">
        </div>
    </div>
);

}

export default Login;