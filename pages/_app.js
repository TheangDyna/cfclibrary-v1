import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@material-ui/core'
import Layout from './components/containers/Layout'

const theme = createTheme({
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
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
