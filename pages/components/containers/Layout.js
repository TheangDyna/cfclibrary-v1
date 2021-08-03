import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            // background: '#F4F4F4',
            width: '100%',
            padding: theme.spacing(3),
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