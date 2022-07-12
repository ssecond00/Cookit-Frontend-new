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
import {getFeaturedPosts} from '../controller/ApiController';

class FeaturedPost extends React.Component{




    constructor(props) {
        super(props);
        localStorage.setItem('title_fp', props.title);
        localStorage.setItem('desc_fp', props.description);
        localStorage.setItem('date_fp', props.date);
        localStorage.setItem('stars_fp', props.stars);
        localStorage.setItem('fp_id_fp', props.fp);
        this.state = { data: [] };
      };



      render(){
        return( 
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={"/receta/"+localStorage.getItem('fp_id_fp')}>
              <Card >
                <div >
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {localStorage.getItem('title_fp')}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {localStorage.getItem('date_fp')}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    {localStorage.getItem('desc_fp')}
                    </Typography>
                    <FiveStar stars={localStorage.getItem('stars_fp')}/>
                    <Typography variant="subtitle1" color="primary">
                      Seguir leyendo...
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Grid>);
      }
}


export default FeaturedPost;