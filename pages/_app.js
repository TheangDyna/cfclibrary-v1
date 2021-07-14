import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
      <div>
         <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        </Head>
        <Component {...pageProps} />
      </div>
      
    )
}

export default MyApp
