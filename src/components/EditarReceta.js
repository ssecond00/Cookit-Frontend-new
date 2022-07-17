import React from "react";
import {getRecetaById} from "../controller/ApiController";

class EditarReceta extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the state
    this.state = { mensaje: "hola mundo", flag: 0 };

    this.cambiarFlag = this.cambiarFlag.bind(this);
    this.cargarRecetBackend = this.cargarRecetBackend.bind(this);

  }

  cambiarFlag() {
    if(this.state.flag === 1){
        this.setState({ flag : 0});

    }else if ( this.state.flag === 0){
        this.setState({ flag : 1});
    }
    this.render()
  }

  async cargarRecetBackend(){
    if(this.state.flag === 1){
        this.setState({ flag : 0});

    }else if ( this.state.flag === 0){
        this.setState({ flag : 1});
    }

    var receta = await getRecetaById(this.state.mensaje);

    if(receta.rdo === 0){
        console.log();
        this.setState({ mensaje: receta.receta.receta_resp[0].title})
    }

    this.render()

  }

  render() {
    if(this.state.flag === 1){
        return (
            <div>
              <h1>{this.state.mensaje}</h1>
              <form>
                <button type="button" onClick={this.cambiarFlag} >volver</button>
              </form>
            </div>
          );
    }else{
        return (
            <div>
              <h1>cambia el titulo</h1>
              <form>
                <input type="text" placeholder="Indique su Nombre De Usuario" name="username" id="username" onChange={(e) => this.setState({ mensaje: e.target.value })} required></input>
                <button type="button" onClick={this.cargarRecetBackend} >cambiar titulo</button>
              </form>
            </div>
          );
    }
      
    
  }
}

export default EditarReceta;
