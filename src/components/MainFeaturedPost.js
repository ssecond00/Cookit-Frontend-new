import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedmainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedmainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const mainFeaturedPost = {
    title: 'Bienvenidos!',
    description:
        "En Cookit vas a encontrar las mejores recetas! Podes navegar por las distintas categorias y hasta cargar tus propias recetas.",
    image: 'https://i.blogs.es/df050b/istock-1258149399/1366_521.jpg',
    imgText: 'main image description',
    stars:3,
    linkText: 'Continue reading…',
};

export default function MainFeaturedmainFeaturedPost() {
  const classes = useStyles();


  return (
    <Paper className={classes.mainFeaturedmainFeaturedPost} style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={mainFeaturedPost.image} alt={mainFeaturedPost.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedmainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {mainFeaturedPost.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {mainFeaturedPost.description}
            </Typography>

            <Link variant="subtitle1" color="inherit" href="/acerca_de_cookit" >
              Mas Sobre Cookit!
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedmainFeaturedPost.propTypes = {
  mainFeaturedPost: PropTypes.object,
};