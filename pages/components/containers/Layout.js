import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#F9F9F9',
            width: '100%',
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingTop: theme.spacing(3),
        },
        toolbar: theme.mixins.toolbar,
    }
})

const Layout = ({children}) => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Navbar />
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
     );
}
 
export default Layout;