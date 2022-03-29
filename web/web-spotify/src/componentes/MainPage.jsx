import React from 'react';
import { useHistory} from "react-router-dom"
import logo from '../Spotify_Logo_White.png';
import '../styles/MainPage.css';

const MainPage = () => {

const history = useHistory();

const goRegister = () => {
    history.push("/register");
}

const goLogin = () => {
    history.push("/login");
}

return(
    <div className="container">
      <div className="navbar">
        <div className="col-lg-4 col-md-3 col-sm-2 col-xs-2 filaIzq">
          <a title="logo" href="/"><img src={logo} className="logoMainPage" alt="logo"/></a> 
        </div>
        <div className="col-lg-3 col-md-6 col-sm-8 col-xs-8 filaMedio">
        </div>
        <div className="col-lg-5 col-md-3 col-sm-2 col-xs-2 filaDer">
          <div className="w3-right links">
            <form onSubmit={goRegister} className="link-register">
              <button type="submit" className="link">Regístrate</button>
            </form>
            <form onSubmit={goLogin} className="link-login">
              <button type="submit" className="link">Iniciar Sesión</button>
            </form>  
          </div>
        </div>
      </div>
      <header className="header">
        <div className='containerCenter'>
          <p className='text-header'> Escuchar es todo</p>
          <p className='text2-header'> Millones de canciones y playlists.</p>
        </div>
      </header>
    </div>
  );

}

export default MainPage;