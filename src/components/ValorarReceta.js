import React,{useState} from 'react';
import {valorarReceta} from '../controller/ApiController'



function ValorarReceta(props) {

    const [valoracion, setValoracion] = React.useState(0);

    console.log(props.id_receta);


    const valorar_receta_backend = async function ( valoracion) {
        
        let valorar = await valorarReceta(props.id_receta, valoracion);
        console.log(valorar.rdo);
        if (valorar.rdo === 0) {
            window.alert("Se guardo tu valoracion de "+ valoracion + " estrellas!");

    
        }
      };

    const valorarReceta1 = () => {
        valorar_receta_backend(1);
    }
    const valorarReceta2 = () => {
        valorar_receta_backend(2);
    }
    
    const valorarReceta3 = () => {
        valorar_receta_backend(3);
    }
    const valorarReceta4 = () => {
        valorar_receta_backend(4);
    }
    const valorarReceta5 = () => {
        valorar_receta_backend(5);
    }

    return (
        <div class="rate">
            <input type="radio" id="star5" name="rate" value="5" onClick={valorarReceta5} />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4"  onClick={valorarReceta4}/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3"  onClick={valorarReceta3}/>
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2"  onClick={valorarReceta2}/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1"  onClick={valorarReceta1} />
            <label for="star1" title="text">1 star</label>
        </div>
    )
}


export default ValorarReceta;




