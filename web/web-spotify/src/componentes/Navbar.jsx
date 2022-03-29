import React from 'react';
import { useHistory} from "react-router-dom"
import Themes from '../themes/Themes'
import { ThemeProvider } from 'styled-components';
import { NavBarContainer } from '../themes/Changes';
import '../styles/Navbar.css';

const Navbar = (props) => {

    const { theme } = props;

    const history = useHistory();

    const goBack = () => {
        history.go(-1);
}

return ( 
            <div className='containerNavbar'>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 nabvar-left"> 
                    <button type="submit" className="bi-arrow bi bi-arrow-left-circle-fill" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                        </svg>
                    </button>
                    <button type="submit" className="bi-arrow bi bi-arrow-right-circle-fill">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                    </button>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 nabvar-right">  
                    <div className="btn-group">
                        <button type="button" className="btn btn-default dropdown-toggle" id="buttonUser" data-toggle="dropdown">
                            imgUser nameUser <span className="caret"></span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Perfil</a>
                            <a className="dropdown-item" href="#">Cambiar Tema</a>
                            <a className="dropdown-item" href="#">Cerrar Sesión</a>
                        </div>
                    </div>
                </div>    
            </div>       
    );
};

export default Navbar;