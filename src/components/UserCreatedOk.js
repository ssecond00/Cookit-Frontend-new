import React from "react";
import Footer from '../components/Home/footer';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BackBtnCenter from '../Home/backBtnCenter';
import { Container } from '@material-ui/core';

class UserCreatedOk extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = { data: [] };
  }

  render() {
    return (
      <html>
        <head></head>
        <body>
          <Container>
          <div>
            <br/>
            <br/>
            <br/>
            <h1 class='usuarioCreado' >Usuario creado correctamente!</h1>
            <br/>
            <br/>
            <Container>
                <div class="container">
                    <Button type="submit" class="logbtn" justify="center" disableTouchRipple={true} href='/login'>Login</Button>
                </div>
            </Container>
            <BackBtnCenter/> 

        </div>
            <Footer title="Cookit" description="" />
          </Container>
        </body>
      </html>
    );
  }
}

export default UserCreatedOk;
