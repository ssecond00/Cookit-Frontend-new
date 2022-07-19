import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Cookies from 'universal-cookie';
import CookitLogo from '../img/cookit_logo_2.png';
import { Container } from '@mui/system';
import { Button } from '@mui/material';

class Header2 extends React.Component{

    cookies = new Cookies();

    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { user_logged_in : this.cookies.get('flag_login'), hide_login_button: props.hideLoginButton };
        this.logOut = this.logOut.bind(this);

      };


      logOut(){
        this.cookies.set("flag_login", false, { path: "/" }); 
        this.render();
      }
    

    render(){
        if(this.state.user_logged_in === 'true'){
            return(
                <Container>
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
                      <a type="button" href="/" onClick={this.logOut} >Salir</a>
                    </div>
                  </div>
        
                </Toolbar>
              </React.Fragment>
              </Container>
            );
        }else{
            if(this.state.hide_login_button === true){
                return(
                        <React.Fragment>
                        <Toolbar >
                            <img class="headerLogo"
                            src={CookitLogo} alt="logo" href='/' />
                            <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            >
                            </Typography>
                            
                        </Toolbar>
                        </React.Fragment>
                    
                );
            }else{   
                return (
                    <React.Fragment>
                    <Toolbar >
                        <img class="headerLogo"
                        src={CookitLogo} alt="logo" href='/' />
                        <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        >
                        </Typography>
                        <Button variant="contained" class="dropdown" size="small" href='/login'>
                        Iniciar Sesion
                        </Button>
                    </Toolbar>
                    </React.Fragment>
                );
            }
        }
        

    }

}

export default Header2;