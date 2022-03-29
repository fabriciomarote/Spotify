import React, { useState } from 'react';
import Api from '../api/api';
import SidePageLeft from '../componentes/SidePageLeft';
import Navbar from '../componentes/Navbar';
import Themes from '../themes/Themes'
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from '../themes/Changes';
import { useHistory, Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    return (
                <div className='containerHome'>
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 izq-home">   
                        <SidePageLeft/>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-10 col-xs-8 der-home">
                        <div className="col-lg-12 col-md-12 col-sm-10 col-xs-8">
                            <Navbar/>    
                            <div className="col-lg-12 col-md-12 col-sm-10 col-xs-8 playlistsContainer">
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

export default Home;