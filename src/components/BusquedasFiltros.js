import { Grid } from "@material-ui/core";
import React from "react";
import FeaturedPost from "./FeaturedPost";
import Cookies from "universal-cookie";

import { Button } from "@material-ui/core";
import {
  getRecetasByDificultad,
  getAllRecetas,
  getRecetasByIngredientes,
  getRecetasByCategoria,
} from "../controller/ApiController";

class BusquedasFiltros extends React.Component {
  cookies = new Cookies();

  constructor(props) {
    super(props);
    // Initializing the state
    this.state = {
      loading: true,
      busqueda_categoria_ok: false,
      busqueda_ingrediente_ok: false,
      not_found: false,
      ingredienteBuscado: "",
      categoriaBuscada: "",
    };
    this.handleBuscarIngredientesClick = this.handleBuscarIngredientesClick.bind(this);
    this.handleBuscarCategoria = this.handleBuscarCategoria.bind(this);




    this.todasLasRecetas = this.todasLasRecetas.bind(this);
    this.recetasFaciles = this.recetasFaciles.bind(this);
    this.recetasIntermedias = this.recetasIntermedias.bind(this);
    this.recetasDificiles = this.recetasDificiles.bind(this);
    this.buscarPorIngrediente = this.buscarPorIngrediente.bind(this);
    this.buscarPorCategoria = this.buscarPorCategoria.bind(this);


    localStorage.setItem("filter_id", props.id);
    if (props.id === "1") {
      this.todasLasRecetas();
    } else if (props.id === "2") {
      this.recetasFaciles();
    } else if (props.id === "3") {
      this.recetasIntermedias();
    } else if (props.id === "4") {
      this.recetasDificiles();
    } else if (props.id === "5") {
      this.state.loading = false;
    } else if (props.id === "6") {
      this.state.loading = false;
    } else if (props.id === "7") {
      localStorage.setItem("filter_title", "Buscar receta");
    }
  }

  async componentDidMount() {
    //Todas las recetas
    if (localStorage.getItem("filter_id") === "1") {
    } else if (localStorage.getItem("filter_id") === "2") {
      //Recetas faciles
      localStorage.setItem("filter_title", "Recetas faciles");
      const recetas_faciles = await getRecetasByDificultad(1);
      localStorage.setItem(
        "recetas_faciles",
        JSON.stringify(recetas_faciles.recetas.recetas)
      );
    } else if (localStorage.getItem("filter_id") === "3") {
      
    } else if (localStorage.getItem("filter_id") === "4") {
      localStorage.setItem("filter_title", "Recetas dificiles");
      //Recetas dificiles
      const recetas_dificiles = await getRecetasByIngredientes("harina");
      console.log(recetas_dificiles);
      localStorage.setItem(
        "recetas_dificiles",
        JSON.stringify(recetas_dificiles.recetas.recetas)
      );
    } else if (localStorage.getItem("filter_id") === "5") {
    } else if (localStorage.getItem("filter_id") === "6") {
    } else if (localStorage.getItem("filter_id") === "7") {
      localStorage.setItem("filter_title", "Buscar receta");
    }

    //const recetas_filtro = await getRecetasByFiltro(localStorage.getItem("filter_id"));
    //await console.log(recetas_filtro);
  }

  async todasLasRecetas() {

    const recetas_filtro = await getAllRecetas();
    localStorage.setItem(
      "all_recetas",
      JSON.stringify(recetas_filtro.recetas.all)
    );
    if (recetas_filtro.recetas.status === 200) {
      this.setState({ loading: false });
      this.render();
    }
  }
  
  async recetasFaciles() {

      const recetas_faciles = await getRecetasByDificultad(1);
      localStorage.setItem(
        "recetas_faciles",
        JSON.stringify(recetas_faciles.recetas.recetas)
      );
    if (recetas_faciles.recetas.status === 200) {
      this.setState({ loading: false });
      this.render();
    }
  }

  async recetasIntermedias() {

  const recetas_intermedias = await getRecetasByDificultad(2);
  localStorage.setItem(
    "recetas_intermedias",
    JSON.stringify(recetas_intermedias.recetas.recetas)
  );
   
  if (recetas_intermedias.recetas.status === 200) {
    this.setState({ loading: false });
    this.render();
  }
  }

  async recetasDificiles() {
    //Recetas dificiles
    const recetas_dificiles = await getRecetasByDificultad(3);

    localStorage.setItem(
      "recetas_dificiles",
      JSON.stringify(recetas_dificiles.recetas.recetas)
    );
    if (recetas_dificiles.recetas.status === 200) {
      this.setState({ loading: false });
      this.render();
    }
    }

  async buscarPorIngrediente(){
    //Recetas ingrediente
    const recetas_ingrediente = await getRecetasByIngredientes(this.state.ingredienteBuscado);

    localStorage.setItem(
      "recetas_ingrediente",
      JSON.stringify(recetas_ingrediente.recetas.recetas)
    );
    if (recetas_ingrediente.recetas.recetas.length !== 0) {
      this.setState({ loading: false });
      this.render();
    } else{
      this.setState({ loading: false });
      this.setState({ not_found: true});
      this.render();
    }
  }

  async buscarPorCategoria(){
    //Recetas categoria  this.state.categoriaBuscada
    const recetas_categoria = await getRecetasByCategoria('snack');
    
    localStorage.setItem(
      "recetas_categoria",
      JSON.stringify(recetas_categoria.recetas.recetas)
    );

    console.log("Sss",this.state.busqueda_categoria_ok);
    if (false) {
      this.setState({ loading: false });
      this.render();
    } else{
      this.setState({ loading: false });
      this.setState({ not_found: true});
      //this.render();
    }
  }


  async handleBuscarIngredientesClick() {
    this.setState({ busqueda_ingrediente_ok :  true });
    this.buscarPorIngrediente();
  }

  async handleBuscarCategoria(){
    this.setState({ busqueda_categoria_ok : true});
    this.buscarPorCategoria();
  }

  render() {
    if (this.state.loading) {
      return <h1></h1>;
    } else {
      if (localStorage.getItem("filter_id") === "1") {
        return (
          <div>
            <h1 class="tiuloBusquedaFiltro">Todas las recetas</h1>
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
              Recetas faciles
            </h1>
            <Grid container spacing={4}>
              {JSON.parse(localStorage.getItem("recetas_faciles")).map(
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
      } else if (localStorage.getItem("filter_id") === "3") {
          return (
            //Recetas intermedias
            <div>
              <h1 class="tiuloBusquedaFiltro">
                Recetas intermedias
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
        
      } else if (localStorage.getItem("filter_id") === "4") {
        return (
          //Recetas dificiles
          <div>
            <h1 class="tiuloBusquedaFiltro">
              Recetas dificiles
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
        if (this.state.busqueda_ingrediente_ok) {
          if(this.state.not_found){
            return(
              <h1 class="tiuloBusquedaFiltro">{'No pudimos encontrar la receta! :('}</h1>
            );
          }else{
            return (
              <div>
                <h1 class="tiuloBusquedaFiltro">
                  {"Resultados para ingrediente: " +
                    this.state.ingredienteBuscado}
                </h1>
                <Grid container spacing={4}>
                  {JSON.parse(localStorage.getItem("recetas_ingrediente")).map(
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
          
        } else {
          return (
            <div>
              <div>
                <br />
                <h1 class="tiuloBusquedaFiltro">Buscar por ingredientes</h1>
                <br />
              </div>
              <div>
                <form onSubmit={this.handleBuscarIngredientesClick} onChange={(e) => this.setState({ ingredienteBuscado: e.target.value })}>
                  <label for="uname">
                    <b>Ingrese el Ingrediente buscado</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese aqui..."
                    id="criterio"
                    required
                  ></input>
                  <br />
                  <Grid
                    justify="center" // Add it here :)
                    container
                    spacing={24}
                  >
                    <Grid item>
                      <Button type="submit">Continuar</Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          );
        }
      } else if (localStorage.getItem("filter_id") === "6") {
        if (this.state.busqueda_ingrediente_ok) {
          if(this.state.not_found){
            return(
              <h1 class="tiuloBusquedaFiltro">{'No pudimos encontrar la receta! :('}</h1>
            );
          }else{
            return (
              <div>
                <h1 class="tiuloBusquedaFiltro">
                  {"Resultados para ingrediente: " +
                    this.state.ingredienteBuscado}
                </h1>
                <Grid container spacing={4}>
                  {JSON.parse(localStorage.getItem("recetas_ingrediente")).map(
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
          
        } else {
          return (
            <div>
              <div>
                <br />
                <h1 class="tiuloBusquedaFiltro">Buscar por categoria</h1>
                <br />
              </div>
              <div>
                <form onSubmit={this.handleBuscarCategoria} >
                  <label for="uname">
                    <b>Ingrese la categoria</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese aqui..."
                    id="criterio"
                    required
                  ></input>
                  <br />
                  <Grid
                    justify="center" // Add it here :)
                    container
                    spacing={24}
                  >
                    <Grid item>
                      <Button type="submit">Continuar</Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </div>
          );
        }
       
      } else if (localStorage.getItem("filter_id") === "7") {
        return (
          <div>
            <div>
              <br />
              <h1 class="tiuloBusquedaFiltro">Buscar receta</h1>
              <br />
            </div>
            <div>
              <form>
                <label for="uname">
                  <b>Ingrese el nombre de la receta</b>
                </label>
                <input
                  type="text"
                  placeholder="Ingrese aqui..."
                  id="criterio"
                  required
                ></input>
                <br />
                <Grid
                  justify="center" // Add it here :)
                  container
                  spacing={24}
                >
                  <Grid item>
                    <Button type="submit">Continuar</Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        );
      }
    }
  }
}

export default BusquedasFiltros;
