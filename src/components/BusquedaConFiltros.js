import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from '../components/FeaturedPost';
import BackButton from '../components/BackButton';
import BackButtonCenter from '../components/BackButtonCenter';


const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});



    const busquedaPosts = [
        {
            title: 'Receta de Bizcocho de mandarina y almendras',
            date: 'Nov 12',
            description:
                'El bizcocho de mandarinas y almendras es una elaboración deliciosa y llena de sabor, ideal para las personas que no pueden comer harinas con gluten.',
            image: 'https://t1.rg.ltmcdn.com/es/posts/4/1/9/bizcocho_de_mandarina_y_almendras_75914_600.jpg',
            imageLabel: 'Image Text',
            stars:3,
        },
        {
            title: 'Pasta Frola',
            date: 'Dic 9',
            description:
                'Hacer una pastafrola casera debe estar en el manual de cocina de cualquier argentino, sea de membrillo o de batata. Por eso, te compartimos una de las recetas más fáciles para hacer en casa.',
            image: 'https://media.ambito.com/p/78286472dad3f55f6d3a876fa43652c0/adjuntos/239/imagenes/039/762/0039762300/730x0/smart/pasta-frolajpg.jpg',
            imageLabel: 'Pasta Frola',
            stars:2,
        }, {
            title: 'Canelones rellenos de ternera y verdura',
            date: 'Jul 16',
            description:
                'Facil receta para cocinar unos ricos canelones.',
            image: 'https://alicante.com.ar/uploads/recetas/183_receta.jpg',
            imageLabel: 'Image Text',
            stars:5,
        }, {
            title: 'Batido verde dietético y antioxidante ',
            date: 'Ene 28',
            description:
                'Si sois de esas personas a las que les gusta cuidar la alimentación, este batido verde debería de estar en vuestra lista de recetas habituales. ',
            image: 'https://www.recetasderechupete.com/wp-content/uploads/2020/11/Batido-verde.jpg',
            imageLabel: 'Image Text',
            stars:4,
        },
    ];





function BusquedaConFiltros(props) {

    const [resultadosBusqueda, setResultadosBusqueda] = useState(0);
    
    const [notFound, setNotFound] = useState(0);

    const [CriterioBusqueda, setCriterioBusqueda] = useState("");

    const validateInput = () => {
        setCriterioBusqueda(document.getElementById('criterio').value);
        setResultadosBusqueda(1);
        if (document.getElementById('criterio').value === "no") {
            setNotFound(1);
        }
    }

    const volverAIntentar = () => {
        setNotFound(0);
        setResultadosBusqueda(0);
    }

    if (props.id === '1') {
        return (
            <div>
                <div>
                    <br />
                    <h1 class='tiuloBusquedaFiltro'>Todas las recetas</h1>
                    <br />
                </div>
                <div>
                    <Grid container spacing={4}>
                        {busquedaPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                        ))}
                    </Grid>
                </div>
                <BackButton />
            </div>
        );

    } else if (props.id === '2') {
        return (
            <div>
                <div>
                    <br />
                    <h1 class='tiuloBusquedaFiltro'>Recetas faciles</h1>
                    <br />
                </div>
                <div>
                    <Grid container spacing={4}>
                        {busquedaPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                        ))}
                    </Grid>
                </div>
                <BackButton />
            </div>
        );
    } else if (props.id === '3') {
        return (
            <div>
                <div>
                    <br />
                    <h1 class='tiuloBusquedaFiltro'>Recetas intermedias</h1>
                    <br />
                </div>
                <div>
                    <Grid container spacing={4}>
                        {busquedaPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                        ))}
                    </Grid>
                </div>
                <BackButton />
            </div>
        );
    } else if (props.id === '4') {
        return (
            <div>
                <div>
                    <br />
                    <h1 class='tiuloBusquedaFiltro'>Recetas dificiles</h1>
                    <br />
                </div>
                <div>
                    <Grid container spacing={4}>
                        {busquedaPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                        ))}
                    </Grid>
                </div>
                <BackButton />
            </div>
        );
    } else if (props.id === '5') {
        if (resultadosBusqueda === 0) {
            return (
                <div>
                    <div>
                        <br />
                        <h1 class='tiuloBusquedaFiltro'>Buscar por ingredientes</h1>
                        <br />
                    </div>
                    <div>
                        <form onSubmit={validateInput}>
                            <label for="uname"><b>Ingrese el Ingrediente buscado</b></label>
                            <input type="text" placeholder="Ingrese aqui..." id='criterio' name="uname" required></input>
                            <br />
                            <Grid
                                justify="center" // Add it here :)
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <Button type="submit" >Continuar</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>

                    <BackButtonCenter />
                </div>
            );
        } else {
            if (notFound) {
                return (
                    <div>
                        <h1 class='tiuloBusquedaFiltro'>No pudimos encontrar recetas con el ingrediente: {CriterioBusqueda}</h1>
                        <form onSubmit={volverAIntentar}>
                            <br />
                            <Grid
                                justify="center" // Add it here :)
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <Button type="submit" >Volver</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>
                );
            }
            return (

                <div>
                    <div>
                        <br />
                        <h1 class='tiuloBusquedaFiltro'>Ingrediente: {CriterioBusqueda}</h1>
                        <br />
                    </div>
                    <div>
                        <Grid container spacing={4}>
                            {busquedaPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                            ))}
                        </Grid>
                    </div>
                    <BackButton />
                </div>
            );
        }

    } else if (props.id === '6') {
        if (resultadosBusqueda === 0) {
            return (
                <div>
                    <div>
                        <br />
                        <h1 class='tiuloBusquedaFiltro'>Buscar por categoria</h1>
                        <br />
                    </div>
                    <div>
                        <form onSubmit={validateInput}>
                            <label for="uname"><b>Ingrese el Ingrediente buscado</b></label>
                            <input type="text" placeholder="Ingrese aqui..." id='criterio' name="uname" required></input>
                            <br />
                            <Grid
                                justify="center" // Add it here :)
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <Button type="submit" >Continuar</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>

                    <BackButtonCenter />
                </div>
            );
        } else {
            if (notFound) {
                return (
                    <div>
                        <h1 class='tiuloBusquedaFiltro'>No pudimos encontrar recetas con la categoria: {CriterioBusqueda}</h1>
                        <form onSubmit={volverAIntentar}>
                            <br />
                            <Grid
                                justify="center" // Add it here :)
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <Button type="submit" >Volver</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>
                );
            }
            return (
                <div>
                    <div>
                        <br />
                        <h1 class='tiuloBusquedaFiltro'>Categoria: {CriterioBusqueda}</h1>
                        <br />
                    </div>
                    <div>
                        <Grid container spacing={4}>
                            {busquedaPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                            ))}
                        </Grid>
                    </div>
                    <BackButton />
                </div>
            );
        }
    } else if (props.id === '7') {
        if (resultadosBusqueda === 0) {
            return (
                <div>
                    <div>
                        <br />
                        <h1 class='tiuloBusquedaFiltro'>Buscar receta</h1>
                        <br />
                    </div>
                    <div>
                        <form onSubmit={validateInput}>
                            <label for="uname"><b>Ingrese nombre de la receta:</b></label>
                            <input type="text" placeholder="Ingrese aqui..." id='criterio' name="uname" required></input>
                            <br />
                            <Grid
                                justify="center" // Add it here :)
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <Button type="submit" >Continuar</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>

                    <BackButtonCenter />
                </div>
            );
        }else {
            if (notFound) {
                return (
                    <div>
                        <h1 class='tiuloBusquedaFiltro'>No pudimos encontrar recetas con el nombre: {CriterioBusqueda}</h1>
                        <form onSubmit={volverAIntentar}>
                            <br />
                            <Grid
                                justify="center" // Add it here :)
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <Button type="submit" >Volver</Button>
                                </Grid>
                            </Grid>

                        </form>
                    </div>
                );
            }
            return (
                <div>
                    <div>
                        <br />
                        <h1 class='tiuloBusquedaFiltro'>Resultados para: {CriterioBusqueda}</h1>
                        <br />
                    </div>
                    <div>
                        <Grid container spacing={4}>
                            {busquedaPosts.map((post) => (
                                <FeaturedPost key={post.title} post={post} href='/receta/id_receta' />
                            ))}
                        </Grid>
                    </div>
                    <BackButton />
                </div>
            );
        }
    }
}

export default BusquedaConFiltros;
