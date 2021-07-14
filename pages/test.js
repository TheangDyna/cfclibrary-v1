import Head from 'next/head'
import Link from 'next/link'
import Img from './components/presentaions/Image'
import Navbar from './components/containers/Navbar'
export default function home(){

  const isTrue = false;
  function showName(){
    alert("Dyna")
  }
  return(
    <div>
      <Head>
        <title>Test | Home</title>
      </Head>
      <Navbar />
      <h1>Home Page</h1>
      <button onClick={showName}>Click Me</button>
      <div id = "name"></div>
      <Link href='/btnPage'>Go To Login Page</Link>
      <Img src = 'image/bird1.jpg'/>
      <Img src = 'image/bird2.jpg'/>
      <Img src = 'image/bird3.jpg'/>
      <Img src = 'image/bird4.jpg'/>
    </div>
  )
}