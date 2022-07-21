import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import BackButtonCenter from "./BackButtonCenter";
import Cookies from "universal-cookie";
import {updateUsername, updatePassword} from "../controller/ApiController";

class MiPerfil extends React.Component {

  cookies = new Cookies();

  constructor(props) {
    super(props);
    // Initializing the state
    this.state = {
      edit_pass_ok: false,
      edit_username_ok: false,
      username: this.cookies.get('user_logged'),
      username_nuevo: "",
      loading: false,
      user_editado_correctamente: false,
      pass_editada_correctamente: false,
      new_pass1 : "",
      new_pass2: ""
    };
    this.editUser = this.editUser.bind(this);
    this.editPass = this.editPass.bind(this);
    this.editar_usuario_backend = this.editar_usuario_backend.bind(this);
    this.editar_pass_backend = this.editar_pass_backend.bind(this);
    this.handleEditUser_backend = this.handleEditUser_backend.bind(this);
    
  }

  editUser() {
    this.setState({ edit_username_ok: true });
    this.render();
  }

  async handleEditUser_backend(){
    console.log("Username nuevo", this.state.username_nuevo);
    console.log("Username viejo", this.state.username);
    var edit = await updateUsername(this.state.username, this.state.username_nuevo);
    if (edit.rdo === 0){
      this.cookies.set("user_logged", this.state.username_nuevo, { path: "/" });
    }
  }

  editPass() {
    this.setState({ edit_pass_ok: true });
    //editPass
    this.render();
  }

  editar_usuario_backend() {
    this.setState({ user_editado_correctamente: true });
    this.cookies.set('username', this.state.username, { path: '/' });
    this.render();
  }

  editar_pass_backend(){
    if(this.state.new_pass1 === this.state.new_pass2){
        this.setState({ pass_editada_correctamente: true})

    }else{
        window.alert("Las contraseñas deben coincidir.");
    }
    this.render();
  }

  render() {
    if (this.state.edit_username_ok) {
      if (this.state.user_editado_correctamente) {
        return (
          <Container>
            <h1>Se edito el usuario correctamente!</h1>
            <h2>{"Nuevo username: " + this.state.username_nuevo}</h2>
            <br></br>
            <BackButtonCenter />
          </Container>
        );
      } else {
        return (
          <Container>
            <div>
              <h1>Modificar username</h1>
              <br />
              <form onSubmit={this.editar_usuario_backend}>
                <Grid container>
                  <Grid item xs={4}>
                    {" "}
                    <label for="username">
                      <b>Ingrese un nuevo nombre de usuario: </b>
                    </label>
                  </Grid>
                  <Grid item xs={7}>
                    {" "}
                    <input
                      class="inputEditPage"
                      type="text"
                      placeholder="Ingrese un nuevo nombre de usuario"
                      id="username"
                      name="uname"
                      onChange={(e) =>
                        this.setState({ username_nuevo: e.target.value })
                      }
                      required
                    ></input>
                  </Grid>
                  <br />
                  <Button type="submit" onClick={this.handleEditUser_backend} disableTouchRipple={true} alignItems="">
                    Confirmar
                  </Button>
                </Grid>
              </form>
              <div>
                <br />
                <Grid
                  justify="center" // Add it here :)
                  container
                  spacing={24}
                >
                  <Grid item>
                    <Typography type="title" color="inherit"></Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      disableTouchRipple={true}
                      alignItems=""
                      href="/mi_perfil"
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
                <br />
              </div>
            </div>
          </Container>
        );
      }
    } else if (this.state.edit_pass_ok) {
      if (this.state.pass_editada_correctamente) {
        return (
          <Container>
            <h1>Se edito la contraseña correctamente!</h1>
            <br></br>
            <BackButtonCenter />
          </Container>
        );
      } else {
        return (
          <Container>
            <div>
              <form onSubmit={this.editar_pass_backend}>
                <div>
                  <h2>Ingrese su Nueva contraseña</h2>
                  <label for="new password">
                    <b></b>
                  </label>
                  <input
                    type="password"
                    placeholder="Ingrese su nueva contraseña"
                    id="password"
                    name="psw"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,16}$"
                    minlength="8"
                    maxlength="16"
                    onChange={(e) =>
                        this.setState({ new_pass1: e.target.value })
                      }
                    required
                  ></input>
                </div>
                <div>
                  <h2>Repita su Nueva contraseña</h2>
                  <label for="new password">
                    <b></b>
                  </label>
                  <input
                    type="password"
                    placeholder="Ingrese su nueva contraseña"
                    id="confirm_password"
                    name="psw"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,16}$"
                    minlength="8"
                    maxlength="16"
                    onChange={(e) =>
                        this.setState({ new_pass2: e.target.value })
                      }
                    required
                  ></input>
                </div>
                <div class="container">
                  <br />
                  <input
                    class="inputButton"
                    type="submit"
                    
                    value="REESTABLECER CONTRASEÑA"
                  ></input>
                </div>
              </form>
              <div>
                <br />
                <Grid
                  justify="center" // Add it here :)
                  container
                  spacing={24}
                >
                  <Grid item>
                    <Typography type="title" color="inherit"></Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      disableTouchRipple={true}
                      alignItems=""
                      href="/mi_perfil"
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
                <br />
              </div>
            </div>
          </Container>
        );
      }
    } else {
      return (
        <Container>
          <div>
            <h1>Datos de usuario</h1>
            <br />

            <div>
              <br />
              <form onSubmit={this.editUser}>
                <div>
                  <Grid container>
                    <Grid item xs={3}>
                      <label for="username">
                        <b>Usuario:</b> {this.state.username}
                      </label>
                    </Grid>
                    <Grid item xs={1}>
                      {" "}
                      <Button
                        type="submit"
                        disableTouchRipple={true}
                        alignItems=""
                      >
                        Editar
                      </Button>{" "}
                    </Grid>
                  </Grid>
                </div>
              </form>
              <br />
              <form onSubmit={this.editPass}>
                <div class="container">
                  <Button type="submit" disableTouchRipple={true} alignItems="">
                    Cambiar contraseña
                  </Button>
                </div>
              </form>
            </div>

            <BackButtonCenter />
          </div>
        </Container>
      );
    }
  }
}

export default MiPerfil;
