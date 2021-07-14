import Head from 'next/head'
import styled from '../styles/Styled.module.css'
import Navbar from './components/containers/Navbar'
import Button from './components/presentaions/Button'

export default function signup(){
    return(
       
            <div>
                <Head>
                    <title>Test | Sign Up</title>
                </Head>
                <Navbar />
                <div className={styled.signup_container}>
                    <div className={styled.signup_img}></div>
                    <div className={styled.signup_form}>
                        <form>
                            <div className={styled.from}>
                                <h1><b>Sign Up</b></h1>
                                <div className={styled.form_name}>
                                    <div className={styled.input1}>
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" placeholder="Enter First Name..."/>
                                    </div>
                                    <div className={styled.input2}>
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" placeholder="Enter Last Name..."/>
                                    </div>
                                </div>
                                <div className={styled.form_email}>
                                    <div className={styled.input3}>
                                    <label htmlFor="gmail">Email</label>
                                    <input type="email" id="gmail" placeholder="Enter Your Email"/>
                                </div>
                                </div>
                                <div className={styled.form_pass}>
                                    <div className={styled.input4}>
                                        <label htmlFor="pass">New Password</label>
                                        <input type="password" id="pass" placeholder="Enter New Password..."/>
                                    </div>
                                    <div className={styled.input5}>
                                        <label htmlFor="Cpass">Comfirm Password</label>
                                        <input type="password" id="Cpass" placeholder="Enter Comfirm Password..."/>
                                    </div>
                                </div>
                                <div className={styled.form_button}>
                                    <Button label="Cancel"/>
                                    <Button label="Sign Up"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
       
    )
}