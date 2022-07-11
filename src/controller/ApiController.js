import urlWebservices from '../controller/WebServices';

export const getRecetaById = async function (receta_id){
    let url = urlWebservices.recetaService+'getRecetaById/'+receta_id;
    try{
        let response = await fetch(
            url,
            {
                method:'GET',
                mode:'cors'
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", receta: datos});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
        //return  (response);
    } catch(e){
        console.log("Ocurrio un error al invocar getRecetaById con el id: "+receta_id);
    }



}

export const getFeaturedPosts = async function (receta_id){
    let url = urlWebservices.recetaService+'getFeaturedPost/'+receta_id;
    try{
        let response = await fetch(
            url,
            {
                method:'GET',
                mode:'cors'
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", featuredPosts: datos});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
        //return  (response);
    } catch(e){
        console.log("Ocurrio un error al invocar getFeaturedPosts() ");
    }
}

export const getIngredientesFromReceta = async function (receta_id){
    let url = urlWebservices.recetaService+'getIngredientesByReceta/'+receta_id;
    try{
        let response = await fetch(
            url,
            {
                method:'GET',
                mode:'cors'
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", ingredientes: datos});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
        //return  (response);
    } catch(e){
        console.log("Ocurrio un error al invocar getFeaturedPosts() ");
    }
}

export const getValoracionesReceta = async function (receta_id){
    let url = urlWebservices.recetaService+'getValoracionesRecetaById/'+receta_id;
    try{
        let response = await fetch(
            url,
            {
                method:'GET',
                mode:'cors'
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", valoracion: datos});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
        //return  (response);
    } catch(e){
        console.log("Ocurrio un error al invocar getFeaturedPosts() ");
    }
}
export default getRecetaById;