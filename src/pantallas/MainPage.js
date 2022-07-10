import React ,  { useState } from 'react';
import {getRecetaById} from '../controller/ApiController';
import { Container, Grid } from '@material-ui/core';
import Cookies from 'universal-cookie';
import Header from '../components/Header';
import FiltrosHome from '../components/FiltrosHome';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Footer from '../components/Footer'
import FeaturedPost from '../components/FeaturedPost';



async function getRecetaByIsFromController(id_receta){
    //console.info("Se busca la receta de id -> ",id_receta);
    //var receta = await getRecetaById(id_receta);
    return "hola solo";
    //.then(data => console.info(data));

   
}

class MainPage extends React.Component{

    cookies = new Cookies();

  
    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { data: [] };
      };


    

      
    async  componentDidMount() {
        const response = await getRecetaById(5);
        localStorage.setItem('title',response.receta.receta_resp[0].title);
        console.log(localStorage.getItem('title'));
        
      }

    

    render(){
        return(
            <html>
            <head>
                <link rel="stylesheet" href="App.css" />
            </head>
            <body>
                <Container>
                    <Header></Header>
                    <FiltrosHome></FiltrosHome>
                    <MainFeaturedPost></MainFeaturedPost>
                    <Grid container spacing={4}>
                        <FeaturedPost id='1'></FeaturedPost>
                        <FeaturedPost id='2'></FeaturedPost>
                        <FeaturedPost id='3'></FeaturedPost>
                        <FeaturedPost id='4'></FeaturedPost>
                    </Grid>
                    <Footer title='Cookit' description=''/>
                </Container>
            </body>

        </html >
        );
    };
    
    
}


export default MainPage;
