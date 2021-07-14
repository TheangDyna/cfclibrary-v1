import Head from 'next/head'
import Button from './components/presentaions/Button'
import Link from 'next/link'
export default function btnPage(){
    return(
       
            <div>
                <Head>
                    <title>Test | button</title>
                </Head>
                <h1>Button Page</h1>
                <Link href='/'>Go To Home Page</Link>
                <Button label="red"/>
                
                <Button label="yellow"/>
                
                <Button label="blue"/>
            </div>
       
    )
}