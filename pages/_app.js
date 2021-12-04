import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@material-ui/core';
import Layout from './components/containers/Layout';

const theme = createTheme({
  typography: {
    fontFamily: 'Viga',
  },
  palette: {
    primary: {
      light: '#22c4ab',
      main: '#1eae98',
      dark: '#1a9885',
      contrastText: "#ffffff"
    },
  },
})

function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>  
    )
}

export default MyApp
