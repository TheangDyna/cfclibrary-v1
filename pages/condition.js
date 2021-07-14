import Home_page from './index'
import Signup_page from './signup'

export default function condition(){
    const auth = false;
    return(
        <div>
            {
                auth? (
                    <Home_page/>
                ):(
                    <Signup_page/>
                )
            }
        </div>
    )
}