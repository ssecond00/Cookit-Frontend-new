import React from 'react';
import {getFeaturedPosts, getFp} from '../controller/ApiController';
import { Container, Grid } from '@material-ui/core';
import Cookies from 'universal-cookie';
import Header2 from '../components/Header2';
import FiltrosHome from '../components/FiltrosHome';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Footer from '../components/Footer'
import FeaturedPost from '../components/FeaturedPost';



class MainPage extends React.Component{

    cookies = new Cookies();

  
    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { data: [] };
        this.cargarData = this.cargarData.bind(this);

        this.cargarData();

      };


    async cargarData(){
        var fp = await getFp();

       

        const fp1 = await getFeaturedPosts(fp.fp.data[0]);
        const fp2 = await getFeaturedPosts(fp.fp.data[1]);
        const fp3 = await getFeaturedPosts(fp.fp.data[2]);
        const fp4 = await getFeaturedPosts(fp.fp.data[3]);



        localStorage.setItem('fp1',fp.fp.data[0] );
        localStorage.setItem('fp2',fp.fp.data[1] );
        localStorage.setItem('fp3',fp.fp.data[2] );
        localStorage.setItem('fp4',fp.fp.data[3] );

        localStorage.setItem('fp1_title',fp1.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp1_date',fp1.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp1_description',fp1.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp1_stars',fp1.featuredPosts.featuredPosts.estrellas);  
        localStorage.setItem('fp1_foto',fp1.featuredPosts.featuredPosts.foto[0].imagen);  

        localStorage.setItem('fp2_title',fp2.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp2_date',fp2.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp2_description',fp2.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp2_stars',fp2.featuredPosts.featuredPosts.estrellas);  
        localStorage.setItem('fp2_foto',fp2.featuredPosts.featuredPosts.foto[0].imagen); 

        localStorage.setItem('fp3_title',fp3.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp3_date',fp3.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp3_description',fp3.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp3_stars',fp3.featuredPosts.featuredPosts.estrellas);  
        localStorage.setItem('fp3_foto',fp3.featuredPosts.featuredPosts.foto[0].imagen); 
        
        localStorage.setItem('fp4_title',fp4.featuredPosts.featuredPosts.titulo_receta);
        localStorage.setItem('fp4_date',fp4.featuredPosts.featuredPosts.date);
        localStorage.setItem('fp4_description',fp4.featuredPosts.featuredPosts.description);
        localStorage.setItem('fp4_stars',fp4.featuredPosts.featuredPosts.estrellas);  
        localStorage.setItem('fp4_foto', fp4.featuredPosts.featuredPosts.foto[0].imagen); 
        

        this.render()
    }
    


    

    render(){
        

        return(
            <html>
            <head>
                <link rel="stylesheet" href="App.css" />
            </head>
            <body>
                <Container>
                    <Header2></Header2>
                    <FiltrosHome></FiltrosHome>
                    <MainFeaturedPost></MainFeaturedPost>
                    <Grid container spacing={4}>
                        <FeaturedPost fp={localStorage.getItem('fp1')} title={localStorage.getItem('fp1_title')} date={localStorage.getItem('fp1_date')} description={localStorage.getItem('fp1_description')} stars={localStorage.getItem('fp1_stars')} foto={localStorage.getItem('fp1_foto')} ></FeaturedPost>
                        <FeaturedPost fp={localStorage.getItem('fp2')} title={localStorage.getItem('fp2_title')} date={localStorage.getItem('fp2_date')} description={localStorage.getItem('fp2_description')} stars={localStorage.getItem('fp2_stars')} foto={localStorage.getItem('fp2_foto')}></FeaturedPost>
                        <FeaturedPost fp={localStorage.getItem('fp3')} title={localStorage.getItem('fp3_title')} date={localStorage.getItem('fp3_date')} description={localStorage.getItem('fp3_description')} stars={localStorage.getItem('fp3_stars')} foto={localStorage.getItem('fp3_foto')}></FeaturedPost>
                        <FeaturedPost fp={localStorage.getItem('fp4')} title={localStorage.getItem('fp4_title')} date={localStorage.getItem('fp3_date')} description={localStorage.getItem('fp4_description')} stars={localStorage.getItem('fp4_stars')} foto={localStorage.getItem('fp4_foto')}></FeaturedPost>
                    </Grid>
                    <Footer title='Cookit' description=''/>
                </Container>
            </body>

        </html >
        );
    };
    
    
}


export default MainPage;
