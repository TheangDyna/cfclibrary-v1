import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Grid,
    FormControl,
    FormControlLabel,
    RadioGroup,
    FormLabel,
    Radio,
    Typography,
    IconButton,
    InputAdornment,
    FormHelperText,
    Divider,
    MenuItem,
    Card,
    Link,
    Button,
    Dialog,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CloseIcon from '@material-ui/icons/Close';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
        signup__form: {
            width: `100%`,
            // margin: '0 auto'
        },
        signup__button: {
            display: 'block',
            margin: '0 auto'
        },
        signup__card:{
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
        radio: {
            paddingLeft: 14
        },
        bottomLink: {
            display: 'flex',
            justifyContent: 'center',
        },
        closeDialogButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
        },
        link: {
            cursor: 'pointer'
        }
        
    }
});

const Signup = ({close}) => {

    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        grade: '',
        password1: '',
        showPassword1: false,
        password2: '',
        showPassword2: false,
        phoneNumber: '',
        gender: '',
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
const [selectedDate, setSelectedDate] =useState();

const handleDateChange = (date) => {
    setSelectedDate(date);
};

const [isSelected, setIsSelected] = useState(false);

const phoneNumber__textAdornment = isSelected
    ? {
        startAdornment: (
            <InputAdornment position='start'>
            +855 <Divider className={classes.phoneNumber__divider} orientation='vertical' />
            </InputAdornment>
        )
    }
    : {};
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
             <div className={classes.signup__form}>
                <Card className={classes.signup__card}>
                    <form noValidate autoComplete='off'>
                        <div className={classes.head}>
                            <IconButton className={classes.closeDialogButton} onClick={close}>
                                <CloseIcon />
                            </IconButton>
                            <Typography variant='h5'>
                                Sign Up To CFC Library
                            </Typography>
                            <Typography color='textSecondary'>
                                Create your new account by filling the form below.
                            </Typography>
                        </div>
                        <Divider className={classes.divider}/>
                        <div className={classes.body}>
                            <Grid container spacing={4}>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        type='text'
                                        size='small'
                                        // value={values.firstName}
                                        onChange={handleChange('firstName')}
                                        required
                                        label='First Name'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        type='text'
                                        size='small'
                                        // value={values.lastName}
                                        onChange={handleChange('lastName')}
                                        required
                                        label='Last Name'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={12}>
                                    <FormControl required className={classes.radio}>
                                        <FormLabel>Gender</FormLabel>
                                        <RadioGroup
                                            // value={values.gender}
                                            onChange={handleChange('gender')}
                                            
                                        >
                                            <div>
                                                <FormControlLabel value='female' control={<Radio size='small' color='primary' /> } label='Female'/>
                                                <FormControlLabel value='male' control={<Radio size='small' color='primary' />} label='Male' />
                                                <FormControlLabel value='other' control={<Radio size='small' color='primary' />} label='Other' />
                                            </div>
                                        </RadioGroup>
                                        {/* <FormHelperText>^0^</FormHelperText> */}
                                    </FormControl>
                                </Grid>
                                <Grid item sm={12} md={12} lg={12}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            required
                                            variant='inline'
                                            inputVariant='outlined'
                                            label='Birth Date'
                                            size='small'
                                            format='dd/MMMM/yyyy'
                                            // helperText= '^0^'
                                            fullWidth
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item sm={12} md={12} lg={12}>
                                    <TextField
                                        variant='outlined'
                                        select
                                        size='small'
                                        required
                                        label='Grade'
                                        // helperText= '^0^'
                                        fullWidth
                                        value={values.grade}
                                        onChange={handleChange('grade')}
                                    >
                                        <MenuItem value='10 A'>10 A</MenuItem>
                                        <MenuItem value='10 B'>10 B</MenuItem>
                                        <MenuItem value='11 A'>11 A</MenuItem>
                                        <MenuItem value='11 B'>11 B</MenuItem>
                                        <MenuItem value='12 A'>12 A</MenuItem>
                                        <MenuItem value='12 B'>12 B</MenuItem>
                                    </TextField>
                                </Grid>
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
                                        InputProps={phoneNumber__textAdornment}
                                        onChange={handleChange('phoneNumber')}
                                        onFocus={e => setIsSelected(true)}
                                        onBlur={values.phoneNumber=='' ? (e => setIsSelected(false)):(e => setIsSelected(true))}
                                    />
                                </Grid>
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
                                    <Button variant='outlined'color='primary' className={classes.signup__button} onClick={close}>
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='contained' color='primary' type='submit' className={classes.signup__button}>
                                        Sign Up
                                    </Button>
                                </Grid>
                                <Grid item sm={12} md={12} lg={12} className={classes.bottomLink}>
                                    <Typography>
                                        Already have an account? <Link className={classes.link}>SignIn Now</Link>
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
 
export default Signup;