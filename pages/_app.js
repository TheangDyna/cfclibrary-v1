import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/containers/Layout'

const theme = createTheme({
  typography:{
    fontFamily: 'Viga',
  }
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
