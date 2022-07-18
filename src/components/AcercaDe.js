import React from "react";
import { Container, Grid } from "@material-ui/core";
import Header from "../components/Header2";
import BackButtonCenter from "./BackButtonCenter";
import Footer from "../components/Footer";

function AcercaDe() {
  return (
    <html>
      <head></head>
      <body>
        <Container>
          <Header hideLoginButton={true} />
          <div>
            <h1 class="recetaHeader">Acerca de CookIT</h1>
            <h2 class="recetaDescription">
              Si el mundo de la cocina te fascina, en CookIT descubrirás una
              infinidad de recetas riquísimas. En nuestra web encontrarás todo
              tipo de recetas de cocina capaces de sorprender a los paladares
              más exquisitos. Contamos con una comunidad de mas de 5000
              usuarios, que te ayudara a elaborar desde el plato mas fácil al
              mas difícil. Entradas, todo tipo de ensaladas, pastas, sopas,
              arroces, carnes, pescados, repostería... CookIT sorprende con una
              gran variedad de recetas de cocina fáciles a la vez que gustosas,
              que te dejarán sin palabras. Encontrarás recetas sanas de varias
              cocinas del mundo. En nuestra web podrás realizar todas las
              funciones de usuario posibles. Tendrás la oportunidad de guardar
              tus recetas favoritas, y también calificarlas. Si no recordas tu
              contraseña no te preocupes... es muy simple de recuperarla!
            </h2>
            <br />
            <BackButtonCenter />
          </div>
          <Footer title="Cookit" description="" />
        </Container>
      </body>
    </html>
  );
}

export default AcercaDe;
