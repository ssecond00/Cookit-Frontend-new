import React ,  { useState } from 'react';
import {getRecetaById, getFeaturedPosts} from '../controller/ApiController';
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
        const fp1 = await getFeaturedPosts(2);
        const fp2 = await getFeaturedPosts(3);
        const fp3 = await getFeaturedPosts(4);
        const fp4 = await getFeaturedPosts(5);


        localStorage.setItem('fp1_title',fp1.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp1_date',fp1.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp1_description',fp1.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp1_stars',fp1.featuredPosts.featuredPosts.estrellas);  

        localStorage.setItem('fp2_title',fp2.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp2_date',fp2.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp2_description',fp2.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp2_stars',fp2.featuredPosts.featuredPosts.estrellas);  

        localStorage.setItem('fp3_title',fp3.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp3_date',fp3.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp3_description',fp3.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp3_stars',fp3.featuredPosts.featuredPosts.estrellas);  

        localStorage.setItem('fp4_title',fp4.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp4_date',fp4.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp4_description',fp4.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp4_stars',fp4.featuredPosts.featuredPosts.estrellas);  
        
        
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
                        <FeaturedPost title={localStorage.getItem('fp1_title')} date={localStorage.getItem('fp1_date')} description={localStorage.getItem('fp1_description')} stars={localStorage.getItem('fp1_stars')} ></FeaturedPost>
                        <FeaturedPost title={localStorage.getItem('fp2_title')} date={localStorage.getItem('fp2_date')} description={localStorage.getItem('fp2_description')} stars={localStorage.getItem('fp2_stars')} ></FeaturedPost>
                        <FeaturedPost title={localStorage.getItem('fp3_title')} date={localStorage.getItem('fp3_date')} description={localStorage.getItem('fp3_description')} stars={localStorage.getItem('fp3_stars')} ></FeaturedPost>
                        <FeaturedPost title={localStorage.getItem('fp4_title')} date={localStorage.getItem('fp3_date')} description={localStorage.getItem('fp4_description')} stars={localStorage.getItem('fp4_stars')} ></FeaturedPost>
                    </Grid>
                    <Footer title='Cookit' description=''/>
                </Container>
            </body>

        </html >
        );
    };
    
    
}


export default MainPage;