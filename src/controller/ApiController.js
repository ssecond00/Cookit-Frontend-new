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

export const getRecetasByDificultad = async function (filter_id){
    let url = urlWebservices.recetaService+'getRecetasByDificultad/'+filter_id;
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
                        return( {rdo:0, mensaje:"ok", recetas: datos});
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

export const getAllRecetas = async function (){
    let url = urlWebservices.recetaService+'getAllRecetas';
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
                        return( {rdo:0, mensaje:"ok", recetas: datos});
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

export const getRecetasByIngredientes = async function(ingrediente){
    let url = urlWebservices.recetaService+'/getRecetasByIngrediente/'+ingrediente;
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
                        return( {rdo:0, mensaje:"ok", recetas: datos});
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

export const getRecetasByCategoria = async function (categoria){
    let url = urlWebservices.recetaService+'getRecetasByCategoria/'+categoria;
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
                        return( {rdo:0, mensaje:"ok", recetas: datos});
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

export const getRecetaByName = async function(title){
    let url = urlWebservices.recetaService+'getRecetasByTitulo/'+title;
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
                        return( {rdo:0, mensaje:"ok", recetas: datos});
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

export const getRecetasByUsername = async function(username){
    let url = urlWebservices.recetaService+'getRecetasFromUser/'+username;
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
                        return( {rdo:0, mensaje:"ok", recetas: datos});
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

export const getLogin = async function(email, password){
    let url = urlWebservices.userService+'GetUsuarioByLogin';
    const formData = new URLSearchParams();
    formData.append('mail',email);
    formData.append('pass',password);
    try{
        let response = await fetch(
            url,
            {
                method:'POST',
                mode:'cors',
                body:formData
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", user: datos});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
        //return  (response);
    } catch(e){
        console.log("Ocurrio un error al invocar el login() ");
    }
}

export const uploadImage = async function(image, name){
    let url = urlWebservices.imageService+'uploadImage';
    const formData = new URLSearchParams();
    formData.append('image',image);
    try{
        let response = await fetch(
            url,
            {
                method:'POST',
                mode:'cors',
                headers:{
                    'Accept':'application/form-data',
                    'Origin':'http://localhost:3000'
                },
                body:formData
            }
        );
        let rdo = response.status;
        let datos = await response.json();
        console.log(datos)
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"ok", user: datos});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }

    } catch(e){
        console.log("Ocurrio un error al invocar el login() ");
    } 
}

export default getRecetaById;