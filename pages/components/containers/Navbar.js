import React, { useState } from 'react';
import {
    makeStyles,
    Badge,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    AppBar,
    Toolbar,
    IconButton,
    Avatar,
    Dialog,
    Button,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { useRouter } from 'next/router';
import CtrlAuth from './CtrlAuth'
import Signin from './Signin';
import { menuItems } from '../presentaions/data';
import { FormatColorResetSharp } from '@material-ui/icons';


const drawerWidth = 200;
const user = 'Dyna';
const useStyles = makeStyles((theme) => {
    return {
        flexGrow: {
            flexGrow: 1,
        },
        drawer: {
            width: drawerWidth,
        },
        drawer__paper: {
            width: drawerWidth,
            background: '#FFFFFF'
        },
        active: {
            background: '#1eae98',
            // boxShadow: ' 0 1px 1px 0 rgba(0,0,0,0.1)',
            color: '#FFFFFF',
            '&:hover': {
                background: '#1a9885',
            },
        },
        active__icon: {
            color: '#FFFFFF',
        },
        menu__title: {
            paddingTop: theme.spacing(3),
        },
        sublist: {
            background: '#F4F4F4',
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 10
        },
        appbar: {
            background: '#FFFFFF',
            zIndex: theme.zIndex.drawer + 1,
            boxShadow: ' 0 1px 1px 0 rgba(0,0,0,0.1)',
            height: 60
        },
        appbar__avatar: {
            background: '#B5EAEA',
            marginLeft: theme.spacing(2),
            color: '#000000'
        },
        signin__button: {
            marginLeft: theme.spacing(2),
            minWidth: 'max-content'
        },
        bottom__list: {
            position: 'absolute',
            bottom: 10,
            width: '100%'
        },
        logo: {
            cursor: 'pointer',
        }
    }
});

const Navbar = () => {
    const classes = useStyles();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleClickSublist = () => {
        setOpen(!open);

    };
    const [openCtrlAuth, setOpenCtrlAuth] = useState(false);
    const [openIn, setOpenIn] = useState('');

    const signined = true;
    const usered = true;
    return (
        <div>
            <AppBar
                position='fixed'
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <div className={classes.logo}>
                        <img src='/images/logo.png' alt='logo' width='60px' />
                    </div>
                    <div className={classes.flexGrow} />
                    <Typography color='textPrimary' variant='h5' noWrap>
                        Welcome to Aranh CFC Library
                    </Typography>
                    <div className={classes.flexGrow} />
                    {
                        signined ?
                            (
                                <div style={{ display: 'flex' }}>
                                    <IconButton>
                                        <Badge badgeContent={100} color='secondary' max={9}>
                                            <NotificationsNoneOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                    <Avatar className={classes.appbar__avatar}>
                                        {user[0].toUpperCase()}
                                    </Avatar>
                                </div>
                            ) : (
                                <Button variant='contained' color='primary' className={classes.signin__button} onClick={() => { setOpenCtrlAuth(true), setOpenIn('signin') }}>
                                    Sign In
                                </Button>
                            )
                    }
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawer__paper }}
            >
                <Toolbar />
                <Typography
                    color='textSecondary'
                    align='center'
                    variant='h6'
                    className={classes.menu__title}
                >
                    Menu
                </Typography>
                <div className={classes.container}>
                    <div className={classes.start}>
                        <List>
                            {menuItems.map((item) => (
                                item.sublist == 0 ? (
                                    <ListItem
                                        button
                                        key={item.text}
                                        onClick={() => { router.push(item.path)}}
                                        className={router.pathname == item.path ? classes.active : null}
                                    >
                                        <ListItemIcon className={router.pathname == item.path ? classes.active__icon : null}>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ) : (
                                    <div key={item.text}>
                                        <ListItem
                                            button
                                            onClick={handleClickSublist}
                                            className={
                                                router.pathname == '/profile/history'? classes.active
                                                :router.pathname == '/profile/wishlist'? classes.active
                                                :router.pathname == '/profile/account'? classes.active
                                                :router.pathname == '/profile/bookList'? classes.active
                                                :router.pathname == '/profile/userList'? classes.active
                                                : null}
                                        >
                                            <ListItemIcon className={
                                                router.pathname == '/profile/history'? classes.active__icon
                                                :router.pathname == '/profile/wishlist'? classes.active__icon
                                                :router.pathname == '/profile/account'? classes.active__icon
                                                :router.pathname == '/profile/bookList'? classes.active__icon
                                                :router.pathname == '/profile/userList'? classes.active__icon
                                                : null}>
                                                    {item.icon}
                                                    </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse in={open} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding className={classes.sublist}>
                                                {
                                                    usered ? (
                                                        item.subListMenu.map((subItem) => (
                                                            <ListItem button key={subItem.text} onClick={() => { router.push(subItem.path)}}>
                                                                <ListItemIcon>{subItem.icon}</ListItemIcon>
                                                                <ListItemText primary={subItem.text} />
                                                            </ListItem>
                                                        ))
                                                    ) : (
                                                        item.subListAdmin.map((subItem) => (
                                                            <ListItem button key={subItem.text} onClick={() => { router.push(subItem.path)}}>
                                                                <ListItemIcon>{subItem.icon}</ListItemIcon>
                                                                <ListItemText primary={subItem.text} />
                                                            </ListItem>
                                                        ))
                                                    )
                                                }
                                            </List>
                                        </Collapse>
                                    </div>
                                )
                            ))}
                        </List>
                    </div>
                    <div className={classes.bottom__list}>
                        <List>
                            {
                                signined ?
                                    (
                                        <ListItem
                                            button
                                        // onClick={() => router.push('/Sign Out')}
                                        >
                                            <ListItemIcon>
                                                <ExitToAppOutlinedIcon style={{ transform: 'rotate(-180deg)' }} />
                                            </ListItemIcon>
                                            <ListItemText primary='Sign Out' />
                                        </ListItem>

                                    ) : (

                                        <ListItem
                                            button
                                            onClick={() => router.push('/loguot')}
                                            onClick={() => { setOpenCtrlAuth(true), setOpenIn('signup') }}
                                        >
                                            <ListItemIcon>
                                                <LaunchOutlinedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Sign Up' />
                                        </ListItem>
                                    )
                            }
                        </List>
                    </div>
                </div>
            </Drawer>
            <Dialog open={openCtrlAuth}>
                <CtrlAuth close={() => setOpenCtrlAuth(false)} open={openIn} />
            </Dialog>

        </div>
    );
}

export default Navbar;