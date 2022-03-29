import MainPage from './componentes/MainPage';
import Register from './componentes/Register';
import Home from './componentes/Home';
import Login from './componentes/Login';
import User from './componentes/User';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import Playlist from './componentes/Playlist';



const App = () => { 

  return (
    <BrowserRouter>  
      <Switch>
        <PublicRoute path="/register" component={Register}/>
        <PublicRoute path="/login" component={Login}/>      
        <PublicRoute path="/home" component={Home}/>
        <PublicRoute path="/user" component={User}/>
        <PublicRoute path="/playlist" component={Playlist}/>
        <PublicRoute path="*" component={MainPage}/>
        
      </Switch>     
    </BrowserRouter>
  );
}

export default App;
