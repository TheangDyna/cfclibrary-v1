import styled from '../../../styles/Styled.module.css'
import Activelink from '../presentaions/Activelink'
export default function Navbar(){
    return(
        <div className={styled.nav}>
            <Activelink href="/"><i class="fas fa-home"></i>Home</Activelink>
            <Activelink href="/library"><i class="fas fa-book"></i>Library</Activelink>
            <Activelink href="/about"><i class="fas fa-address-card"></i>About</Activelink>
            <Activelink href="/contact"><i class="fas fa-comments"></i>Contact</Activelink>
            <Activelink href="/signup"><i class="fas fa-user-plus"></i>Sign Up</Activelink>
        </div>
    )
}