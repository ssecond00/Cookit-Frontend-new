import { Grid } from "@material-ui/core";
import React from "react";
import FeaturedPost from "./FeaturedPost";
import BackButtonCenter from "../components/BackButtonCenter";
import { Button } from '@material-ui/core';
import {
  getRecetasByDificultad,
  getAllRecetas,
} from "../controller/ApiController";




class BusquedasFiltros extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    // Initializing the state
    this.state = { data: [] };
    localStorage.setItem("filter_id", props.id);
    if (props.id === "1") {
      localStorage.setItem("filter_title", "Todas las recetas");
    } else if (props.id === "2") {
      localStorage.setItem("filter_title", "Recetas faciles");
    } else if (props.id === "3") {
      localStorage.setItem("filter_title", "Recetas intermedias");
    } else if (props.id === "4") {
      localStorage.setItem("filter_title", "Recetas dificiles");
    } else if (props.id === "5") {
      localStorage.setItem("filter_title", "Buscar por ingredientes");
      this.state.busqueda = 0;
    } else if (props.id === "6") {
      localStorage.setItem("filter_title", "Buscar por categoria");
    } else if (props.id === "7") {
      localStorage.setItem("filter_title", "Buscar receta");
    }
  }

  async componentDidMount() {


    //Todas las recetas
    if (localStorage.getItem("filter_id") === "1") {
      localStorage.setItem("filter_title", "Todas las recetas");
      const recetas_filtro = await getAllRecetas();
      localStorage.setItem(
        "all_recetas",
        JSON.stringify(recetas_filtro.recetas.all)
      );
      console.log(recetas_filtro);
      console.log(JSON.parse(localStorage.getItem("all_recetas")));
    } else if (localStorage.getItem("filter_id") === "2") {
      //Recetas faciles
      localStorage.setItem("filter_title", "Recetas faciles");
      const recetas_faciles = await getRecetasByDificultad(1);
      localStorage.setItem(
        "recetas_faciles",
        JSON.stringify(recetas_faciles.recetas.recetas)
      );
    } else if (localStorage.getItem("filter_id") === "3") {
      localStorage.setItem("filter_title", "Recetas intermedias");
      //Recetas intermedias
      const recetas_intermedias = await getRecetasByDificultad(2);
      localStorage.setItem(
        "recetas_intermedias",
        JSON.stringify(recetas_intermedias.recetas.recetas)
      );
    } else if (localStorage.getItem("filter_id") === "4") {
      localStorage.setItem("filter_title", "Recetas dificiles");
      //Recetas dificiles
      const recetas_dificiles = await getRecetasByDificultad(3);
      console.log(recetas_dificiles);
      localStorage.setItem(
        "recetas_dificiles",
        JSON.stringify(recetas_dificiles.recetas.recetas)
      );
    } else if (localStorage.getItem("filter_id") === "5") {
      localStorage.setItem("filter_title", "Buscar por ingredientes");
      localStorage.setItem("resultadosBusqueda", 0);
    } else if (localStorage.getItem("filter_id") === "6") {
      localStorage.setItem("filter_title", "Buscar por categoria");
    } else if (localStorage.getItem("filter_id") === "7") {
      localStorage.setItem("filter_title", "Buscar receta");
    }

    //const recetas_filtro = await getRecetasByFiltro(localStorage.getItem("filter_id"));
    //await console.log(recetas_filtro);
  }


  


  render() {
    console.log("rendering...");
    if (localStorage.getItem("filter_id") === "1") {
      return (
        <div>
          <h1 class="tiuloBusquedaFiltro">
            {localStorage.getItem("filter_title")}
          </h1>
          <Grid container spacing={4}>
            {JSON.parse(localStorage.getItem("all_recetas")).map((post) => (
              <FeaturedPost
                title={post.title}
                description={post.description}
                date={post.date}
                stars={post.stars}
                fp={post.id}
                href={"/receta/" + post.id}
              />
            ))}
          </Grid>
        </div>
      );
    } else if (localStorage.getItem("filter_id") === "2") {
      return (
        //Recetas faciles
        <div>
          <h1 class="tiuloBusquedaFiltro">
            {localStorage.getItem("filter_title")}
          </h1>
          <Grid container spacing={4}>
            {JSON.parse(localStorage.getItem("recetas_faciles")).map((post) => (
              <FeaturedPost
                title={post.title}
                description={post.description}
                date={post.date}
                stars={post.stars}
                fp={post.id}
                href={"/receta/" + post.id}
              />
            ))}
          </Grid>
        </div>
      );
    } else if (localStorage.getItem("filter_id") === "3") {
      if (
        JSON.parse(localStorage.getItem("recetas_intermedias")).length === 0
      ) {
        return (
          <div>
            <h1 class="tiuloBusquedaFiltro">
              {localStorage.getItem("filter_title")}
            </h1>
            <br/>
            <h1 class="tiuloBusquedaFiltro">No se encontraron recetas</h1>
          </div>
        );
      } else {
        return (
          //Recetas intermedias
          <div>
            <h1 class="tiuloBusquedaFiltro">
              {localStorage.getItem("filter_title")}
            </h1>

            <Grid container spacing={4}>
              {JSON.parse(localStorage.getItem("recetas_intermedias")).map(
                (post) => (
                  <FeaturedPost
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    stars={post.stars}
                    fp={post.id}
                    href={"/receta/" + post.id}
                  />
                )
              )}
            </Grid>
          </div>
        );
      }
    } else if (localStorage.getItem("filter_id") === "4") {
      return (
        //Recetas dificiles
        <div>
          <h1 class="tiuloBusquedaFiltro">
            {localStorage.getItem("filter_title")}
          </h1>
          
          <Grid container spacing={4}>
            {JSON.parse(localStorage.getItem("recetas_dificiles")).map(
              (post) => (
                <FeaturedPost
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  stars={post.stars}
                  fp={post.id}
                  href={"/receta/" + post.id}
                />
              )
            )}
          </Grid>
        </div>
      );
    } else if (localStorage.getItem("filter_id") === "5") {
        return(
            <div>
                <div>
                    <br />
                    <h1 class='tiuloBusquedaFiltro'>Buscar por ingredientes</h1>
                    <br />
                </div>
                <div>
                    <form >
                        <label for="uname"><b>Ingrese el Ingrediente buscado</b></label>
                        <input type="text" placeholder="Ingrese aqui..." id='criterio' required></input>
                        <br />
                        <Grid
                            justify="center" // Add it here :)
                            container
                            spacing={24}
                        >
                            <Grid item>
                                <Button type="submit"  >Continuar</Button>
                            </Grid>
                        </Grid>

                    </form>
                </div>
            </div>
        ); 
    } else if (localStorage.getItem("filter_id") === "6") {
      return(
          <div>
              <div>
                  <br />
                  <h1 class='tiuloBusquedaFiltro'>Buscar por categoria</h1>
                  <br />
              </div>
              <div>
                  <form >
                      <label for="uname"><b>Ingrese la categoria</b></label>
                      <input type="text" placeholder="Ingrese aqui..." id='criterio' required></input>
                      <br />
                      <Grid
                          justify="center" // Add it here :)
                          container
                          spacing={24}
                      >
                          <Grid item>
                              <Button type="submit"  >Continuar</Button>
                          </Grid>
                      </Grid>

                  </form>
              </div>
          </div>
      )
    } else if (localStorage.getItem("filter_id") === "7") {
      return(
        <div>
            <div>
                <br />
                <h1 class='tiuloBusquedaFiltro'>Buscar receta</h1>
                <br />
            </div>
            <div>
                <form >
                    <label for="uname"><b>Ingrese el nombre de la receta</b></label>
                    <input type="text" placeholder="Ingrese aqui..." id='criterio' required></input>
                    <br />
                    <Grid
                        justify="center" // Add it here :)
                        container
                        spacing={24}
                    >
                        <Grid item>
                            <Button type="submit"  >Continuar</Button>
                        </Grid>
                    </Grid>

                </form>
            </div>
        </div>
    )
    }
  }
}

export default BusquedasFiltros;
