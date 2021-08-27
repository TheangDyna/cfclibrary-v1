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
import { currentUser } from '../components/presentaions/data';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ImformationBox from '../components/presentaions/ImformationBox';
import CtrlUpdate from '../components/containers/CtrlUpdate';

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