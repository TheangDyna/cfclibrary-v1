import Head from 'next/head'
import Navbar from './components/containers/Navbar'
export default function library(){
    return(
       
            <div>
                <Head>
                    <title>Test | Library</title>
                </Head>
                <Navbar />
                <h1>Library Page</h1>
            </div>
       
    )
}