import React, { useState } from 'react';
import {
    makeStyles,
    Avatar,
    Card,
    Grid,
    Typography,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Dialog,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ImformationBox from '../components/presentaions/ImformationBox';
import CtrlUpdate from '../components/containers/CtrlUpdate';
import Banner from '../components/presentaions/Banner';


const currentUser = {
    fname: 'Theang',
    lname: 'Dyna',
    profile: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/30/Pictures/_19298b80-a255-11ea-b043-295af9ca78f2.jpg',
    password: 'Bad Boy 365?',
    phoneNumber: 153657150,
    gender: 'Male',
    birthDate: '04/September/2003',
    grade: '12 A',
    address: '',
    history: [],
    wishlist: [],
    notification: [],
};


const useStyles = makeStyles((theme) => ({
    profile: {
        width: 150,
        height: 150,
        marginBottom: 25
    },
    profile__body: {
        padding: 25,
        justifyContent: 'center'
    },
    profile__box: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    user__data: {
        display: 'flex',
        alignItems: 'center',
        '& .MuiInputBase-root.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.87)'
        }
    },
    edit__button: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));
const account = () => {
    const classes = useStyles();
    const [showPass, setShowPass] = useState(false);

    const UserPassData = (props) => {
        let inputProps = {
            disableUnderline: true,
            endAdornment: (
                <InputAdornment position='end'>
                    <IconButton
                        onClick={() => (setShowPass(true))}
                        onMouseDown={() => (setShowPass(false))}
                        edge='end'
                    >
                        {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        };

        return <TextField
            InputProps={inputProps} {...props}
            type={showPass ? 'text' : 'password'}
            value={currentUser.password}
            size='small'
            fullWidth
            disabled
            variant='outlined'
        />;
    }
    const [openEdit, setOpenEdit] = useState(false);
    return (
        <div>
            <Banner title='Account Page' img='url(".././images/account.jpg")' />
            <Card>
                <Grid container className={classes.profile__body}>
                    <Grid item lg={6}>
                        <div className={classes.profile__box}>
                            <Avatar
                                className={classes.profile}
                                src={currentUser.profile}
                            /> 
                        </div>
                        <ImformationBox lable='First Name' value={currentUser.fname} />
                        <ImformationBox lable='Last Name' value={currentUser.lname} />
                        <ImformationBox lable='Gender' value={currentUser.gender} />
                        <ImformationBox lable='Birth Date' value={currentUser.birthDate} />
                        <ImformationBox lable='Grade' value={currentUser.grade} />
                        <ImformationBox lable='Phone Number' value={'+885 ' + currentUser.phoneNumber} />
                        <ImformationBox lable='Address' value={currentUser.address} />
                        <Grid container spacing={3} className={classes.user__data}>
                            <Grid item lg={3}>
                                <Typography>
                                    Password
                                </Typography>
                            </Grid>
                            <Grid item lg={9}>
                                <UserPassData />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={12} className={classes.edit__button}>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    onClick={() => setOpenEdit(true)}
                                >
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Dialog  open={openEdit}>
                <CtrlUpdate close={() => setOpenEdit(false)} />
            </Dialog>
        </div>
    );
}

export default account;