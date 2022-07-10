import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ValorarReceta from "../components/ValorarReceta";
import FiveStar from "../components/FiveStar";
import BackButton from "../components/BackButton";
import Cookies from 'universal-cookie';




export default function Receta(props) {
  const cookies = new Cookies();


  if (cookies.get('userLoggedIn') === '1') {
    return (<div>
      <h1 class='recetaHeader'>{props.title}</h1>
      <h2 class='recetaDescription' >{props.description}</h2>
      <h2 class='recetaFecha'>{props.date}   -    Por {props.user}</h2>
      <br/>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h3 class='recetaLabel'>Categotia: {props.categoria}</h3>
          <h3 class='recetaLabel'>Nivel de dificultad: {props.dificultad}</h3>
          <div>
            <h1>Valoraciones:</h1>
            <FiveStar stars={props.estrellas} />
          </div>
          <br />
          <h3 class='recetaLabel'>Ingredientes: </h3>
          <ul>{
            props.ingredientes.map((ing) => {;
              return (
                <li class='itemsListaReceta'>{ing}</li>
              )
            })

          }
          </ul>
        </Grid>
        <Grid item xs={6}>
          <img src={props.image} />
        </Grid>
      </Grid>
      <hr />
      <h3 class='recetaLabel'>Procedimiento: </h3>
      <p class='recetaPasoAPaso'>{
        props.pasos_a_seguir
      }
      </p>
      <Grid container spacing={4}>
      </Grid>
      <br />
      <br />



      <div>
        <h1>Valorar receta:</h1>
        <ValorarReceta />
      </div>


      <BackButton />
    </div>);
  } else {
    return (
      <div>
        <h1 class='recetaHeader'>{props.title}</h1>
        <h2 class='recetaDescription' >{props.description}</h2>
        <h2 class='recetaFecha'>{props.date}   -    Por {props.user}</h2>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3 class='recetaLabel'>Categotia: {props.categoria}</h3>
            <h3 class='recetaLabel'>Nivel de dificultad: {props.dificultad}</h3>
            <div>
              <h1>Valoraciones:</h1>
              <FiveStar stars={props.estrellas} />
            </div>
            <br />
            <h3 class='recetaLabel'>Ingredientes: </h3>
            <ul>{
              props.ingredientes.map((ing) => {
                return (
                  <li class='itemsListaReceta'>{ing}</li>
                )
              })

            }
            </ul>
          </Grid>
          <Grid item xs={4}>
            <img src={props.image} />
          </Grid>
        </Grid>
        <hr />
        <h3 class='recetaLabel'>Procedimiento: </h3>
        <p class='recetaPasoAPaso'>{
          props.pasos_a_seguir
        }
        </p>
        <Grid container spacing={4}>
        </Grid>
        <br />
        <br />
        <BackButton />
      </div>
    );
  }
}