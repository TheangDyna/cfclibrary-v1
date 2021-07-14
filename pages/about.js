import Head from 'next/head'
import Navbar from './components/containers/Navbar'
export default function about(){
    return(
       
            <div>
                <Head>
                    <title>Test | About</title>
                </Head>
                <Navbar />
                <h1>About Page</h1>
            </div>
       
    )
}