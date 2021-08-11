import React, { useState } from 'react';
import {Grid ,Paper,Typography,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
const useStyles = makeStyles((theme) =>({
    root:{
        backgroundColor: 'white',
    },
    media :{
        backgroundColor: 'whitesmoke',
        padding: 20,
    },
    image :{
        width : `100%`,
        height :180,
        margin: '0 auto',
        display : 'block'
    },
    imgType: {
        width : `100%`
    },
    h1:{
        margin: 30,
        fontSize:24,
    },
    Header:{
        backgroundRepeat : `no repeat`,
        backgroundSize : `cover`,
        backgroundImage : `url(${"https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?size=626&ext=jpg&ga=GA1.2.2037226289.1628467200"})`,
        width:`100%`,
        height:440,
    },
    text:{
        display: 'block',
        width :`100%`,
        margin:'0 auto',
        textAlign :'center',
        padding : 80 ,
        
    },
    BgImage:{
        width:`100%`,
        paddingTop : 15 ,
    },
    button:{
        margin: 20,
        
    }
  }));
export default function HomePage(){
    const classes = useStyles();
    const MathBooks = [
        {
            type :"Math",
            img : "https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg?size=626&ext=jpg",
        },
        {
            type :"Biogy",
            img : "https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg?size=626&ext=jpg",
        },
        {
            type :"History",
            img : "https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg?size=626&ext=jpg",
        },
        {
            type :"Art",
            img : "https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg?size=626&ext=jpg",
        },
        {
            type :"Cooking",
            img : "https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg?size=626&ext=jpg",
        },
        {
            type :"Health",
            img : "https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg?size=626&ext=jpg",
        },
    ]
    
    
    const Books = [
    {
        img : "https://marketplace.canva.com/EAD7YH8bebE/1/0/1003w/canva-white-bold-text-thriller-mystery-book-cover-9g0hPVfwFlI.jpg",
    
    },
    {
        img : "http://www.designbookcover.pt/uploads/media/photos/cache/the_pen_and_the_sword_72_media_huge_thumbnail.jpg",

    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7WK2nTkpmtUsLYgV1jdECPedSrE0vt7PNxfJvJYV7OxxiUqfkcWvO3Q4KPWap6heAxs&usqp=CAU",

    },
    {
        img : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847",

    },
    {
        img : "https://m.media-amazon.com/images/I/81GqtNbs+PL._AC_UL320_.jpg",

    },
    {
        img : "https://m.media-amazon.com/images/I/71A8HHN+PgS._AC_UL320_.jpg",
    },
    {
        img : "https://m.media-amazon.com/images/I/81EWdX2J6gL._AC_UL320_.jpg",
    },
    {
        img : "https://m.media-amazon.com/images/I/81BdMSuI5ZS._AC_UL320_.jpg",

    },
    {
        img : "https://m.media-amazon.com/images/I/914BkcGCNgS._AC_UL320_.jpg",

    },
    {
        img : "https://m.media-amazon.com/images/I/91kB0uzAglL._AC_UL320_.jpg",

    },
    {
        img : "https://images-na.ssl-images-amazon.com/images/I/81zZK03SIUS._AC_UL160_SR160,160_.jpg",

    },
    {
        img : "https://images-na.ssl-images-amazon.com/images/I/81xfbcYf98L._AC_UL160_SR160,160_.jpg",
    }, 
    ];
    return(
        <div className ={classes.root}>
            
                   <Grid container spacing={2} className= {classes.Header}>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.text}>
                                <h1 >Welcome to CFC Library</h1>
                                <Typography>We believe that reading opens doors, and part of our mission is to change the way the world reads by providing a wide range of reading material in both print and audio formats at a price that is fair for both creators and consumers.</Typography>
                                <Button className= {classes.button} variant= 'contained' color= 'primary'>Get Start</Button>
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img className= {classes.BgImage} src="https://i.insider.com/5e81f9732d41c119bc47ff98?width=1136&format=jpeghttps://i.insider.com/5e81f9732d41c119bc47ff98?width=1136&format=jpeg"></img>
                        </Grid>
                   </Grid>
        
            
            <Typography className={classes.h1}>Type of book</Typography>
            <Grid container spacing={3}>
                {MathBooks.map((MathBook,index)=>(
                    <Grid  key={index} className = {classes.main} item xs = {12} sm = {6} md = {3} lg={2}>
                        <Paper>
                            <div className = {classes.slideImage}>
                                <img className = {classes.imgType} src={MathBook.img}></img>
                                <Typography>{MathBook.type}</Typography>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Typography className={classes.h1}>Top Borrow Book</Typography>
           <Grid container spacing={3}>
                {Books.map((Book,index)=>(
                    <Grid key={index} className = {classes.main} item xs = {12} sm = {6} md = {3} lg={2}>
                        <Paper>
                            <div className = {classes.media}>
                            <img className ={classes.image} src={Book.img}/>  
                            </div> 
                        </Paper>
                    </Grid>
                 ))}
           </Grid>
        </div>  
    )
}