import Update from './Update';
import ComfirmPass from './ComfirmPass';
import VerifyPhoneNumber from './VerifyPhoneNumber';
import ResetPass from './ResetPassword';
import { useState } from 'react';

const CtrlUpdate = ({close}) => {

    const [update, setUpdate]= useState('ComfirmPass');
    
    return (
        <div>
            
            {
                update == 'ComfirmPass' ? <ComfirmPass reset={()=>setUpdate('VerifyPhoneNumber')} update={()=>setUpdate('update')} close={close} /> 
                : update == 'update' ? <Update close={close}/>
                : update == 'VerifyPhoneNumber' ? <VerifyPhoneNumber reset={()=>setUpdate('resetPass')} close={close}/>
                : update == 'resetPass' ? <ResetPass close={close}/>
                : null
            }
        </div>
     );
}
 
export default CtrlUpdate;