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

export const uploadImage = async function(files, nombres){
    //url webservices
    let url = urlWebservices.imageService+'uploadImage';
  

    const formData = new FormData();
    //agrego archivos para subir
    formData.append('files', files, nombres)

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'Origin':'http://localhost:3000',
            },
            body:formData
        });
    
        let archivos = await response.json()
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
    }
   
}

export const guardarImgUser = async function(message, receta_id){
    let url = urlWebservices.imageService+'guardarImgUser';

    const formData = new URLSearchParams();
    formData.append('email', message.email);
    formData.append('nombreImagen',message.imagen);
    formData.append('receta_id', receta_id);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        
        let datos = await response.json();
        if (response.status===201)
        {
            return( {rdo:0, mensaje:"ok", infor : datos});
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

export const cargarReceta = async function(title, date, user,dificultad,estrellas,categoria,pasos_a_seguir,description){
    let url = urlWebservices.recetaService+'createReceta';


    var bodyRequest = {
        'title': title,
        'date' : date,
        'user': user,
        'dificultad': dificultad,
        'estrellas': estrellas,
        'pasos_a_seguir': pasos_a_seguir,
        'categoria': categoria, 
        'description': description

    }

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bodyRequest)
        });
    
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
    } catch (err) {
        console.log('Error creando receta', err)
    }
}

export const cargarfotoUrl = async function(receta_id, foto_url){
    let url = urlWebservices.recetaService+'addfotoToReceta';


    var bodyRequest = {
        'receta_id':receta_id,
        'foto_url':foto_url

    }

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bodyRequest)
        });
    
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
    } catch (err) {
        console.log('Error creando receta', err)
    }
}

export const getFoto = async function (receta_id){
    let url = urlWebservices.recetaService+'getFoto/'+receta_id;
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
                        return( {rdo:0, mensaje:"ok", foto: datos});
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

export const getFp = async function (){
    let url = urlWebservices.recetaService+'getMainPageFeaturedPosts';
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
                        return( {rdo:0, mensaje:"ok", fp: datos});
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


export const cargarIngs = async function(receta_id, ingredientes){
    let url = urlWebservices.recetaService+'addIngrediente';

    console.log("estan llegando asi los ingredientes:", ingredientes);
    var bodyRequest = {
        'receta_id': receta_id,
        'ingrediente_nuevo' : ingredientes
    }

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(bodyRequest)
        });
    
        let rdo = response.status;
        let datos = await response.json();
        switch(rdo)
        {
                case 200:
                    {
                        return( {rdo:0, mensaje:"se cargaron los ingredientes correctamente"});
                    }
                default:
                    {
                        return({rdo:1, mensaje:"Ocurrio un error"});
                    }
        }
    } catch (err) {
        console.log('Error creando receta', err)
    }
}


export default getRecetaById;