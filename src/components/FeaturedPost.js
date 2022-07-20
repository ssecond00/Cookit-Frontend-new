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




    constructor(props) {
        super(props);
        this.state = { id: props.fp, title: props.title, date:props.date, description:props.description, estrellas: props.stars, foto: props.foto };
      };


      render(){
        return( 
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={"/receta/"+this.state.id}>
              <Card >
                <div >
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {this.state.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {this.state.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    {this.state.description}
                    </Typography>
                    <FiveStar stars={this.state.estrellas}/>
                    <Typography variant="subtitle1" color="primary">
                      Seguir leyendo...
                    </Typography>
                    <CardMedia id="cont" >
                      <img class="img_fp" src={this.state.foto}  />
                    </CardMedia>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>);
      }
}


export default FeaturedPost;