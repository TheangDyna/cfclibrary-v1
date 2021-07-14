import styled from '../../../styles/Styled.module.css'
export default function Button({label}){
    return(
        <div>
            <button className={styled.button}>
                {label}
            </button>
        </div>
    )
}   