import React from "react";
import { Grid, Paper, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        // background:'#5DADE2',
    },
    profile: {
        display: 'block',
        margin: '0 auto',
        background: '#ccc',
        width: 76,
        height: 76,
        borderRadius: 38,
    },
    image: {
        width: '100%',

    },
    min:{
        backgroundRepeat : `no repeat`,
        backgroundSize : `cover`,
        backgroundImage : `url(${"https://s1.favim.com/orig/150308/background-color-colorful-colors-Favim.com-2543021.jpg"})`,
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
    h1:{
        margin: 30,
        fontSize:24,
        textAlign:'center',
    },
    men:{
        backgroundRepeat : `no repeat`,
        backgroundSize : `cover`,
        backgroundImage : `url(${"https://s1.favim.com/orig/150308/background-color-colorful-colors-Favim.com-2543021.jpg"})`,
        width:`100%`,
        height:300,
    },
    Paper: {
        padding: 8,
        background: '#F4D03F',
    },

}))
const members = [
    {
        profile: 'image/bird1.jpg',
        name: "Dyna",
        gender: "Male",
        dob: "04-09-2003",
        contact: "0123456789",
    },
    {
        profile: 'image/bird2.jpg',
        name: "Danit",
        gender: "Female",
        dob: "28-03-2003",
        contact: "017386439",
    },
    {
        profile: 'image/bird3.jpg',
        name: "krim pina",
        gender: "Female",
        dob: "04-11-2003",
        contact: "077807144",
    },
    {
        profile: 'image/bird4.jpg',
        name: "Chansreydath",
        gender: "Female",
        dob: "01-09-2003",
        Contact: "077952409",
    },

];
export default function about() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            
                   <Grid container spacing={2} className= {classes.min}>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.text}>
                                <h1>ABOUT PAGE</h1>
                                <h2 >Our Mission </h2>
                                <Typography>Improve the reading of students' read books and those who want to read books.
                        Make it easy for teachers to provide students with information.</Typography>
                                <h2>Our Vision</h2>
                                <Typography>Increase the number of students reading books. Easy to read and borrow books. Make it easy for students to increase their knowledge</Typography>
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img className= {classes.BgImage} src="https://www.openathens.net/app/uploads/2021/08/alfons-morales-YLSwjSy7stw-unsplash.jpg"></img>
                        </Grid>
                   </Grid>


            <Typography className={classes.h1}>MEMBER</Typography>

            <Grid container spacing={3} className= {classes.men}>
                {
                    members.map((member, index) => {
                        console.log(member, index)
                        return (
                            <Grid key={index} className={classes.item1} item lg={3}>
                                
                                <Avatar src={member.profile} />
                                
                                <Paper className={classes.Paper}>
                                    <Typography>Name:{member.name}</Typography>
                                    <Typography>Gender:{member.gender}</Typography>
                                    <Typography>Date of Birth:{member.dob}</Typography>
                                    <Typography>Contact:{member.contact}</Typography>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>

    );


}