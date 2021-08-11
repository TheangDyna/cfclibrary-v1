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
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { useRouter } from 'next/router';
import Signup from './Signup';
import Signin from './Signin';


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
            background: '#3f51b5',
            boxShadow:' 0 2px 2px 0 rgba(0,0,0,0.2)',
            color: '#FFFFFF',
            '&:hover': {
                background: '#303f9f',
            },
        },
        active__icon: {
            color: '#FFFFFF',
        },
        menu__title: {
            paddingTop: theme.spacing(3),
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        sublist: {
            background: '#F4F4F4',
            width: `90%`,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,

        },
        appbar: {
            background: '#FFFFFF',
            zIndex:theme.zIndex.drawer+1,
            boxShadow:' 0 1px 1px 0 rgba(0,0,0,0.1)',
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
            width: `100%`
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
    const menuItems = [
        {
            text: 'home',
            icon: <HomeOutlinedIcon />,
            path: '/',
            sublist: 0
        },
        {
            text: 'Library',
            icon: <LibraryBooksOutlinedIcon />,
            path: '/library',
            sublist: 0
        },
        {
            text: 'Profile',
            icon: <AccountCircleOutlinedIcon />,
            sublist: 1,
            subListMenu:[
                {
                    text: 'History',
                    icon: <HistoryOutlinedIcon />,
                    path: '/',
                },
                {
                    text: 'Wish List',
                    icon: <BookmarkOutlinedIcon />,
                    path: '/',
                },
                {
                    text: 'Account',
                    icon: <SettingsOutlinedIcon />,
                    path: '/',
                }
            ]
        },
        {
            text: 'Report',
            icon: <AssessmentOutlinedIcon />,
            path: '/report',
            sublist: 0
        },
        {
            text: 'About',
            icon: <InfoOutlinedIcon />,
            path: '/about',
            sublist: 0
        },
        {
            text: 'Contact',
            icon: <ForumOutlinedIcon /*style={{color: 'gray'}}*/ />,
            path: '/contact',
            sublist: 0
        }
    ];

    const [openSignup, setOpenSignup] = useState(false);
    const [openSignin, setOpenSignin] = useState(false);
    
    return (
        <div>
            <AppBar
                position='fixed' 
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography color='textPrimary' variant='h5' noWrap>
                        Welcome to Aranh CFC Library
                    </Typography>
                    <div className={classes.flexGrow} />
                    <IconButton>
                        <Badge badgeContent={100} color='secondary' max={9}>
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <Avatar className={classes.appbar__avatar}>
                        {user[0].toUpperCase()}
                    </Avatar>
                    <Button variant='contained' color='primary' className={classes.signin__button} onClick={() => setOpenSignin(true)}>
                        Sign In
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawer__paper}}
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
                                            onClick={() => router.push(item.path)}
                                            className={router.pathname == item.path ? classes.active : null}
                                        >
                                            <ListItemIcon className={router.pathname == item.path ? classes.active__icon : null}>{item.icon}</ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ):(
                                        <div key={item.text}>
                                            <ListItem
                                                button 
                                                onClick={handleClickSublist}
                                            >
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.text} />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>
                                            <Collapse in={open} timeout='auto' unmountOnExit>
                                                <List component='div' disablePadding className={classes.sublist}>
                                                    {item.subListMenu.map((subItem ) => (
                                                        <ListItem button className={classes.nested} key={subItem.text} >
                                                            <ListItemIcon>{subItem.icon}</ListItemIcon>
                                                            <ListItemText primary={subItem.text} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        </div>
                                    )
                                ))}
                            </List>
                        </div>
                        <div className={classes.bottom__list}>
                            <List>
                                    <ListItem
                                        button
                                        // onClick={() => router.push('/loguot')}
                                        onClick={() => setOpenSignup(true)}
                                    >
                                        <ListItemIcon>
                                            <ExitToAppOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Sign Up' />
                                    </ListItem>
                            </List>
                        </div>
                    </div>
            </Drawer>
            <Dialog open={openSignup}>
                <Signup close={() => setOpenSignup(false)}/>
            </Dialog>
            <Dialog open={openSignin}>
                <Signin close={() => setOpenSignin(false)}/>
            </Dialog>
        </div>
     );
}
 
export default Navbar;