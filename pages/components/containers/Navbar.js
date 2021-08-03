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

const drawerWidth = 200;
const user = 'Dyna';
const useStyles = makeStyles((theme) => {
    return {
        grow: {
            flexGrow: 1,
          },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
            background: '#FFFFFF'
        },
        active: {
            background: '#B5EAEA',
            boxShadow:' 0 2px 2px 0 rgba(0,0,0,0.2)',
        },
        title: {
            paddingTop: theme.spacing(2),
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        subList: {
            background: '#F4F4F4',
            width: `90%`,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 10,
            marginBottom: 10,

        },
        appBar: {
            background: '#FFFFFF',
            zIndex:theme.zIndex.drawer+1,
            boxShadow:' 0 1px 1px 0 rgba(0,0,0,0.1)',
        },
        avatar: {
            background: '#B5EAEA',
            marginLeft: theme.spacing(2),
            color: '#000000'
        },
        end: {
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

    const handleClick = () => {
        setOpen(!open);
    };
    const menuItems = [
        {
            text: 'home',
            icon: <HomeOutlinedIcon />,
            path: '/',
            subList: 0
        },
        {
            text: 'Library',
            icon: <LibraryBooksOutlinedIcon />,
            path: '/library',
            subList: 0
        },
        {
            text: 'Profile',
            icon: <AccountCircleOutlinedIcon />,
            subList: 1,
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
            subList: 0
        },
        {
            text: 'About',
            icon: <InfoOutlinedIcon />,
            path: '/about',
            subList: 0
        },
        {
            text: 'Contact',
            icon: <ForumOutlinedIcon /*style={{color: 'gray'}}*/ />,
            path: '/contact',
            subList: 0
        }
    ];
    
    return (
        <div>
            <AppBar
                position='fixed' 
                className={classes.appBar}
                elevation={0}
            >
                <Toolbar>
                    <Typography color='textPrimary' variant='h5' noWrap>
                        ¯\_(ツ)_/¯ Welcome to Aranh CFC Library
                    </Typography>
                    <div className={classes.grow} />
                    <IconButton>
                        <Badge badgeContent={100} color='secondary' max={9}>
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </IconButton>
                    <Avatar className={classes.avatar}>
                        {user[0].toUpperCase()}
                    </Avatar>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper}}
            >
                <Toolbar />
                <Typography
                    color='textSecondary'
                    align='center'
                    variant='h5'
                    className={classes.title}
                >
                    Menu
                </Typography>
                    <div className={classes.container}>
                        <div className={classes.start}>
                            <List>
                                {menuItems.map((item,index) => (
                                    item.subList === 0 ? (
                                        <ListItem
                                            button 
                                            key={index} 
                                            onClick={() => router.push(item.path)}
                                            className={router.pathname == item.path ? classes.active : null}
                                        >
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ):(
                                        <div>
                                            <ListItem
                                                button 
                                                key={index}
                                                onClick={handleClick}
                                            >
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.text} />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>
                                            <Collapse in={open} timeout='auto' unmountOnExit>
                                                <List component='div' disablePadding className={classes.subList}>
                                                    {item.subListMenu.map((subItem,index ) => (
                                                        <ListItem button className={classes.nested} key={index} >
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
                        <div className={classes.end}>
                            <List>
                                    <ListItem
                                        button
                                        onClick={() => router.push('/loguot')}
                                    >
                                        <ListItemIcon>
                                            <ExitToAppOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Log Out' />
                                    </ListItem>
                            </List>
                        </div>
                    </div>
            </Drawer>
        </div>
     );
}
 
export default Navbar;