import React from 'react';
import BackBtnCenter from '../components/BackButtonCenter';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Register extends React.Component{


    constructor(props) {
        super(props);
        // Initializing the state 
        this.state = { username: '', email:'', phone_number:'', pass1:'' , pass2 : '', user_created_ok: false};
        this.validarDatos = this.validarDatos.bind(this);

      };

    async validarDatos(){
        if (this.state.pass1 === this.state.pass2){
            this.setState({ user_created_ok: true });

        } else{
            window.alert("Las contraseñas deben coincidir.");
        }

    }

    render(){
        if(this.state.user_created_ok){
            return(
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
            );
        }else{
            return(
                <div>
                <h1>Cree su cuenta Cookit!</h1>
                <p>Complete el siguiente formulario para iniciar sesion!</p>
                <form onSubmit={this.validarDatos}>
                    <div>
                        <label for="username"><b>Nombre De Usuario</b></label>
                        <input type="text" placeholder="Indique su Nombre De Usuario" name="username" id="username" onChange={(e) => this.setState({ username: e.target.value })} required></input>
                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Ingrese un email valido" id='emailInput' onChange={(e) => this.setState({ email: e.target.value })} required></input>
                        <label for="phone"><b>Ingrese su numero de telefono</b></label>
                        <input type="text" placeholder="ingrese su numero de telefono" id="phone" name="phone" pattern="[^0-9]{8-16}" minlength="8" maxlength="16" onChange={(e) => this.setState({ phone_number: e.target.value })} required ></input>
                        <label for="psw"><b>Contraseña</b></label>
                        <input type="password" placeholder="Enter Password" id='password' name="psw" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,16}$" minlength="8" maxlength="16"  onChange={(e) => this.setState({ pass1: e.target.value })} required></input>
                        <label for="psw-repeat"><b>Repita la Contraseña</b></label>
                        <input type="password" placeholder="Repita la Contraseña" id="confirm_password" name="psw" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8,16}$" minlength="8" maxlength="16" onChange={(e) => this.setState({ pass2: e.target.value })} required></input>
                        <p>Al crear una cuenta, estas aceptando nuestros terminos y condiciones.</p>
                        <div class="container" >
                            <input type="submit" class="registerbtn" disableTouchRipple={true} value="Registrar usuario" ></input>
                        </div>
                    </div>
                </form>
                <BackBtnCenter />
            </div>
            );
        }
        

    }

}

export default Register;