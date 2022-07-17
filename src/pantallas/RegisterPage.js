import React from 'react';
import Register from '../components/Register';
import { Container } from '@material-ui/core';
import Footer from '../components/Footer';

class RegisterPage extends React.Component{


    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { data: [] };
      };



    render(){
        
        return(
            <html>
            <head>
            </head>
            <body>
                <Container>
                    <br/>
                    <Register/>
                    <Footer title='Cookit' description=''/>
                </Container>
            </body>

        </html >
        );

    }

}

export default RegisterPage;