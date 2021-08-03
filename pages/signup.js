import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography,
    IconButton,
    InputAdornment,
    FormHelperText,
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
        signupForm: {
            width: `50%`,
            margin: '0 auto'
        },
        body: {
            marginTop: theme.spacing(4)
        }
    }
});

const signup = () => {

    const classes = useStyles();
    const [values1, setValues1] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange1 = (prop) => (e) => {
    setValues1({ ...values1, [prop]: e.target.value });
    };

    const handleClickShowPassword1 = () => {
    setValues1({ ...values1, showPassword: !values1.showPassword });
    };

    const handleMouseDownPassword1 = (e) => {
    e.preventDefault();
    };
 
    const [values2, setValues2] = useState({
        password: '',
        showPassword: false,
    });
    const handleChange2 = (prop) => (e) => {
    setValues2({ ...values2, [prop]: e.target.value });
    };

    const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword: !values2.showPassword });
    };

    const handleMouseDownPassword2 = (e) => {
    e.preventDefault();
    };

    
    return ( 
        <div>
        <div className={classes.signupForm}>
            <form novalidate autoComplete='off'>
                <div className={classes.head}>
                    <Typography variant='h5'>
                        Sign Up To CFC Library
                    </Typography>
                    <Typography color='textSecondary'>
                        Create your new account by filling the form below.
                    </Typography>
                </div>
                <div className={classes.body}>
                    <Grid container spacing={2}>
                        <Grid item sm={12} md={6} lg={6}>
                            <TextField
                                variant='outlined'
                                type='text'
                                size='small'
                                required
                                label='First Name'
                                helperText= '^0^'
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <TextField
                                variant='outlined'
                                type='text'
                                size='small'
                                required
                                label='Last Name'
                                helperText= '^0^'
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={12} md={12} lg={12}>
                            <TextField
                                variant='outlined'
                                type='number'
                                size='small'
                                required
                                label='Phone Number'
                                helperText= '^0^'
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <FormControl
                                variant="outlined"
                                required
                                size='small'
                                fullWidth
                            >
                                <InputLabel>Create Password</InputLabel>
                                <OutlinedInput
                                type={values1.showPassword ? 'text' : 'password'}
                                value={values1.password}
                                onChange={handleChange1('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword1}
                                        onMouseDown={handleMouseDownPassword1}
                                        edge="end"
                                    >
                                        {values1.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={140}
                                />
                                <FormHelperText>^o^</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <FormControl
                                variant="outlined"
                                required
                                size='small'
                                fullWidth
                            >
                                <InputLabel>Comfirm Password</InputLabel>
                                <OutlinedInput
                                type={values2.showPassword ? 'text' : 'password'}
                                value={values2.password}
                                onChange={handleChange2('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword2}
                                        edge="end"
                                    >
                                        {values2.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={150}
                                />
                                <FormHelperText>^o^</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
            </form>

        </div>
        </div>
     );
}
 
export default signup;