import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
       
    },
    media: {
        backgroundColor: 'white',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 180,
        margin: '0 auto',
        display: 'block'
    },
    imgType: {
        width: '100%'
    },
    h1: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 24,
        width:`100%`,
        padding:10,
        backgroundColor:'#1eae98',
        color: 'white',
    },
    Header: {
        backgroundRepeat: `no repeat`,
        backgroundSize: `cover`,
        backgroundImage: `url("https://1.bp.blogspot.com/-iRJJnnVH1kI/Xnc1uIRip0I/AAAAAAAAEzA/xo3YIBUWE0szl9ZWR2dU6alK2plXLE6XwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Anime%2BLibrary%2BBackground%2B2.png")`,
        width: `100%`,
       
    },
    button: {
        margin: 20,

    },
    text: {
        display: 'block',
        width: '50%',
        textAlign: 'center',
        paddingTop: 50,
        backgroundColor:`rgba(255,255,255,0.8)`

    },
    logo: {
        marginTop: 20,
        marginBottom: 20,
    },
    BgImage1 :{
        display:'block',
        width:`50%`,
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
    divider: {
        marginTop: 20,
        background: '#1eae98',
        
    },
    mainFooter:{
        color:'white',
    },
    h3:{
        marginBottom:20,
        fontFamily: 'Viga',
    },
    choose:{
        marginTop:30,
    },
    slideImage:{
        textAlign: 'center',
    }

}));
export default function HomePage() {
    const classes = useStyles();
    const MathBooks = [
        {
            type: "Math",
        },
        {
            type: "Biogy",
        },
        {
            type: "History",
        },
        {
            type: "Art",
        },
        {
            type: "Cooking",
        },
        {
            type: "Health",
        },
    ]


    const Books = [
        {
            img: 'https://marketplace.canva.com/EAD7YH8bebE/1/0/1003w/canva-white-bold-text-thriller-mystery-book-cover-9g0hPVfwFlI.jpg',

        },
        {
            img: 'http://www.designbookcover.pt/uploads/media/photos/cache/the_pen_and_the_sword_72_media_huge_thumbnail.jpg',

        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7WK2nTkpmtUsLYgV1jdECPedSrE0vt7PNxfJvJYV7OxxiUqfkcWvO3Q4KPWap6heAxs&usqp=CAU',

        },
        {
            img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847',

        },
        {
            img: 'https://m.media-amazon.com/images/I/81GqtNbs+PL._AC_UL320_.jpg',

        },
        {
            img: 'https://m.media-amazon.com/images/I/71A8HHN+PgS._AC_UL320_.jpg',
        },
        {
            img: 'https://m.media-amazon.com/images/I/81EWdX2J6gL._AC_UL320_.jpg',
        },
        {
            img: 'https://m.media-amazon.com/images/I/81BdMSuI5ZS._AC_UL320_.jpg',

        },
        {
            img: 'https://m.media-amazon.com/images/I/914BkcGCNgS._AC_UL320_.jpg',

        },
        {
            img: 'https://m.media-amazon.com/images/I/91kB0uzAglL._AC_UL320_.jpg',

        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/81zZK03SIUS._AC_UL160_SR160,160_.jpg',

        },
        {
            img: 'https://images-na.ssl-images-amazon.com/images/I/81xfbcYf98L._AC_UL160_SR160,160_.jpg',
        },
    ];
    const newBooks = [
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
        {
            img :"https://www.mitpurnia.org/img/lib2.jpg",
        },
    ];
    return (
        <div className={classes.root}>
          <div className= {classes.Header}>
                <div className={classes.text}>
                    <div align='center' className={classes.logo}>
                        <img src='images/logo.png' width='200px' />
                    </div>
                    <Typography variant='h4'color='primary'>Welcome to CFC Library</Typography>
                        <Typography>We believe that reading opens doors, and part of our mission is to change the way the world reads by providing a wide range of reading material in both print and audio formats at a price that is fair for both creators and consumers.</Typography>
                        <Button className={classes.button} variant='contained' color='primary'>
                            Get Start
                        </Button>
                     </div>
            </div>
            <div className={classes.choose}>
                <Button href="#text-buttons" color="primary">Type Of Book</Button>
                <Button href="#text-buttons" color="primary">Top Borrow Book</Button>
                <Button href="#text-buttons" color="primary">New Arrival</Button>
            </div>
            <Divider className={classes.divider}/>
            <Typography className={classes.h1}>Type of book</Typography>
            <Grid container spacing={3}>
                {MathBooks.map((MathBook, index) => (
                    <Grid key={index} className={classes.main} item xs={12} sm={6} md={3} lg={2}>
                        <Paper>
                            <div className={classes.slideImage}>
                                <img className={classes.imgType} src={MathBook.img}></img>
                                <Typography>{MathBook.type}</Typography>
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Typography className={classes.h1}>Top Borrow Book</Typography>
            <Grid container spacing={3}>
                {Books.map((Book, index) => (
                    <Grid key={index} className={classes.main} item xs={12} sm={6} md={3} lg={2}>
                        <Paper>
                            <div className={classes.media}>
                                <img className={classes.image} src={Book.img} />
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
                <Typography className={classes.h1}>New Arrival</Typography>
            <Grid container spacing={3}>
                {newBooks.map((newBook, index) => (
                    <Grid key={index} className={classes.main} item xs={12} sm={6} md={3} lg={2}>
                        <Paper>
                            <div className={classes.media}>
                                <img className={classes.image} src={newBook.img} />
                            </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
           
           
        </div>
    )
}