import Signin from './Signin';
import Signup from './Signup';
import VerifyPhoneNumber from './VerifyPhoneNumber';
import ResetPass from './ResetPassword';
import { useState } from 'react';

const CtrlAuth = ({close, open}) => {

    const [auth, setAuth]= useState(open);
    
    return (
        <div>
            
            {
                auth == 'signin' ? <Signin signup={()=>setAuth('signup')} reset={()=>setAuth('verifyPhoneNumber')} close={close} /> 
                : auth == 'signup' ? <Signup signin={()=>setAuth('signin')} close={close}/>
                : auth == 'verifyPhoneNumber' ? <VerifyPhoneNumber reset={()=>setAuth('resetPass')} close={close}/>
                : auth == 'resetPass' ? <ResetPass close={close}/>
                : null
            }
        </div>
     );
}
 
export default CtrlAuth;