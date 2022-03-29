import React, { useState } from 'react';
import SidePageLeft from '../componentes/SidePageLeft';
import Navbar from './Navbar';
import Api from '../api/api';
import Themes from '../themes/Themes'
import { ThemeProvider } from 'styled-components';
import '../styles/User.css';
import { Link } from 'react-router-dom';

const User = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    return (
        <div className='containerUser'>
            <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 izqUser">  
                <SidePageLeft/>
            </div> 
            <div className="col-lg-9 col-md-9 col-sm-10 col-xs-10 derUser">
                <Navbar/>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 perfilUser">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dateUserContainer">
                        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2 imageUser'>
                            <p> ImageUser</p>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 dateUser'>
                            <p className= 'perfil'> PERFIL</p>
                            <p className= 'nameUser'> nombre usuario</p>
                            <p className= 'playlistsYLikes'> cantidad de Playlist, cantidad de Likes</p>
                        </div>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dateContainer">
                    <p className='title'> Tus Playlists:</p> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 playlists">
                        <Link to={`/playlist`} className="goPlaylist">
                            <div className="col-lg-3 col-md-13 col-sm-3 col-xs-3 uno">
                                Image
                            </div>
                        </Link>  
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 dos">
                            Image
                        </div>  
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 tres">
                            Image
                        </div>  
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 cuatro">
                            Image
                        </div> 
                    </div>
                    <p className='title'> Los que te gustan:</p> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 likes">
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 cinco">
                            Image
                        </div>  
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 seis">
                            Image
                        </div>  
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 siete">
                            Image
                        </div>  
                        <div className="col-lg-3 col-md-12 col-sm-10 col-xs-8 ocho">
                            Image
                        </div> 
                    </div>       
                </div>
            </div>
        </div>   
    )

}

export default User;