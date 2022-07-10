import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import FiveStar from './FiveStar.js';

class FeaturedPost extends React.Component{


    post = {
        title: 'Receta de Bizcocho de mandarina y almendras',
        date: 'Nov 12',
        description:
            'El bizcocho de mandarinas y almendras es una elaboración deliciosa y llena de sabor, ideal para las personas que no pueden comer harinas con gluten.',
        image: 'https://t1.rg.ltmcdn.com/es/posts/4/1/9/bizcocho_de_mandarina_y_almendras_75914_600.jpg',
        imageLabel: 'Image Text',
        stars:5,
    }

    constructor(props) {
        super(props);
        console.log("Se recupera el Featured post de id:  ",props.id);
        localStorage.setItem('fp_id',props.id);
        this.state = { data: [] };
      };


      async  componentDidMount() {
        //const response = await getRecetaById(5);
        //localStorage.setItem('title',response.receta.receta_resp[0].title);
        //console.log(localStorage.getItem('title'));
        
      }


      render(){
        return( 
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={"/receta/"+localStorage.getItem('fp_id')}>
              <Card >
                <div >
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {this.post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {this.post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {this.post.description}
                    </Typography>
                    <FiveStar stars={this.post.stars}/>
                    <Typography variant="subtitle1" color="primary">
                      Seguir leyendo...
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia  image={this.post.image} title={this.post.imageTitle} />
                </Hidden>
              </Card>
            </CardActionArea>
          </Grid>);
      }
}


export default FeaturedPost;