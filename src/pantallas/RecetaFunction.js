import React from 'react';
import RecetaPage from './RecetaPage';

import { useParams } from 'react-router-dom';





function RecetaFunction(props) {
   
    let { id_receta } = useParams();
    return (
        <RecetaPage id={id_receta}></RecetaPage>
    );
}


export default RecetaFunction;