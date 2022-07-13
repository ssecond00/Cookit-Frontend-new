import React from "react";
import Footer from "../components/Footer";
import { Container } from "@material-ui/core";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import BackBtnCenter from "../components/BackButtonCenter";
import Cookies from "universal-cookie";
import MainPage from "./MainPage";

class LoginPage extends React.Component {
  cookies = new Cookies();

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  async componentDidMount() {}

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
    this.cookies.set("userLoggedIn", 1, { path: "/" });
  }



  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (isLoggedIn) {
      return <MainPage />;
    } else {
      return (
        <html>
          <head></head>
          <body>
            <Container>
              <Header hideLoginButton={true} />
              <div>
                <div>
                  <h1 class="">Iniciar Sesion</h1>
                  <form onSubmit={this.handleLoginClick}>
                    <div>
                      <label for="uname">
                        <b>Username</b>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Username"
                        id="username"
                        name="uname"
                        required
                      ></input>
                    </div>
                    <div>
                      <label for="psw">
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
                        required
                      ></input>
                    </div>
                    <Container>
                      <div class="container">
                        <input
                          type="submit"
                          value="Login"
                          class="logbtn"
                          justify="center"
                          disableTouchRipple={true}
                        ></input>
                        <Button
                          type="submit"
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
