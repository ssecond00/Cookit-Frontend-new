import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';




function BackButtonCenter() {

    return (
        <div>
            <Grid
                justify="center" // Add it here :)
                container
                spacing={24}
            >
                <Grid item>
                    <Typography type="title" color="inherit">
                    </Typography>
                </Grid>
                <Grid item>
                    <Button type="submit" disableTouchRipple={true} alignItems="" href='/'>Back to Home</Button>
                </Grid>
            </Grid>
            <br />
        </div>
    );

}


export default BackButtonCenter;
