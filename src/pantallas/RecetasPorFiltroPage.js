import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BusquedsFiltros from "../components/BusquedasFiltros";
import BackButtonCenter from "../components/BackButtonCenter";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";

function RecetasPorFiltroPage(props) {
  let { id } = useParams();

  return (
    <html>
      <head></head>
      <body>
        <Container>
          <Header hideLoginButton={true} />
          <BusquedsFiltros id={id} />
          <br></br>
          <BackButtonCenter/>
          <Footer />
        </Container>
      </body>
    </html>
  );
}

export default RecetasPorFiltroPage;
