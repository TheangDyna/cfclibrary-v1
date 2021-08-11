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
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => {
    return{
        // root: {
        //     '& label.Mui-focused': {
        //     color: 'white',
        //     },
        //     '& .MuiInput-underline:after': {
        //     borderBottomColor: 'yellow',
        //     },
        //     '& .MuiOutlinedInput-root': {
        //         '& fieldset': {
        //             borderColor: 'white',
        //         },
        //         '&:hover fieldset': {
        //             borderColor: 'white',
        //         },
        //         '&.Mui-focused fieldset': {
        //             borderColor: 'yellow',
        //         },
        //     },
        // },
        signin__form: {
            width: `100%`,
            // margin: '0 auto'
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
        
    }
});

const Signin = ({close}) => {

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
                    <form noValidate autoComplete='off'>
                        <div className={classes.head}>
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
                                            label='Create Password'
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
                                        Sign Up
                                    </Button>
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