import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BusquedaConFiltros from '../components/BusquedaConFiltros.js';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';





function RecetasPorFiltroPage(props) {

    let { id } = useParams();
    
    return (
        <html>
            <head>
            </head>
            <body>
                <Container>
                    <Header hideLoginButton={true}/>
                    <BusquedaConFiltros  id={id}/>
                    <Footer/>
                </Container>
            </body>

        </html >

    );
}


export default RecetasPorFiltroPage;