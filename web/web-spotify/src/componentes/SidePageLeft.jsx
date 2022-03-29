import React from 'react';
import { useHistory, Link } from "react-router-dom";
import logo from '../Spotify_Logo_White.png';
import Themes from '../themes/Themes'
import { ThemeProvider } from 'styled-components';
import '../styles/SidePageLeft.css';

const SidePageLeft = (props) => {

    const {theme, setTheme } = props;

    const changeMode = () => {
        let colorTema;
        if (theme === 'light') {
            setTheme('dark');
            colorTema = 'dark';
        } else {
            setTheme('light');
            colorTema = 'light';
        }
        localStorage.setItem('theme', colorTema);
    }

    const tema = (theme === 'light') ? 'Claro' : 'Oscuro';

return (
    <div className="side-left-container">
            <div className='spotify-logo-white'>
                <a title="logo" href="/"><img src={logo} className="logoWhite" alt="logo"/></a> 
            </div>
            <Link to={`/home`} className="goHome">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="biHome bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg> Inicio
            </Link>
            <div> 
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="biHome bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg> Buscar
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="biHome bi-plus-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                </svg> Crear Playlist
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="biHome bi-music-player-fill" viewBox="0 0 16 16">
                    <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg> Todas nuestras canciones     
            </div>
            <Link to={`/user`} className="goHome">
                <div>
                    Perfil
                </div>
            </Link>
    </div>
)

};

export default SidePageLeft;