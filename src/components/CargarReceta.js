import React from "react";
import { Container } from "@mui/system";
import BackBtnCenter from "./BackButtonCenter";
import { Button } from "@mui/material";

class CargarReceta extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = { 
        receta_cargada_ok: false,
        receta_title: "",
        receta_desc: "",
        receta_dificultad: "",
        receta_categoria: "",
        receta_pasos: "",
        receta_ingredientes: [],
        receta_photo: "",

    };


    this.carga_receta_backend = this.carga_receta_backend.bind(this);
    this.agregarIngrediente = this.agregarIngrediente.bind(this);

    
  }


   carga_receta_backend(){
    console.log(this.state);
    this.setState({ receta_cargada_ok: true})
    this.render()

  }

  agregarIngrediente(){

  }


  render() {
    if(this.state.receta_cargada_ok){
        return(
            <Container>
                <h1>Se cargo la receta correctamente!</h1>
                <BackBtnCenter />
            </Container>
            
        );
    }else{
        console.log(this.state.receta_cargada_ok);
        return (
            <Container>
              <h1>¿Tiene una receta innovadora?</h1>
                      <form onSubmit={this.carga_receta_backend}>
                          <p>Complete el siguiente formulario para compartirla la gente de CookIT!</p>
      
                          <label for="nombrereceta"><b>Nombre de la receta</b></label>
                          <input type="text" placeholder="Titulo de la receta" name="nombrereceta" id="nombrereceta"  onChange={(e) => this.setState({ receta_title: e.target.value })} required></input>
      
                          <label for="descripcion"><b>Breve descripcion</b></label>
                          <input type="text" placeholder="Una breve descripcion acerca de su receta" name="descripcion" id="descripcion" onChange={(e) => this.setState({ receta_desc: e.target.value })} required></input>
      
                          <label for="dificultad"><b>Nivel de dificultad</b></label>
                          <input type="text" placeholder="El nivel de dificultad del 1 al 3" name="dificultad" id="dificultad" onChange={(e) => this.setState({ receta_dificultad: e.target.value })} required></input>
      
                          <label for="categoria"><b>Categoria</b></label>
                          <input type="text" placeholder="categoria" name="descripcion" id="categoria" onChange={(e) => this.setState({ receta_categoria: e.target.value })} required></input>
      
                          <label for="descripcion"><b>Pasos a seguir</b></label>
                          <input type="text" placeholder="Detalle los pasos a seguir para poder realizar la receta" name="pasos" id="pasos" onChange={(e) => this.setState({ receta_pasos: e.target.value })} required></input>
      
                          <div>
      
                              <label for="descripcion"><b>Ingredientes</b></label>
                              
                              <Button>Agregar ingredientes</Button>
      
                          </div>
      
                          <br/>
                          <label for="Image"><b>Cargar Imagen</b></label>
                          <br/>
                          <br/>
                          <input type="file" name="myImage" onChange={(e) => this.setState({ receta_photo: e.target.value })}  required/>
                          <br/>
                          <br/>
      
      
                          <p>Al dar de alta una receta, estas aceptando compartirla con el resto de los usuarios de CookIt.</p>
                          <input type="submit" class="registerbtnreg" value="Cargar receta!" ></input>
                      </form>
                      <BackBtnCenter />
                  
            </Container>
          );
    }
    
  }
}

export default CargarReceta;
