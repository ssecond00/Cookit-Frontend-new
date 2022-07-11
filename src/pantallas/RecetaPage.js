import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Receta from '../components/Receta';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {getRecetaById,getIngredientesFromReceta, getValoracionesReceta} from '../controller/ApiController';


class RecetaPage extends React.Component {


    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { data: [] };
        localStorage.setItem('rec',props.id);
      };

    async componentDidMount() {
        
        const ingredientes = await getIngredientesFromReceta(2);
        var receta = await getRecetaById(localStorage.getItem('rec'));
        var valoracion = await getValoracionesReceta(localStorage.getItem('rec'));

        localStorage.setItem('title',receta.receta.receta_resp[0].title);
        localStorage.setItem('categoria',receta.receta.receta_resp[0].categoria);
        localStorage.setItem('date',receta.receta.receta_resp[0].date);
        localStorage.setItem('description',receta.receta.receta_resp[0].description);
        localStorage.setItem('dificultad',receta.receta.receta_resp[0].dificultad);
        localStorage.setItem('estrellas', valoracion.valoracion.stars);
        localStorage.setItem('pasos_a_seguir',receta.receta.receta_resp[0].pasos_a_seguir);
        localStorage.setItem('user',receta.receta.receta_resp[0].user);
        localStorage.setItem('ingredientes', (ingredientes.ingredientes.ingredientes));
        

        console.log(localStorage.getItem('title'));
       
        ;
    }
   

    render(){
        return (
            <html>
                <head>
                </head>
                <body>
                    <Container>
                        <Header hideLoginButton={true}/>
                        <Receta
                        title={localStorage.getItem('title')}
                        description={localStorage.getItem('description')}
                        date={localStorage.getItem('date')}
                        user={localStorage.getItem('user')}
                        categoria={localStorage.getItem('categoria')}
                        dificultad={localStorage.getItem('dificultad')}
                        estrellas={localStorage.getItem('estrellas')}
                        ingredientes={localStorage.getItem('ingredientes').split(',')}
                        image=""
                        pasos_a_seguir={localStorage.getItem('pasos_a_seguir')}
                        ></Receta>
                        <Footer />
                    </Container>
                </body>
            </html >
    
        );
    }
}

export default RecetaPage;
