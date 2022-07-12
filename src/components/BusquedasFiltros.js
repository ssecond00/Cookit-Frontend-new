import { Grid } from "@material-ui/core";
import React from "react";
import FeaturedPost from "./FeaturedPost";
import { getRecetasByFiltro, getAllRecetas } from "../controller/ApiController";

class BusquedasFiltros extends React.Component {
  constructor(props) {
    super(props);
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
    } else if (props.id === "6") {
      localStorage.setItem("filter_title", "Buscar por categoria");
    } else if (props.id === "7") {
      localStorage.setItem("filter_title", "Buscar receta");
    }
  }

  async componentDidMount() {
    console.log(localStorage.getItem("filter_id"));

    if (localStorage.getItem("filter_id") === "1") {
      localStorage.setItem("filter_title", "Todas las recetas");
      const recetas_filtro = await getAllRecetas();
      localStorage.setItem(
        "all_recetas",
        JSON.stringify(recetas_filtro.recetas.all)
      );
      console.log(JSON.parse(localStorage.getItem("all_recetas")));
    } else if (localStorage.getItem("filter_id") === "2") {
      localStorage.setItem("filter_title", "Recetas faciles");
    } else if (localStorage.getItem("filter_id") === "3") {
      localStorage.setItem("filter_title", "Recetas intermedias");
    } else if (localStorage.getItem("filter_id") === "4") {
      localStorage.setItem("filter_title", "Recetas dificiles");
    } else if (localStorage.getItem("filter_id") === "5") {
      localStorage.setItem("filter_title", "Buscar por ingredientes");
    } else if (localStorage.getItem("filter_id") === "6") {
      localStorage.setItem("filter_title", "Buscar por categoria");
    } else if (localStorage.getItem("filter_id") === "7") {
      localStorage.setItem("filter_title", "Buscar receta");
    }

    //const recetas_filtro = await getRecetasByFiltro(localStorage.getItem("filter_id"));
    //await console.log(recetas_filtro);
  }

  render() {
    if (localStorage.getItem("filter_id") === "1") {
      return (
        <div>
          <h1 class="tiuloBusquedaFiltro">
            {localStorage.getItem("filter_title")}
          </h1>
          <Grid container spacing={4}>
            {(JSON.parse(localStorage.getItem("all_recetas"))).map((post) => (
              <FeaturedPost
              title={post.title}
              description={post.description}
              date={post.date}
              stars={post.stars}
              fp={post.id}
              href={"/receta/"+post.id}
              />
            ))}
            
          </Grid>
        </div>
      );
    } else if (localStorage.getItem("filter_id") === "2") {
    } else if (localStorage.getItem("filter_id") === "3") {
    } else if (localStorage.getItem("filter_id") === "4") {
    } else if (localStorage.getItem("filter_id") === "5") {
    } else if (localStorage.getItem("filter_id") === "6") {
    } else if (localStorage.getItem("filter_id") === "7") {
    }
  }
}

export default BusquedasFiltros;
