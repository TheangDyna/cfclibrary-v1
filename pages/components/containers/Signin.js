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
    return{
        signin__form: {
            width: '100%',
        },
        signin__button: {
            display: 'block',
            margin: '0 auto'
        },
        signin__card:{
            padding: 20
        },
        body: {
            marginTop: theme.spacing(4)
        },
        divider1: {
            marginTop: 10
        },
        divider2: {
          height: 20,
          marginLeft: 10,
          marginRight: 5,
          color: '#000000',
          background: '#808080',
        },
        phoneNumber: {
            '& input[type=number]': {
                '-moz-appearance': 'textfield'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            }
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

const Signin = ({close, signup, reset}) => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        phoneNumber: '',
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
const [isSelected, setIsSelected] = useState(false);

const textAdornment = isSelected
    ? {
        startAdornment: (
            <InputAdornment position='start'>
            +855 <Divider className={classes.divider2} orientation='vertical' />
            </InputAdornment>
        )
    }
    : {};
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
             <div className={classes.signin__form}>
                <Card className={classes.signin__card}>
                    <form autoComplete='off'>
                        <div className={classes.head}>
                            <IconButton className={classes.closeDialogButton} onClick={close}>
                                <CloseIcon />
                            </IconButton>
                            <Typography variant='h5'>
                                Sign In To CFC Library
                            </Typography>
                            <Typography color='textSecondary'>
                                Log In your account by filling the form below.
                            </Typography>
                        </div>
                        <Divider className={classes.divider1}/>
                        <div className={classes.body}>
                            <Grid container spacing={4}>
                                <Grid item sm={12} md={12} lg={12}>
                                    <TextField
                                        variant='outlined'
                                        type='number'
                                        className={classes.phoneNumber}
                                        size='small'
                                        required
                                        label='Phone Number'
                                        // helperText= '^0^'
                                        fullWidth
                                        // value={values.phoneNumber}
                                        InputProps={textAdornment}
                                        onChange={handleChange('phoneNumber')}
                                        onFocus={e => setIsSelected(true)}
                                        onBlur={values.phoneNumber=='' ? (e => setIsSelected(false)):(e => setIsSelected(true))}
                                    />
                                </Grid>
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
                                    <Button variant='outlined'color='primary' className={classes.signin__button} onClick={close}>
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='contained' color='primary' type='submit' className={classes.signin__button}>
                                        Sign In
                                    </Button>
                                </Grid>
                                <Grid item sm={12} md={12} lg={12} className={classes.bottomLink}>
                                    <Typography>
                                        Don't have an account? <Link className={classes.link} onClick={signup}>SignUp Now</Link>
                                        <br />
                                        Forget Password? <Link className={classes.link} onClick={reset}>Reset Password</Link>
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
 
export default Signin;