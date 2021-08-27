import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Grid,
    Typography,
    IconButton,
    InputAdornment,
    FormHelperText,
    Divider,
    Card,
    Button,
    Link,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => {
    return {
        verify__form: {
            width: '100%',
        },
        verify__button: {
            display: 'block',
            margin: '0 auto'
        },
        verify__card: {
            padding: 20
        },
        body: {
            marginTop: theme.spacing(4)
        },
        divider1: {
            marginTop: 10
        },
        closeDialogButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
        },
        bottomLink: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
        },
        link: {
            cursor: 'pointer'
        }
    }
});

const VerifyPhoneNumber = ({ close, reset }) => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    const pass = {
        endAdornment: (
            <InputAdornment position='end'>
                <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        )
    };


    return (
        <div>
            <div className={classes.verify__form}>
                <Card className={classes.verify__card}>
                    <form autoComplete='off'>
                        <div className={classes.head}>
                            <IconButton className={classes.closeDialogButton} onClick={close}>
                                <CloseIcon />
                            </IconButton>
                            <Typography variant='h5'>
                                Comfirm Your Phone Number
                            </Typography>
                            <Typography color='textSecondary'>
                                Check your SMS get a vervifycation code
                            </Typography>
                        </div>
                        <Divider className={classes.divider1} />
                        <div className={classes.body}>
                            <Grid container spacing={4}>
                                <Grid item sm={12} md={12} lg={12}>
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        required
                                        label='Password'
                                        type={values.showPassword ? 'text' : 'password'}
                                        // value={values.password}
                                        onChange={handleChange('password')}
                                        // helperText= '^0^'
                                        fullWidth
                                        InputProps={pass}
                                    />
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='outlined' color='primary' className={classes.verify__button} onClick={close}>
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='contained' color='primary' type='submit' className={classes.verify__button} onClick={reset}>
                                        Comfirm
                                    </Button>
                                </Grid>
                                <Grid item sm={12} md={12} lg={12} className={classes.bottomLink}>
                                    <Typography>
                                        Not yet received ? <Link className={classes.link} >Resend SMS</Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default VerifyPhoneNumber;