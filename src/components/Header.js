import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainPage from '../pantallas/MainPage';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import App from '../App';
import CookitLogo from '../img/cookit_logo_2.png';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));





const sections = [
  { title: 'Todas las recetas', url: '#' },
  { title: 'Recetas faciles', url: '#' },
  { title: 'Recetas intermedias', url: '#' },
  { title: 'Recetas dificiles', url: '#' },
  { title: 'Buscar por ingredientes', url: '#' }
];





function Header(props) {

  const { sesionIniciada } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const logOut = () => {

    cookies.set("flag_login", false, { path: "/" }); 


  }

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  if (cookies.get("flag_login")) {
    console.log("header",cookies.get("flag_login"));
    return (
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <img class="headerLogo"
            src={CookitLogo} alt="logo" />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
          </Typography>
          <div class="dropdown">
            <button class="dropbtn">Usuario</button>
            <div class="dropdown-content">
              <a href="/mi_perfil">Mi Perfil</a>
              <a href="/mis_recetas">Mis Recetas</a>
              <a href="/crear_receta">Cargar Receta</a>
              <a type="button" onClick={logOut} href="/" >Salir</a>
            </div>
          </div>

        </Toolbar>
      </React.Fragment>
    );
  } else {
    if (props.hideLoginButton) {
      return (
        <React.Fragment>
          <Toolbar className={classes.toolbar}>
            <img class="headerLogo"
              src={CookitLogo} alt="logo" href='/' />
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
            </Typography>
          </Toolbar>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <img class="headerLogo"
            src={CookitLogo} alt="logo" href='/' />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
          </Typography>
          <Button variant="outlined" size="small" href='/login'>
            Iniciar Sesion
          </Button>
        </Toolbar>
      </React.Fragment>
    );
  }
}



export default Header;
