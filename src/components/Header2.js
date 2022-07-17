import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CookitLogo from '../img/cookit_logo_2.png';

class Header2 extends React.Component{


    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { data: [] };
      };

    

    render(){

        return(
            <React.Fragment>
            <Toolbar >
              <img class="headerLogo"
                src={CookitLogo} alt="logo" />
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                
              >
              </Typography>
              <div class="dropdown">
                <button class="dropbtn">Usuario</button>
                <div class="dropdown-content">
                  <a href="/mi_perfil">Mi Perfil</a>
                  <a href="/mis_recetas">Mis Recetas</a>
                  <a href="/crear_receta">Cargar Receta</a>
                  <a type="button" href="/" >Salir</a>
                </div>
              </div>
    
            </Toolbar>
          </React.Fragment>
        );

    }

}

export default Header2;