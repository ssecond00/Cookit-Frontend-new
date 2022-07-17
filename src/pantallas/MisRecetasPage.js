import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Receta from '../components/Receta';
import { Container, Grid } from '@material-ui/core';
import MisRecetas from '../components/MisRecetas';

class MisRecetasPage extends React.Component{


    constructor(props) {
        super(props);
        // Initializing the state 
        
      };



    render(){
       

    return(
        <html>
                <head>
                </head>
                <body>
                    <Container>
                        <Header hideLoginButton={true}/>
                        <MisRecetas/>
                        <Footer />
                    </Container>
                </body>
            </html >
    );}

}

export default MisRecetasPage;