import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link, useParams  } from 'react-router-dom';

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
    { title: 'Todas las recetas', url: '/register',id:1 },
    { title: 'Recetas faciles', url: '#',id:2 },
    { title: 'Recetas intermedias', url: '#' ,id:3},
    { title: 'Recetas dificiles', url: '#',id:4},
    { title: 'Buscar por ingredientes', url: '#' ,id:5},
    { title: 'Buscar por categoria', url: '#',id:6},
    { title: 'Buscar receta', url: '#',id:7}
];


const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        // etc...
      />
    );
  };

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>

            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                     to={'/recetas/' + `${section.id}`}
                     style={{ textDecoration: 'none' }} >
                        <Button>{section.title}</Button>
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}


export default Header;

