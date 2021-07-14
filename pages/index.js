import Head from 'next/head'
import Navbar from './components/containers/Navbar'
import styled from '../styles/Styled.module.css'
import Button from './components/presentaions/Button'

export default function conditional(){
    return(
       
            <div>
                <Head>
                    <title>Test | Home</title>
                </Head>
                <Navbar />
                <div className={styled.fContainer}>
                    <div className={styled.lHome}>
                        <div className={styled.homeImg}>
                            <div className={styled.content}>
                                <div className={styled.blockText}>
                                    <h1><b>Welcome to the Library</b></h1>
                                    <p>
                                        Libraries are important cornerstones of a healthy community. Libraries give people the opportunity to find jobs, explore medical research, experience new ideas, get lost in wonderful stories, while at the same time providing a sense of place for gathering. ... Our library is a unique and valuable resource. A library is a collection of materials, books or media that are easily accessible for use and not just for display purposes. It is responsible for housing updated information in order to meet the user's needs on a daily basis.
                                    </p>
                                    <Button label="read more..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styled.rHome}>
                        <div className={styled.top}>
                            <div className={styled.left1}>
                                <p className={styled.p}>
                                    Great books are written publications that have been accepted by modern day scholars as the essential foundation of literature in Western culture.
                                </p>
                            </div>
                            <div className={styled.right1}></div>
                        </div>
                        <div className={styled.bottom}>
                            <div className={styled.left2}></div>
                            <div className={styled.right2}>
                                <p className={styled.p}>
                                    Books give plenty of joy to students, and they learn a lot of things from books. They take them into a unique world of imagination and improve their standard of living. Books help to inspire students to do hard work with courage and hope. They enrich the experience of students and sharpen their intellect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}