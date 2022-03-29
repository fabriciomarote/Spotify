import React, { useState } from 'react';
import SidePageLeft from '../componentes/SidePageLeft';
import Navbar from './Navbar';
import Api from '../api/api';
import Themes from '../themes/Themes'
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from '../themes/Changes';
import '../styles/Playlist.css';

const Playlist = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    return (
        <div className='containerPlaylist'>
            <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 izqUser">  
                <SidePageLeft/>
            </div> 
            <div className="col-lg-9 col-md-9 col-sm-10 col-xs-10 derUser">
                <Navbar/>   
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dataPlaylist">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 datePlaylistContainer">
                        <div className='col-lg-2 col-md-3 col-sm-3 col-xs-3 imageUser'>
                            <p> ImagePlaylist</p>
                        </div>
                        <div className='col-lg-8 col-md-9 col-sm-9 col-xs-9 dateUser'>
                            <p className= 'playlistTitle'> LISTA</p>
                            <p className= 'namePlaylist'> nombre playlist</p>
                            <p className= 'playlistInfo'> autor, cantidad de canciones, duración</p>
                        </div>
                        <div className='col-lg-2 col-md-3 col-sm-3 col-xs-3 buttonLike'>
                            <button type="submit" className="button-icon like-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </button>
                        </div>    
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 playlistSongsTable">     
                   <div className='titlesTable'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 lineTable'>
                            <p>TÍTULO</p>
                        </div>    
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 lineTable'>
                            <p>INTERPRETE</p>
                        </div> 
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 lineTable'>
                            <p>DURACIÓN</p>
                        </div>  
                   </div>
                   <div className='SongsDate'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 lineTable'>
                            <p>nameSong</p>
                        </div>    
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 lineTable'>
                            <p>band</p>
                        </div> 
                        <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 lineTable'>
                            <p>duration</p>
                        </div>  
                   </div>
                </div>
            </div>
        </div>    
    )

}

export default Playlist;