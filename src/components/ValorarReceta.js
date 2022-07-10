import React,{useState} from 'react';




function ValorarReceta(props) {

    const [valoracion, setValoracion] = React.useState(0);



    const valorarReceta1 = () => {
        window.alert("Se guardo tu valoracion de 1 estrella!");
        setValoracion(1);
    }
    const valorarReceta2 = () => {
        window.alert("Se guardo tu valoracion de 2 estrella!");
        setValoracion(2);
    }
    
    const valorarReceta3 = () => {
        window.alert("Se guardo tu valoracion de 3 estrellas!");
        setValoracion(3);
    }
    const valorarReceta4 = () => {
        window.alert("Se guardo tu valoracion de 4 estrellas!");
        setValoracion(4);
    }
    const valorarReceta5 = () => {
        window.alert("Se guardo tu valoracion de 5 estrellas!");
        setValoracion(5);
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




