import React from "react";
import { Grid, Paper, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        // background: `url(${"https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1446&q=80"})`,
    },
    profile: {
        display: 'block',
        background: '#ccc',
        width: 76,
        height: 76,
        borderRadius: 38,
        margin:'0 auto', 

    },
    image: {
        width: '100%',

    },
    min:{
        backgroundRepeat : `no repeat`,
        backgroundSize : `cover`,
        backgroundImage : `url(${"https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1446&q=80"})`,
        width:`100%`,
        height:440,
    },
    text:{
        display: 'block',
        width :`100%`,
        margin:'0 auto',
        textAlign :'center',
        padding : 80 ,
        backgroundColor:`rgba(255,255,255,0.8)`,
        
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
       // backgroundImage : `url(${"https://c4.wallpaperflare.com/wallpaper/688/191/768/library-photoshop-magic-misty-romantic-hd-wallpaper-preview.jpg"})`,
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
        profile: 'https://img.freepik.com/free-vector/cute-baby-dragon-cartoon-flaying-illustration_158784-338.jpg?size=338&ext=jpg',
        name: "Dyna",
        gender: "Male",
        dob: "04-09-2003",
        contact: "0123456789",
    },
    {
        profile: 'https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/3ED6FCAB-D280-4197-8B02-BCCD9846076A.jpg?itok=EKczHCGX',
        name: "Danit",
        gender: "Female",
        dob: "28-03-2003",
        contact: "017386439",
    },
    {
        profile: 'https://images.fineartamerica.com/images/artworkimages/medium/3/cute-kawaii-baby-trex-dinosaur-gift-j-m-transparent.png',
        name: "krim pina",
        gender: "Female",
        dob: "04-11-2003",
        contact: "077807144",
    },
    {
        profile: 'https://media.istockphoto.com/vectors/sheep-cartoon-vector-id165724070?k=6&m=165724070&s=612x612&w=0&h=AVbZ1bloc6J_D6LDhFWRDVGwJe5bBiKy3qBoWYC3nfI=',
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
                            <img className= {classes.BgImage} src="images/logo1.png"></img>
                        </Grid>

                   </Grid>


            <Typography className={classes.h1}>MEMBER</Typography>

            <Grid container spacing={3} className= {classes.men}>
                {
                    members.map((member, index) => {
                        console.log(member, index)
                        return (
                            <Grid key={index} className={classes.item1} item lg={3}>
                                <div>
                                    
                                 <Avatar src={member.profile} className={classes.profile}/>

                                </div>
                                
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