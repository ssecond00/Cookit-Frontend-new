import React from 'react';
import Star from '../img/star.png';




function FiveStar(props) {

    if (props.stars === 1){
        return (

            <div class="Rating" aria-label="Rating of this item is 3 out of 5">
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star" />
                <img src={Star} class="Rating--Star" />
                <img src={Star} class="Rating--Star" />
                <img src={Star} class="Rating--Star" />
            </div >
    
        );
    }else if (props.stars === 2){
        return (

            <div class="Rating" aria-label="Rating of this item is 3 out of 5">
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star" />
                <img src={Star} class="Rating--Star" />
                <img src={Star} class="Rating--Star" />
            </div >
    
        );
    }else if (props.stars === 3){
        return (

            <div class="Rating" aria-label="Rating of this item is 3 out of 5">
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star" />
                <img src={Star} class="Rating--Star" />
            </div >
    
        );
    }else if (props.stars === 4){
        return (

            <div class="Rating" aria-label="Rating of this item is 3 out of 5">
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star" />
            </div >
    
        );
    }else if (props.stars === 5){
        return (

            <div class="Rating" aria-label="Rating of this item is 3 out of 5">
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
                <img src={Star} class="Rating--Star__active" />
            </div >
    
        );
    }

}


export default FiveStar;
