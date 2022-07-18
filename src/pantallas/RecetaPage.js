import React from 'react';
import Header from "../components/Header2";
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
        this.state = { loading: true };
        localStorage.setItem('rec',props.id);
        this.cargarDataReceta = this.cargarDataReceta.bind(this);
        this.cargarDataReceta();
        
        
      };




    async cargarDataReceta() {
        var ingredientes = await getIngredientesFromReceta(localStorage.getItem('rec'));
        var receta = await getRecetaById(localStorage.getItem('rec'));
        var valoracion = await getValoracionesReceta(localStorage.getItem('rec'));

        await localStorage.setItem('title',receta.receta.receta_resp[0].title);
        await localStorage.setItem('categoria',receta.receta.receta_resp[0].categoria);
        await localStorage.setItem('date',receta.receta.receta_resp[0].date);
        await localStorage.setItem('description',receta.receta.receta_resp[0].description);
        await localStorage.setItem('dificultad',receta.receta.receta_resp[0].dificultad);
        await localStorage.setItem('estrellas', valoracion.valoracion.stars);
        await localStorage.setItem('pasos_a_seguir',receta.receta.receta_resp[0].pasos_a_seguir);
        await localStorage.setItem('user',receta.receta.receta_resp[0].user);
        await localStorage.setItem('ingredientes', (ingredientes.ingredientes.ingredientes));
        if(receta.receta.status === 200){
            console.log("Llego la receta");
            this.setState({ loading: false  });
            this.render();
        }
        
        console.log("localstorage antes del render: ", localStorage.getItem('title'));
      }
   

    render(){
        if(this.state.loading){
            return (
                <h1></h1>
            )
        }else{
            
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
}


export default RecetaPage;
