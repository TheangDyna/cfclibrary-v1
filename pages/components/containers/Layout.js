import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core';
import Footer from '../containers/Footer';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#F9F9F9',
            width: 'calc(100% - 200px)',
            padding: theme.spacing(3)
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
                <div className={classes.toolbar} />
                {children}
                <Footer />
            </div>
        </div>
     );
}
 
export default Layout;