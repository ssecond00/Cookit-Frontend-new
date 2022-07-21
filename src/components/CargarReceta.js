import React from "react";
import { Container } from "@mui/system";
import BackBtnCenter from "./BackButtonCenter";
import { Button } from "@mui/material";
import {
  uploadImage,
  guardarImgUser,
  cargarReceta,
  cargarfotoUrl,
  cargarIngs
} from "../controller/ApiController";
import Cookies from "universal-cookie";

class CargarReceta extends React.Component {
  cookies = new Cookies();

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
      formValues: [{ name: "" }],
      receta_photo: "",
      receta_photo_name: "",
    };

    this.carga_receta_backend = this.carga_receta_backend.bind(this);
    this.agregarIngrediente = this.agregarIngrediente.bind(this);
  }

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { name: "" }],
    });
  }

  async carga_receta_backend() {
    var date = new Date();
    if(isNaN(this.state.receta_dificultad)){
      window.alert("La categoria debe ser un numero!")

    }else{
      if (this.state.receta_photo.size >= 3100000) {
        window.alert("La imagen es muy pesada! ingrese otra.");
      } else {
        let archivoOrig = this.state.receta_photo_name.slice(
          this.state.receta_photo_name.lastIndexOf(" ") + 1
        );
        let posExt = archivoOrig.indexOf(".");
        let extension = archivoOrig.substring(posExt, archivoOrig.length);
        let aleatorio = Math.random().toString().substring(2, 15);
        var filename = "img-" + aleatorio + extension;

        console.log("filename", filename);
        var cargar_fotos_Receta = await uploadImage(
          this.state.receta_photo,
          filename
        );
        var cargar_data_receta = await cargarReceta(
          this.state.receta_title,
          date.toString().substring(4, 15),
          this.cookies.get("user_logged"),
          this.state.receta_dificultad,
          5,
          this.state.receta_categoria,
          this.state.receta_pasos,
          this.state.receta_desc
        );
        console.log("ingredientes a agregar:", this.state.formValues)

        
        if (cargar_fotos_Receta.ok && cargar_data_receta.mensaje === "ok") {
          {
            let imgUser = {
              email: "mail@gmail.com",
              imagen: filename,
            };
            console.log(cargar_data_receta.recetas.data.id);
            let rdo = await guardarImgUser(
              imgUser,
              cargar_data_receta.recetas.data.id
            );
          }

      
          let cargaringredientes = await cargarIngs(cargar_data_receta.recetas.data.id, this.state.formValues );
          console.log("cargaringredientes", cargaringredientes);
          this.setState({ receta_cargada_ok: true });
        } else {
          alert(
            "Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde."
          );
        }
      }
    }
  }

  agregarIngrediente() {}

  render() {
    if (this.state.receta_cargada_ok) {
      return (
        <Container>
          <h1>Se cargo la receta correctamente!</h1>
          <BackBtnCenter />
        </Container>
      );
    } else {
      return (
        <Container>
          <h1>¿Tiene una receta innovadora?</h1>
          <form>
            <p>
              Complete el siguiente formulario para compartirla la gente de
              CookIT!
            </p>

            <label for="nombrereceta">
              <b>Nombre de la receta</b>
            </label>
            <input
              type="text"
              placeholder="Titulo de la receta"
              name="nombrereceta"
              id="nombrereceta"
              onChange={(e) => this.setState({ receta_title: e.target.value })}
              required
            ></input>

            <label for="descripcion">
              <b>Breve descripcion</b>
            </label>
            <input
              type="text"
              placeholder="Una breve descripcion acerca de su receta"
              name="descripcion"
              id="descripcion"
              onChange={(e) => this.setState({ receta_desc: e.target.value })}
              required
            ></input>

            <label for="dificultad">
              <b>Nivel de dificultad</b>
            </label>
            <input
              type="text"
              placeholder="El nivel de dificultad del 1 al 3"
              name="dificultad"
              id="dificultad"
              onChange={(e) =>
                this.setState({ receta_dificultad: e.target.value })
              }
              required
            ></input>

            <label for="categoria">
              <b>Categoria</b>
            </label>
            <input
              type="text"
              placeholder="categoria"
              name="descripcion"
              id="categoria"
              onChange={(e) =>
                this.setState({ receta_categoria: e.target.value })
              }
              required
            ></input>

            <label for="descripcion">
              <b>Pasos a seguir</b>
            </label>
            <input
              type="text"
              placeholder="Detalle los pasos a seguir para poder realizar la receta"
              name="pasos"
              id="pasos"
              onChange={(e) => this.setState({ receta_pasos: e.target.value })}
              required
            ></input>

            <div>
              <label for="descripcion">
                <b>Ingredientes</b>
              </label>
              {this.state.formValues.map((element, index) => (
                
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="Ingrese el ingrediente..."
                    value={element.name || ""}
                    onChange={(e) => this.handleChange(index, e)}
                  />
                  
              ))}
              <Button onClick={() => this.addFormFields()}>
                Agregar ingredientes
              </Button>
            </div>

            <br />
            <label for="Image">
              <b>Cargar Imagen</b>
            </label>
            <br />
            <br />
            <input
              type="file"
              name="myImage"
              onChange={(e) => {
                this.setState({ receta_photo: e.target.files[0] });
                this.setState({ receta_photo_name: e.target.value });
              }}
              required
            />
            <br />
            <br />

            <p>
              Al dar de alta una receta, estas aceptando compartirla con el
              resto de los usuarios de CookIt.
            </p>
            <input
              type="button"
              onClick={this.carga_receta_backend}
              class="registerbtnreg"
              value="Cargar receta!"
            ></input>
          </form>
          <BackBtnCenter />
        </Container>
      );
    }
  }
}

export default CargarReceta;
