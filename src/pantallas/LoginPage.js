import React from "react";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";
import Header from "../components/Header2";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import BackBtnCenter from "../components/BackButtonCenter";
import Cookies from "universal-cookie";
import MainPage from "./MainPage";
import {getLogin} from "../controller/ApiController"

class LoginPage extends React.Component {
  
  cookies = new Cookies();

  constructor(props) {
    super(props);
    this.state = { username : '', pass_login : '' , user_logged_in: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);

  }

  

  async handleLoginClick() {
    console.log(this.state.username);  
    console.log( this.state.pass_login);
    const login = await getLogin(this.state.username,this.state.pass_login);
    
    if(login.rdo === 0){
      this.setState({user_logged_in : true});
      this.cookies.set("flag_login", true, { path: "/" }); 
      this.cookies.set("logged_username", this.state.username, { path: "/" });
    }else{
      window.alert("La contraseña ingresada es incorrecta.");
    }
     
  }






  render() {
    
    if(this.state.user_logged_in){
      return(
        <MainPage/>
      );
    }else{
      return (
        <html>
          <head></head>
          <body>
            <Container>
              <Header hideLoginButton={true} />
              <div>
                <div>
                  <h1 class="">Iniciar Sesion</h1>
                  <form>
                    <div>
                      <label for="uname">
                        <b>Username</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Username"
                        id="username"
                        name="uname"
                        onChange={(e) => this.setState({ username: e.target.value })}
                        required
                      ></input>
                    </div>
                    <div>
                      <label for="psw" >
                        <b>Password</b>
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Password"
                        id="password"
                        name="psw"
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,16}$"
                        minlength="8"
                        maxlength="16"
                        onChange={(e) => this.setState({ pass_login: e.target.value })}
                        required
                      ></input>
                    </div>
                    <Container>
                      <div class="container">
                        <input
                          type="button"
                          onClick={this.handleLoginClick}
                          value="Login"
                          class="logbtn"
                          justify="center"
                        ></input>
                        <Button
                          value="Register"
                          class="registerbtn"
                          disableTouchRipple={true}
                          href="/register"
                        >
                          Register
                        </Button>
                      </div>
                    </Container>
                  </form>
                  <BackBtnCenter />
                </div>
              </div>
              <Footer />
            </Container>
          </body>
        </html>
      );
    }
      
    }
  }


export default LoginPage;
