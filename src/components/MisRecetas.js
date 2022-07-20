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
import {getRecetasByUsername, eliminarReceta} from '../controller/ApiController'

class MisRecetas extends React.Component {

  
  cookies = new Cookies();

  constructor(props) {
    super(props);
    this.state = {
      editar_receta_ok: false,
      eliminar_receta_ok: false,
      id_receta_a_editar: 0,
      id_receta_a_eliminar: 0,
      recetas_user: []
    };
    this.cargarRecetasFromUser = this.cargarRecetasFromUser.bind(this);
    this.editReceta = this.editReceta.bind(this);
    this.deleteReceta = this.deleteReceta.bind(this);
    this.updateReceta_back = this.updateReceta_back.bind(this);


    this.cargarRecetasFromUser();

  }

  editReceta(){
    this.setState({ editar_receta_ok : true})
    this.render();
  }

  async deleteReceta(id){
    var eliminar = await eliminarReceta(id);
    if(eliminar.rdo === 0){

      this.setState({  eliminar_receta_ok : true})
      this.render();
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
                    <h2>En caso que no quiera modificar algun campo, dejelo vacio y el sistema no modificara su contenido.</h2>
                    <br />
                    <form onSubmit={this.updateReceta_back}>
                        <label for="nombrereceta"><b>Nombre de la receta</b></label>
                        <input type="text"  name="nombrereceta" id="nombrereceta" value={"asdasdasd"}></input>

                        <label for="descripcion"><b>Breve descripcion</b></label>
                        <input type="text"  name="descripcion" id="descripcion" ></input>

                        <label for="dificultad"><b>Nivel de dificultad</b></label>
                        <input type="text"  name="dificultad" id="dificultad"></input>


                        <label for="categoria"><b>Categoria</b></label>
                        <input type="text"  name="descripcion" id="categoria" ></input>

                        <label for="descripcion"><b>Pasos a seguir</b></label>
                        <input type="text"  name="pasos" id="pasos" ></input>


                        <label for="descripcion"><b>Ingredientes</b></label>
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
        console.log(this.state.recetas_user)
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
                                                        <FaEdit  size="30%" onClick={this.editReceta}/>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <FaTrash  size="25%"  onClick={() => this.deleteReceta(r.id)}  />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </div>                            
                                    </Card>
                                </CardActionArea>
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
