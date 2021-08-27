import React, { useState } from 'react';
import { Grid, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
       
    },
    footer:{
        marginTop:50,
        backgroundColor:'#1eae98',
        width:`100%`,
        height:300,
        padding : 30,
    },
    textFooter:{
        color: 'white', 
    },   

    mainFooter:{
        color:'white',
    },
    h3:{
        fontFamily: 'Viga',
    }

}));

export default function Footer(){
    const classes = useStyles();
    return(
    <Grid container className={classes.mainFooter}>
        <Grid className={classes.footer} item xs={3}>
            <img src='images/logo.png' width='80px' />
            <h3 className={classes.h3}>CFC Library</h3>
        </Grid>
        <Grid className={classes.footer} item xs={3}>
            <h3 className={classes.h3}>Contact Us</h3>
            <Typography>Phone : +88512345678</Typography>
            <Typography>Email : CFCLibrary.com</Typography>
        </Grid>
        <Grid className={classes.footer} item xs={3}>
            <h3 className={classes.h3}>Information</h3>
            <Typography>About Us</Typography>
            <Typography></Typography>
        </Grid>
        <Grid className={classes.footer} item xs={3}>
            <h3 className={classes.h3}>Helpful Links</h3>
            <Typography>Library Rule</Typography>
            <div>
                <Typography>Donate</Typography>
            </div> 
        </Grid>
</Grid>
    )
}