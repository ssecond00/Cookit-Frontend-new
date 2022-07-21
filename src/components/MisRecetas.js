import { Container } from "@mui/system";
import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BackButtonCenter from '../components/BackButtonCenter';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import FiveStar from '../components/FiveStar';
import { FaEdit, FaTrash } from "react-icons/fa";
import Cookies from "universal-cookie";
import {getRecetasByUsername, eliminarReceta, getRecetaById, updateReceta} from '../controller/ApiController'

class MisRecetas extends React.Component {

  
  cookies = new Cookies();

  constructor(props) {
    super(props);
    this.state = {
      editar_receta_ok: false,
      eliminar_receta_ok: false,
      id_receta_a_editar: 0,
      id_receta_a_eliminar: 0,
      receta_title: "",
      receta_desc: "",
      receta_dif: 0,
      receta_cat: "",
      receta_pasos: "",
      receta_ingredientes: [],

      recetas_user: []
    };
    this.cargarRecetasFromUser = this.cargarRecetasFromUser.bind(this);
    this.editReceta = this.editReceta.bind(this);
    this.deleteReceta = this.deleteReceta.bind(this);
    this.updateReceta_back = this.updateReceta_back.bind(this);
    this.handleEditarRecetaBackend = this.handleEditarRecetaBackend.bind(this);

    

    this.cargarRecetasFromUser();

  }

    async editReceta(id){
    var receta = await getRecetaById(id);
    if(receta.rdo === 0){
      console.log(receta.receta.receta_resp[0])
      this.setState({id_receta_a_editar: receta.receta.receta_resp[0].id,  receta_title: receta.receta.receta_resp[0].title , receta_desc: receta.receta.receta_resp[0].description ,   receta_dif: receta.receta.receta_resp[0].dificultad, 
        receta_cat: receta.receta.receta_resp[0].categoria ,   receta_pasos: receta.receta.receta_resp[0].pasos_a_seguir })
      this.setState({ editar_receta_ok : true})
      this.render()
    };
  }

  async handleEditarRecetaBackend(){
    if (isNaN(this.state.receta_dif)){
      window.alert("La categoria debe ser un numero!")
    }else{
        console.log(this.state.id_receta_a_editar);
        var editar = await updateReceta(this.state.id_receta_a_editar, this.state.receta_title,  Date().toLocaleString().substring(0,15), this.cookies.get("user_logged"), this.state.receta_dif, 0, this.state.receta_cat, this.state.receta_pasos, this.state.receta_desc );
        if(editar.rdo === 0 ){
          console.log(editar);
          this.setState({ editar_receta_ok: false });
          this.cargarRecetasFromUser();
        }
    }
  }

  async deleteReceta(id){
    var eliminar = await eliminarReceta(id);
    if(eliminar.rdo === 0){

      this.setState({  eliminar_receta_ok : true})
      this.cargarRecetasFromUser();
    }
    
  }

  async cargarRecetasFromUser(){
    var recetas = await getRecetasByUsername(this.cookies.get("user_logged"));
    this.setState({ recetas_user : recetas.recetas.recetas });
    
    this.render()
  }

  async updateReceta_back(){

  }

  render() {
    if (this.state.editar_receta_ok) {
        return(
            <Container>
                <div>
                    <h1>Edite su receta</h1>
                    <h2>En caso que no quierer modificar algun campo, dejelo vacio y el sistema no modificara su contenido.</h2>
                    <br />
                    <form >
                        <label for="nombrereceta"><b>Nombre de la receta</b></label>
                        <input type="text"  name="nombrereceta" id="nombrereceta" value={this.state.receta_title} onChange={(e) => this.setState({ receta_title: e.target.value })}></input>

                        <label for="descripcion"><b>Breve descripcion</b></label>
                        <input type="text"  name="descripcion" id="descripcion" value={this.state.receta_desc} onChange={(e) => this.setState({ receta_desc: e.target.value })}></input>

                        <label for="dificultad"><b>Nivel de dificultad</b></label>
                        <input type="text"  name="dificultad" id="dificultad" value={this.state.receta_dif} onChange={(e) => this.setState({ receta_dif: e.target.value })}></input>


                        <label for="categoria"><b>Categoria</b></label>
                        <input type="text"  name="descripcion" id="categoria" pattern="[0-9]" value={this.state.receta_cat} onChange={(e) => this.setState({ receta_cat: e.target.value })} ></input>

                        <label for="descripcion"><b>Pasos a seguir</b></label>
                        <input type="text"  name="pasos" id="pasos" value={this.state.receta_pasos} onChange={(e) => this.setState({ receta_pasos: e.target.value })} ></input>


                        <label for="descripcion"><b>Ingredientes</b></label>

                        <div class="container" >
                            <input type="button" class="registerbtn" disableTouchRipple={true}  onClick={this.handleEditarRecetaBackend} value="Editar receta" ></input>
                        </div>
                    </form>
                </div>
                <BackButtonCenter/>
            </Container>
        );
    } else if (this.state.eliminar_receta_ok) {
        return(
            <Container>
                <h1>Se elimino la receta correctamente!</h1>
                <BackButtonCenter/>
            </Container>

        );
    } else {
        if(this.state.recetas_user.length !== 0){
            return (
                <Container>
                  <div>
                    <main>
                      <Box>
                        <Container maxWidth="sm">
                          <br />
                          <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                          >
                            Mis recetas
                          </Typography>
                          <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                          >
                            En esta seccion podras ver, editar o eliminar tus recetas
                            creadas.
                          </Typography>
                        </Container>
                      </Box>
                      <br />
                      <Container>
                        <Grid item xs={9} md={7}  >
                            {
                                this.state.recetas_user.map( r =>(
                                  <div>
                                  <br></br>
                                    <CardActionArea component="a"  >
                                    <Card  >
                                        <div>
                                            <CardContent  href={'/receta/'+r.id}>
                                                <Typography component="h2" variant="h5">{r.title}</Typography>
                                                <Typography variant="subtitle1" color="textSecondary">{r.date}</Typography>
                                                <Typography variant="subtitle1" paragraph>{r.description}</Typography>
                                                <FiveStar stars={(r.estrellas).toString()} />
                                                <br />
                                                <Grid container spacing={4} direction="line" alignItems="center" justifyContent="center">
                                                    <Grid item xs={4}>
                                                        <FaEdit  size="30%" onClick={() => this.editReceta(r.id)}/>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <FaTrash  size="25%"  onClick={() => this.deleteReceta(r.id)}  />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </div>                            
                                    </Card>
                                </CardActionArea>
                                <br></br>
                                </div>
                                ))
                            }
                           
                        </Grid>
                      </Container>
                    </main>
                    <br />
                    <br />
                    <BackButtonCenter />
                  </div>
                </Container>
              );
        }else{
          return(
            <h1>No posee recetas!</h1>
          );
        }
    }
  }
}

export default MisRecetas;
