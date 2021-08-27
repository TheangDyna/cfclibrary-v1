import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Grid,
    Typography,
    IconButton,
    InputAdornment,
    Divider,
    Card,
    Button,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => {
    return {   
        reset__form: {
            width: '100%',
        },
        reset__button: {
            display: 'block',
            margin: '0 auto'
        },
        reset__card: {
            padding: 20
        },
        body: {
            marginTop: theme.spacing(4)
        },
        divider: {
            marginTop: 10
        },
        phoneNumber__divider: {
            height: 20,
            marginLeft: 10,
            marginRight: 5,
            color: '#000000',
            background: '#808080',
        },
        closeDialogButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
        },

    }
});

const ResetPassword = ({ close }) => {

    const classes = useStyles();
    const [values, setValues] = useState({
        password1: '',
        showPassword1: false,
        password2: '',
        showPassword2: false,
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

    const createPass = {
        endAdornment: (
            <InputAdornment position='end'>
                <IconButton
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                >
                    {values.showPassword1 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        )
    };
    const comfirmPass = {
        endAdornment: (
            <InputAdornment position='end'>
                <IconButton
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                >
                    {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        )
    };
    return (
        <div>
            <div className={classes.reset__form}>
                <Card className={classes.reset__card}>
                    <form autoComplete='off'>
                        <div className={classes.head}>
                            <IconButton className={classes.closeDialogButton} onClick={close}>
                                <CloseIcon />
                            </IconButton>
                            <Typography variant='h5'>
                                Reset your password
                            </Typography>
                            <Typography color='textSecondary'>
                                Reset password by filling the form below.
                            </Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <div className={classes.body}>
                            <Grid container spacing={4}>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        required
                                        label='Create Password'
                                        type={values.showPassword1 ? 'text' : 'password'}
                                        // value={values.password1}
                                        onChange={handleChange('password1')}
                                        // helperText= '^0^'
                                        fullWidth
                                        InputProps={createPass}
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        required
                                        label='Comfirm Password'
                                        type={values.showPassword2 ? 'text' : 'password'}
                                        // value={values.password2}
                                        onChange={handleChange('password2')}
                                        // helperText= '^0^'
                                        fullWidth
                                        InputProps={comfirmPass}
                                    />
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='outlined' color='primary' className={classes.reset__button} onClick={close}>
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='contained' color='primary' type='submit' className={classes.reset__button}>
                                        Reset
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

export default ResetPassword;