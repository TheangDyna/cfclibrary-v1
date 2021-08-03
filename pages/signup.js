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
    Divider,
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
        },
        divider: {
          height: 20,
          marginLeft: 10,
          marginRight: 5,
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

const signup = () => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password1: '',
        showPassword1: false,
        password2: '',
        showPassword2: false,
        phoneNumber: '',
});
const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
};

const handleClickShowPassword1 = () => {
    setValues({ ...values, showPassword1: !values.showPassword1 });
};

const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
};

const handleMouseDownPassword = (e) => {
    e.preventDefault();
};

const [isSelected, setIsSelected] = useState(false);

const textAdornment = isSelected
    ? {
        startAdornment: (
            <InputAdornment position="start">
            +855 <Divider className={classes.divider} orientation="vertical" />
            </InputAdornment>
        )
    }
    : {};
const createPass = {
    endAdornment: (
        <InputAdornment position="end">
            <IconButton
                onClick={handleClickShowPassword1}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    )
};
const comfirmPass = {
    endAdornment: (
        <InputAdornment position="end">
            <IconButton
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    )
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
                                className={classes.phoneNumber}
                                size='small'
                                required
                                label='Phone Number'
                                helperText= '^0^'
                                fullWidth
                                InputProps={textAdornment}
                                onChange={handleChange('phoneNumber')}
                                onFocus={e => setIsSelected(true)}
                                onBlur={values.phoneNumber=='' ? (e => setIsSelected(false)):(e => setIsSelected(true))}
                            />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <TextField
                                    variant='outlined'
                                    size='small'
                                    required
                                    label='Create Password'
                                    type={values.showPassword1 ? 'text' : 'password'}
                                    value={values.password1}
                                    onChange={handleChange('password1')}
                                    helperText= '^0^'
                                    fullWidth
                                    InputProps={createPass}
                                />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <TextField
                                    variant='outlined'
                                    size='small'
                                    required
                                    label='Comfirm Password'
                                    type={values.showPassword2 ? 'text' : 'password'}
                                    value={values.password2}
                                    onChange={handleChange('password2')}
                                    helperText= '^0^'
                                    fullWidth
                                    InputProps={comfirmPass}
                                />
                        </Grid>
                    </Grid>
                </div>
            </form>

        </div>
        </div>
     );
}
 
export default signup;