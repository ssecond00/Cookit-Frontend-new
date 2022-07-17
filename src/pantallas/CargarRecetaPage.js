import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButtonCenter from "../components/BackButtonCenter";
import MiPerfil from "../components/MiPerfil";
import { Container } from "@material-ui/core";
import CargarReceta from "../components/CargarReceta";

class CargarRecetaPage extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = { data: [] };
  }

  render() {
    return (
      <html>
        <head></head>
        <body>
          <Container>
            <Header hideLoginButton={true} />
            <CargarReceta/>
            <Footer />
          </Container>
        </body>
      </html>
    );
  }
}

export default CargarRecetaPage;
