import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Grid,
    Typography,
    Divider,
    Card,
    Button,
} from '@material-ui/core';
import emailjs from 'emailjs-com';
const useStyles = makeStyles((theme) => {
    return {
        contact__form: {
            width: `100%`,
        },
        contact__button: {
            display: 'block',
            margin: '0 auto'
        },
        contact__card: {
            padding: 20
        },
        body: {
            marginTop: theme.spacing(4)
        },
        divider: {
            marginTop: 10
        },
        send__button: {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    }
});

const contact = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: '',
        message: '',

    });
    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('CFC-LIBRARY', 'template-cfc-library', e.target, 'user_l7BCSSY6Nm2A1oHVkeURW')
        .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      }
    return (
        <div>
            <div className={classes.contact__form}>
                <Card className={classes.contact__card}>
                    <Grid container spacing={4}>
                        <Grid item lg={6}>

                        </Grid>
                        <Grid item lg={6}>
                            <form autoComplete='off' onSubmit={sendEmail} >
                                <div className={classes.head}>
                                    <Typography variant='h5'>
                                        Contact Us
                                    </Typography>
                                    <Typography color='textSecondary'>
                                        Contact to us by filling the form below.
                                    </Typography>
                                </div>
                                <Divider className={classes.divider} />
                                <div className={classes.body}>
                                    <Grid container spacing={3}>
                                        <Grid item sm={12} md={12} lg={12}>
                                            <TextField
                                                variant='outlined'
                                                type='email'
                                                size='small'
                                                name='email'
                                                // value={values.email}
                                                onChange={handleChange('email')}
                                                required
                                                label='Email'
                                                // helperText= '^0^'
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12} md={12} lg={12}>
                                            <TextField
                                                variant='outlined'
                                                type='text'
                                                size='small'
                                                name='message'
                                                multiline
                                                rows={8}
                                                // value={values.message}
                                                onChange={handleChange('message')}
                                                required
                                                label='Message'
                                                // helperText= '^0^'
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item lg={12} className={classes.send__button}>
                                            <Button variant='contained' color='primary' type='submit'>
                                                Send
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </form>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </div>

    );
}

export default contact;